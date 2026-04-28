'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoSecondary from '@/public/assets/logo_transparent_secondary.png';
import logoPrimary from '@/public/assets/logo_transparent_primary.png';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide navbar if drawer is open
      if (open) return;
      
      if (currentScrollY > 90) {
        if (currentScrollY > lastScrollY) {
          setShow(false); // scrolling down
        } else {
          setShow(true); // scrolling up
        }
      } else {
        setShow(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isClient, open]);

  const navLinks = [
    { text: 'RELEASES', href: '/releases' },
    { text: 'ARTISTAS', href: '/artists' },
    { text: 'MANIFESTO', href: '/manifesto' },
    { text: 'CALENDIVÁRIO', href: '/calendar' },
    { text: 'CONTACTOS', href: '/contacts' },
  ];

  const DrawerContent = () => (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#7249b0',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <Link href="/">
          <Image
            src={logoPrimary}
            alt="Saliva Diva Logo"
            width={52}
            height={52}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon sx={{ fontSize: '2rem', color: '#7cfec3' }} />
        </IconButton>
      </Box>

      {/* Drawer Links */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{ textDecoration: 'none' }}
          >
            <Typography
              variant="h5"
              sx={{
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#7cfec3',
                fontSize: '1.25rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              {link.text}
            </Typography>
          </Link>
        ))}
      </Box>

      {/* Contact Info */}
      <Box sx={{ marginTop: 'auto', paddingBottom: '20px' }}>
        <Typography variant="body2" sx={{ marginBottom: '10px', color: '#7cfec3', fontSize: '0.9rem' }}>
          saliva.diva.label@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ color: '#7cfec3', fontSize: '0.9rem' }}>
          newsletter@salivadiva.pt
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: show ? 'blur(10px)' : 'none',
          transition: 'all 0.5s ease-in',
          transform: (show || open) ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: show ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          zIndex: 1100,
        }}
      >
        {/* Mobile Toolbar */}
        <Toolbar sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', padding: '12px 16px', minHeight: '64px' }}>
          <IconButton sx={{ padding: 0 }}>
            <Image
              src={logoSecondary}
              alt="Saliva Diva Logo"
              width={52}
              height={52}
              priority
              style={{ cursor: 'pointer' }}
            />
          </IconButton>
          <IconButton onClick={() => setOpen(true)} sx={{ padding: '8px' }}>
            <MenuIcon sx={{ fontSize: '2rem', color: '#7cfec3' }} />
          </IconButton>
        </Toolbar>

        {/* Desktop Toolbar */}
        <Toolbar
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Logo */}
          <Link href="/">
            <Image
              src={logoSecondary}
              alt="Saliva Diva Logo"
              width={52}
              height={52}
              priority
              style={{ cursor: 'pointer' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: '#7cfec3',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  {link.text}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Menu Icon - Desktop */}
          <IconButton onClick={() => setOpen(true)} sx={{ padding: 0 }}>
            <MenuIcon sx={{ fontSize: '2rem', color: '#7cfec3' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#7249b0',
            overflow: 'auto',
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
}

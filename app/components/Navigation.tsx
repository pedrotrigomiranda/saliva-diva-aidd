'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
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
  }, [lastScrollY]);

  const navLinks = [
    { text: 'RELEASES', href: '/releases' },
    { text: 'ARTISTS', href: '/artists' },
    { text: 'MANIFESTO', href: '/manifesto' },
    { text: 'CALENDAR', href: '/calendar' },
    { text: 'CONTACTS', href: '/contacts' },
  ];

  const DesktopNav = () => (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Logo */}
      <Link href="/">
        <Box
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          SD
        </Box>
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
                transition: 'all 0.3s ease',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {link.text}
            </Typography>
          </Link>
        ))}
      </Box>

      {/* Menu Icon */}
      <IconButton onClick={() => setOpen(true)} sx={{ padding: 0 }}>
        <MenuIcon sx={{ fontSize: '2rem' }} />
      </IconButton>
    </Toolbar>
  );

  const DrawerContent = () => (
    <Box
      sx={{
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        padding: '20px',
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
          <Box
            sx={{
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            SD
          </Box>
        </Link>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon sx={{ fontSize: '2rem' }} />
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
              variant="h4"
              sx={{
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                '&:hover': {
                  textDecoration: 'underline',
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
        <Typography variant="body2" sx={{ marginBottom: '10px' }}>
          saliva.diva.label@gmail.com
        </Typography>
        <Typography variant="body2">newsletter@salivadiva.pt</Typography>
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
          transform: show ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: show ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          zIndex: 1100,
        }}
      >
        {isMobile ? (
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/">
              <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SD</Box>
            </Link>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Toolbar>
        ) : (
          <DesktopNav />
        )}
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100vw',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
}

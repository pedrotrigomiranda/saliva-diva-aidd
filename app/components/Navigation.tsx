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

const navLinks = [
  { text: 'LANÇAMENTOS', href: '/releases' },
  { text: 'ARTISTAS', href: '/artists' },
  { text: 'MANIFESTO', href: '/manifesto' },
  { text: 'CALENDIVÁRIO', href: '/calendar' },
  { text: 'CONTACTOS', href: '/contacts' },
];

interface DrawerContentProps {
  onClose: () => void;
}

function DrawerContent({ onClose }: DrawerContentProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7cfec3',
        px: { xs: 3, md: 3 },
        py: { xs: 2, md: 3 },
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: { xs: '24px', md: '40px' },
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
          <IconButton onClick={onClose} sx={{ padding: { xs: '8px', md: 0 } }} aria-label="Close menu">
            <CloseIcon sx={{ fontSize: '2rem', color: '#7249b0' }} />
          </IconButton>
        </Box>

        {/* Drawer Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 }, width: '100%' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Typography
                variant="h5"
                sx={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  color: '#7249b0',
                  fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.05,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  textAlign: 'left',
                }}
              >
                {link.text}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          pt: { xs: 2, md: 3 },
          borderTop: '1px solid rgba(114, 73, 176, 0.2)',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: '#7249b0',
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          Contactos
        </Typography>
        <Typography variant="body2" sx={{ color: '#7249b0', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
          saliva.diva.label@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ color: '#7249b0', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
          newsletter@salivadiva.pt
        </Typography>
      </Box>
    </Box>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
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
  }, [lastScrollY, open]);

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          transition: 'all 0.5s ease-in',
          transform: (show || open) ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: 'transparent',
          zIndex: 1100,
          touchAction: 'manipulation',
        }}
      >
        {/* Mobile Toolbar */}
        <Toolbar sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', padding: '12px 16px', minHeight: '64px' }}>
          <IconButton sx={{ padding: 0 }} aria-label="Saliva Diva home">
            <Image
              src={logoSecondary}
              alt="Saliva Diva Logo"
              width={52}
              height={52}
              priority
              style={{ cursor: 'pointer' }}
            />
          </IconButton>
          <IconButton onClick={() => setOpen(true)} sx={{ padding: '8px', touchAction: 'manipulation' }} aria-label="Open menu">
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
          {/* Menu Icon - Desktop */}
          <IconButton onClick={() => setOpen(true)} sx={{ padding: 0, touchAction: 'manipulation' }} aria-label="Open menu">
            <MenuIcon sx={{ fontSize: '2rem', color: '#7cfec3' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: '100vw',
            maxWidth: '100vw',
            height: '100vh',
            maxHeight: '100vh',
            backgroundColor: '#7cfec3',
            overflow: 'hidden',
          },
        }}
      >
        <DrawerContent onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
}

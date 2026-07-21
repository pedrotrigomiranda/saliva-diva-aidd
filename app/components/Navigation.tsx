'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoPrimary from '@/public/assets/logo_transparent_primary.png';
import logoSecondary from '@/public/assets/logo_transparent_secondary.png';

const navLinks = [
  { text: 'LANÇAMENTOS', href: '/releases' },
  { text: 'ARTISTAS', href: '/artists' },
  { text: 'MANIFESTO', href: '/manifesto' },
  { text: 'CALENDIVÁRIO', href: '/calendar' },
  { text: 'CONTACTOS', href: '/contacts' },
];

function DrawerContent({ onClose }: { onClose: () => void }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#7cfec3',
        px: { xs: 4, sm: 5 },
        pt: { xs: 4, sm: 5 },
        pb: { xs: 3, sm: 4 },
        boxSizing: 'border-box',
        overflowY: 'auto',
        paddingTop: 'env(safe-area-inset-top, 24px)',
        paddingBottom: 'env(safe-area-inset-bottom, 24px)',
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
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

          <Box
            component="button"
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              color: '#7249b0',
            }}
          >
            <CloseIcon sx={{ fontSize: '2rem', color: '#7249b0' }} />
          </Box>
        </Box>

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
                  fontSize: { xs: '2rem', sm: '2.3rem', md: '2.8rem' },
                  lineHeight: 1.05,
                  transition: 'all 0.25s ease',
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
        <Typography variant="body2" sx={{ color: '#7249b0', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          saliva.diva.label@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ color: '#7249b0', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
          newsletter@salivadiva.pt
        </Typography>
      </Box>
    </Box>
  );
}

export default function Navigation() {
  const [show, setShow] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 90) {
        setShow(currentScrollY <= lastScrollY.current);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const scrollY = window.scrollY;

    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;

      if (drawerOpen) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseDrawer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          transition: 'transform 0.5s ease-in',
          transform: show || drawerOpen ? 'translateY(0)' : 'translateY(-100%)',
          zIndex: 1100,
          touchAction: 'manipulation',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '10px 12px',
            minHeight: '56px',
          }}
        >
          <Link
            href="/"
            aria-label="Saliva Diva home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              padding: 0,
              margin: 0,
              minWidth: 44,
              minHeight: 44,
            }}
          >
            <Image
              src={logoSecondary}
              alt="Saliva Diva Logo"
              width={52}
              height={52}
              priority
              style={{
                cursor: 'pointer',
                backgroundColor: 'transparent',
              }}
            />
          </Link>

          <Box
            component="button"
            type="button"
            onClick={handleOpenDrawer}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav-drawer"
            className="mobile-nav-toggle"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              background: 'rgba(8, 3, 18, 0.35)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.28)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              padding: '12px',
              minWidth: 52,
              minHeight: 52,
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#7cfec3',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              '&:active': {
                transform: 'scale(0.96)',
              },
            }}
          >
            <MenuIcon sx={{ fontSize: '2.2rem', color: 'currentColor' }} />
          </Box>
        </Box>
      </AppBar>

      <Box
        className="mobile-nav-backdrop"
        onClick={handleCloseDrawer}
        sx={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1195,
          opacity: drawerOpen ? 1 : 0,
          visibility: drawerOpen ? 'visible' : 'hidden',
          pointerEvents: drawerOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
        aria-hidden={!drawerOpen}
      />

      <Box
        id="mobile-nav-drawer"
        className="mobile-nav-drawer"
        role={drawerOpen ? 'dialog' : undefined}
        aria-modal={drawerOpen ? 'true' : undefined}
        aria-hidden={!drawerOpen}
        sx={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          minHeight: '100vh',
          zIndex: 1200,
          transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          opacity: drawerOpen ? 1 : 0,
          visibility: drawerOpen ? 'visible' : 'hidden',
          pointerEvents: drawerOpen ? 'auto' : 'none',
          transition: 'transform 0.35s ease, opacity 0.35s ease',
          backgroundColor: '#7cfec3',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
        }}
        onClick={handleCloseDrawer}
      >
        <DrawerContent onClose={handleCloseDrawer} />
      </Box>
    </>
  );
}
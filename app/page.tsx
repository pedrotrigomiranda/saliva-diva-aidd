'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Box } from '@mui/material';
import homepageLogo from '@/public/assets/homepage_logo.png';
import RecentReleasesSlideshow from './components/RecentReleasesSlideshow';
import HomeCalendarSection from './components/HomeCalendarSection';

export default function Home() {
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setHideScrollIndicator(false);
        return;
      }

      const scrollProgress = window.scrollY / scrollableHeight;
      setHideScrollIndicator(scrollProgress > 0.5);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 0,
        }}
      >
        <Box
          sx={{
            minHeight: '100dvh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            pb: { xs: 4, md: 5 },
          }}
        >
          <Image
            src={homepageLogo}
            alt="Saliva Diva Homepage Logo"
            priority
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '90vw',
              height: 'auto',
              margin: '0 auto',
              cursor: 'pointer',
            }}
          />

          <Box
            aria-hidden="true"
            className="scroll-indicator"
            sx={{
              position: 'fixed',
              left: '50%',
              bottom: { xs: 16, md: 24 },
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              color: 'secondary.main',
              opacity: hideScrollIndicator ? 0 : 0.95,
              pointerEvents: 'none',
              transition: 'opacity 420ms ease',
              zIndex: 3,
              '@media (prefers-reduced-motion: reduce)': {
                '& .scroll-indicator-dot': {
                  animation: 'none',
                },
                '& .scroll-indicator-enter': {
                  animation: 'none',
                },
              },
              '@keyframes scroll-indicator-enter': {
                '0%': {
                  opacity: 0,
                },
                '100%': {
                  opacity: 1,
                },
              },
              '@keyframes scroll-indicator-move': {
                '0%': {
                  transform: 'translate(-50%, 2px)',
                  opacity: 0.95,
                },
                '60%': {
                  transform: 'translate(-50%, 12px)',
                  opacity: 0.35,
                },
                '100%': {
                  transform: 'translate(-50%, 2px)',
                  opacity: 0.95,
                },
              },
            }}
          >
            <Box
              className="scroll-indicator-enter"
              sx={{
                animation: 'scroll-indicator-enter 500ms ease-out 120ms both',
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 38,
                  border: '2px solid currentColor',
                  borderRadius: 16,
                  position: 'relative',
                }}
              >
                <Box
                  className="scroll-indicator-dot"
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 8,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: 'currentColor',
                    transform: 'translate(-50%, 0)',
                    animation: 'scroll-indicator-move 1.5s ease-in-out infinite',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <RecentReleasesSlideshow />
        <HomeCalendarSection />
      </Box>
    </Container>
  );
}

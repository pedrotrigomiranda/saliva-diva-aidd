'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Box, Typography } from '@mui/material';
import homepageLogo from '@/public/assets/homepage_logo.png';
import RecentReleasesSlideshow from './components/RecentReleasesSlideshow';
import HomeCalendarSection from './components/HomeCalendarSection';
import HomeRecordsPlayerSection from './components/HomeRecordsPlayerSection';
import ArtistCard from './components/ArtistCard';
import artists from './data/artists';

export default function Home() {
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);
  const homeArtists = artists.slice(0, 8);

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
        <HomeRecordsPlayerSection />

        <Box
          component="section"
          aria-label="Artistas"
          sx={{
            width: '100%',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
            pb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 'bold',
              lineHeight: 1,
              textAlign: 'left',
              mb: 4,
            }}
          >
            ARTISTAS
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 280px)',
                md: 'repeat(3, 240px)',
                lg: 'repeat(4, 240px)',
              },
              gap: 3,
              margin: '0 auto',
              padding: { xs: '0', md: '32px 0' },
              boxSizing: 'border-box',
              justifyItems: 'center',
              justifyContent: 'center',
            }}
          >
            {homeArtists.map((artist, index) => (
              <ArtistCard key={`${artist.name}-${index}`} artist={artist} />
            ))}
          </Box>

          <Box sx={{ mt: { xs: 1.5, md: 2.5 }, textAlign: 'left' }}>
            <Typography
              component={Link}
              href="/artists"
              sx={{
                display: 'inline-flex',
                color: '#7cfec3',
                textDecoration: 'underline',
                textTransform: 'uppercase',
                fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.1rem' },
                fontWeight: 800,
                letterSpacing: '0.03em',
                '&:hover': {
                  opacity: 0.86,
                },
              }}
            >
              VER TODOS OS ARTISTAS
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
              mx: 'auto',
              mt: { xs: 5, md: 7 },
              pb: { xs: 8, md: 12 },
              textAlign: 'left',
            }}
          >
            <Typography
              component="a"
              href="https://eepurl.com/hndptv"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                color: '#7cfec3',
                textDecoration: 'underline',
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', sm: '2.2rem', md: '3rem' },
                fontWeight: 800,
                letterSpacing: '0.03em',
                '&:hover': {
                  opacity: 0.86,
                },
              }}
            >
              SUBESCREVER NEWSLETTER
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

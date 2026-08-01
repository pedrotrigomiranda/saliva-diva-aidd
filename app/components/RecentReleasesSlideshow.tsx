'use client';

import { useEffect, useMemo, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Link from 'next/link';
import releases from '../data/releases';

const AUTO_ADVANCE_MS = 5000;

type Release = (typeof releases)[number];
type Slide =
  | { type: 'release'; release: Release }
  | { type: 'all-releases' };

export default function RecentReleasesSlideshow() {
  const slides = useMemo<Slide[]>(
    () => [
      ...releases.slice(0, 3).map((release) => ({ type: 'release' as const, release })),
      { type: 'all-releases' as const },
    ],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <Box
      component="section"
      aria-label="Novos lançamentos"
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
          marginBottom: 4,
        }}
      >
        NOVOS LANÇAMENTOS
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          borderRadius: currentSlide.type === 'release' ? '20px' : 0,
          overflow: 'hidden',
          boxShadow: currentSlide.type === 'release' ? '0 18px 50px rgba(0, 0, 0, 0.35)' : 'none',
        }}
      >
        {currentSlide.type === 'release' ? (
          <Box
            component={Link}
            href={`/releases#release-${currentSlide.release.diva}`}
            aria-label={`Abrir lançamento ${currentSlide.release.artist} - ${currentSlide.release.name}`}
            sx={{
              display: 'block',
              position: 'relative',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src={currentSlide.release.banner || currentSlide.release.cover}
              alt={`${currentSlide.release.artist} - ${currentSlide.release.name}`}
              sx={{
                width: '100%',
                height: { xs: '260px', sm: '320px', md: '420px' },
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.05) 8%, rgba(0, 0, 0, 0.75) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#7cfec3',
                  fontWeight: 700,
                  fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {currentSlide.release.artist}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2.3rem' },
                  lineHeight: 1.15,
                  textTransform: 'uppercase',
                }}
              >
                {currentSlide.release.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#ffffff',
                  mt: 0.75,
                  opacity: 0.92,
                  fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
                }}
              >
                {`${currentSlide.release.year} • DIVA ${currentSlide.release.diva}`}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            component={Link}
            href="/releases"
            aria-label="Ver todos os lançamentos"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: { xs: '260px', sm: '320px', md: '420px' },
              textDecoration: 'none',
              color: '#ffffff',
              background: 'transparent',
              transition: 'filter 200ms ease',
              '&:hover': {
                filter: 'brightness(1.08)',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#7cfec3',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'underline',
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3.6rem' },
                lineHeight: 1,
              }}
            >
              VER TODOS
            </Typography>
          </Box>
        )}

        <IconButton
          aria-label="Lançamento anterior"
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            left: { xs: 10, md: 14 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ffffff',
            bgcolor: 'rgba(0, 0, 0, 0.35)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.55)' },
          }}
        >
          <KeyboardArrowLeftRoundedIcon />
        </IconButton>

        <IconButton
          aria-label="Próximo lançamento"
          onClick={goToNext}
          sx={{
            position: 'absolute',
            right: { xs: 10, md: 14 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ffffff',
            bgcolor: 'rgba(0, 0, 0, 0.35)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.55)' },
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            right: { xs: 12, md: 16 },
            bottom: { xs: 12, md: 16 },
            px: 1.2,
            py: 0.45,
            borderRadius: '999px',
            bgcolor: 'rgba(0, 0, 0, 0.55)',
          }}
        >
          <Typography sx={{ color: '#ffffff', fontSize: { xs: '0.75rem', md: '0.8rem' } }}>
            {`${currentIndex + 1}/${slides.length}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

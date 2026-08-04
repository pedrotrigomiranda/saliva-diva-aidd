'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Link from 'next/link';
import releases from '../data/releases';

const AUTO_ADVANCE_MS = 5000;
const TRANSITION_MS = 520;
const SLIDE_HEIGHT = { xs: '320px', sm: '440px', md: '620px' } as const;

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
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  const clearTransitionTimeout = () => {
    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  };

  const startTransitionTo = useCallback(
    (targetIndex: number) => {
      if (slides.length <= 1 || pendingIndex !== null || targetIndex === currentIndex) {
        return;
      }

      clearTransitionTimeout();
      setPendingIndex(targetIndex);

      transitionTimeoutRef.current = window.setTimeout(() => {
        setCurrentIndex(targetIndex);
        setPendingIndex(null);
        transitionTimeoutRef.current = null;
      }, TRANSITION_MS);
    },
    [currentIndex, pendingIndex, slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1 || pendingIndex !== null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      startTransitionTo((currentIndex + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentIndex, pendingIndex, slides.length, startTransitionTo]);

  useEffect(() => () => clearTransitionTimeout(), []);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];
  const nextSlide = pendingIndex !== null ? slides[pendingIndex] : null;
  const visibleSlides = nextSlide
    ? [
        { slide: currentSlide, state: 'outgoing' as const },
        { slide: nextSlide, state: 'incoming' as const },
      ]
    : [{ slide: currentSlide, state: 'active' as const }];

  const goToPrevious = () => {
    startTransitionTo(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    startTransitionTo((currentIndex + 1) % slides.length);
  };

  const renderSlide = (slide: Slide) => {
    if (slide.type === 'release') {
      return (
        <Box
          component={Link}
          href={`/releases#release-${slide.release.diva}`}
          aria-label={`Abrir lançamento ${slide.release.artist} - ${slide.release.name}`}
          sx={{
            display: 'block',
            position: 'relative',
            color: 'inherit',
            textDecoration: 'none',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            component="img"
            src={slide.release.banner || slide.release.cover}
            alt={`${slide.release.artist} - ${slide.release.name}`}
            sx={{
              width: '100%',
              height: '100%',
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
              padding: 0,
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
                mx: 'auto',
                px: { xs: 2, sm: 3, md: 0 },
                pb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#7cfec3',
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2.4rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {slide.release.artist}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', sm: '1.7rem', md: '3.2rem' },
                  lineHeight: 1.15,
                  textTransform: 'uppercase',
                }}
              >
                {slide.release.name}
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
                {`${slide.release.year} • DIVA ${slide.release.diva}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    }

    return (
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
          height: '100%',
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
            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3.2rem' },
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          VER TODOS OS LANÇAMENTOS
        </Typography>
      </Box>
    );
  };

  return (
    <Box
      component="section"
      aria-label="Novos lançamentos"
      sx={{
        width: '100%',
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
          mx: 'auto',
          px: { xs: 0, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.4rem', sm: '3rem', md: '4.5rem' },
            fontWeight: 'bold',
            lineHeight: 1,
            textAlign: 'left',
            marginBottom: 4,
          }}
        >
          NOVOS LANÇAMENTOS
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          height: SLIDE_HEIGHT,
          borderRadius: currentSlide.type === 'release' ? '20px' : 0,
          overflow: 'hidden',
          boxShadow: currentSlide.type === 'release' ? '0 18px 50px rgba(0, 0, 0, 0.35)' : 'none',
          '@keyframes slideFadeIn': {
            from: { opacity: 0, transform: 'scale(1.02)' },
            to: { opacity: 1, transform: 'scale(1)' },
          },
          '@keyframes slideFadeOut': {
            from: { opacity: 1, transform: 'scale(1)' },
            to: { opacity: 0, transform: 'scale(0.985)' },
          },
        }}
      >
        {visibleSlides.map(({ slide, state }) => {
          const isIncoming = state === 'incoming';
          const isOutgoing = state === 'outgoing';

          return (
            <Box
              key={slide.type === 'release' ? `release-${slide.release.diva}` : 'all-releases'}
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: isIncoming ? 2 : 1,
                opacity: isOutgoing ? 0 : 1,
                transform: isOutgoing ? 'scale(0.985)' : 'scale(1)',
                width: '100%',
                height: '100%',
                animation: isOutgoing
                  ? `slideFadeOut ${TRANSITION_MS}ms ease both`
                  : isIncoming
                    ? `slideFadeIn ${TRANSITION_MS}ms ease both`
                    : 'none',
                willChange: 'opacity, transform',
                pointerEvents: isOutgoing ? 'none' : 'auto',
              }}
            >
              {renderSlide(slide)}
            </Box>
          );
        })}

        <IconButton
          aria-label="Lançamento anterior"
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            left: { xs: 10, md: 14 },
            top: '50%',
            zIndex: 6,
            transform: 'translateY(-50%)',
            color: '#7cfec3',
            bgcolor: 'transparent',
            boxShadow: 'none',
            '& svg': { fontSize: '2.35rem' },
            '&:hover': { bgcolor: 'transparent' },
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
            zIndex: 6,
            transform: 'translateY(-50%)',
            color: '#7cfec3',
            bgcolor: 'transparent',
            boxShadow: 'none',
            '& svg': { fontSize: '2.35rem' },
            '&:hover': { bgcolor: 'transparent' },
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            right: { xs: 12, md: 16 },
            bottom: { xs: 12, md: 16 },
            zIndex: 6,
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

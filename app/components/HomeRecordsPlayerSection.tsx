'use client';

import { useMemo, useState, type TouchEvent } from 'react';
import {
  Box,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import releases from '../data/releases';

const SWIPE_THRESHOLD_PX = 40;

type Release = (typeof releases)[number];

function buildAutoplaySrc(src: string): string {
  const cleanSrc = src.trim();
  const separator = cleanSrc.includes('?')
    ? cleanSrc.endsWith('?') || cleanSrc.endsWith('&')
      ? ''
      : '&'
    : '?';

  // Timestamp forces a reload when users hit PLAY repeatedly on the same album.
  return `${cleanSrc}${separator}autoplay=1&t=${Date.now()}`;
}

export default function HomeRecordsPlayerSection() {
  const playableReleases = useMemo<Release[]>(
    () =>
      releases.filter(
        (release) =>
          release.type === 'album' &&
          Boolean(release.bandcampSrc) &&
          Boolean(release.bandcampLink)
      ),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerSrc, setPlayerSrc] = useState('');
  const [fallbackReadyForDiva, setFallbackReadyForDiva] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

  if (playableReleases.length === 0) {
    return null;
  }

  const currentRelease = playableReleases[currentIndex];

  const showPrevious = () => {
    setFallbackReadyForDiva(null);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? playableReleases.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setFallbackReadyForDiva(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playableReleases.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const pointX = event.touches[0]?.clientX;
    if (typeof pointX !== 'number') {
      return;
    }

    setTouchStartX(pointX);
    setTouchCurrentX(pointX);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const pointX = event.touches[0]?.clientX;
    if (typeof pointX !== 'number') {
      return;
    }

    setTouchCurrentX(pointX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchCurrentX === null) {
      setTouchStartX(null);
      setTouchCurrentX(null);
      return;
    }

    const deltaX = touchCurrentX - touchStartX;

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX) {
      if (deltaX > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  const handlePlay = () => {
    if (fallbackReadyForDiva === currentRelease.diva) {
      window.open(currentRelease.bandcampLink, '_blank', 'noopener,noreferrer');
      return;
    }

    setPlayerSrc(buildAutoplaySrc(currentRelease.bandcampSrc));
    setFallbackReadyForDiva(currentRelease.diva);
  };

  return (
    <Box
      component="section"
      aria-label="RÁDIO SALIVA DIVA"
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
          fontSize: { xs: '1.4rem', sm: '3.2rem', md: '4.5rem' },
          fontWeight: 'bold',
          lineHeight: 1,
          textAlign: 'left',
          mb: 4,
        }}
      >
        RÁDIO SALIVA DIVA
      </Typography>

      <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          position: 'relative',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
          mb: 3,
          touchAction: 'pan-y',
          userSelect: 'none',
        }}
      >
        <IconButton
          aria-label="Disco anterior"
          onClick={showPrevious}
          sx={{
            position: 'absolute',
            left: { xs: -6, sm: 6, md: 12 },
            top: '50%',
            zIndex: 2,
            transform: 'translateY(-50%)',
            color: '#7cfec3',
            '& svg': { fontSize: { xs: '2.1rem', md: '2.5rem' } },
          }}
        >
          <KeyboardArrowLeftRoundedIcon />
        </IconButton>

        <Box
          sx={{
            width: { xs: '260px', sm: '360px', md: '430px' },
            height: { xs: '260px', sm: '360px', md: '430px' },
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at center, transparent 0 12%, rgba(0, 0, 0, 0.15) 12% 13%, transparent 13% 100%)',
              pointerEvents: 'none',
              zIndex: 1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: { xs: '34px', sm: '44px', md: '52px' },
              height: { xs: '34px', sm: '44px', md: '52px' },
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#0b0b0b',
              border: '2px solid rgba(255, 255, 255, 0.38)',
              zIndex: 3,
            },
            animation: 'recordSpin 10s linear infinite',
            '@keyframes recordSpin': {
              from: {
                transform: 'rotate(0deg)',
              },
              to: {
                transform: 'rotate(360deg)',
              },
            },
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
            },
          }}
        >
          <Box
            component="img"
            src={currentRelease.cover}
            alt={`${currentRelease.artist} - ${currentRelease.name}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>

        <IconButton
          aria-label="Próximo disco"
          onClick={showNext}
          sx={{
            position: 'absolute',
            right: { xs: -6, sm: 6, md: 12 },
            top: '50%',
            zIndex: 2,
            transform: 'translateY(-50%)',
            color: '#7cfec3',
            '& svg': { fontSize: { xs: '2.1rem', md: '2.5rem' } },
          }}
        >
          <KeyboardArrowRightRoundedIcon />
        </IconButton>
      </Box>

      <Typography
        variant="h3"
        sx={{
          textTransform: 'uppercase',
          fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.8rem' },
          lineHeight: 1.15,
          textAlign: 'center',
          mb: 0.8,
        }}
      >
        {currentRelease.artist}
      </Typography>
      <Typography
        sx={{
          color: '#7cfec3',
          textTransform: 'uppercase',
          fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
          textAlign: 'center',
          mb: 2,
        }}
      >
        {currentRelease.name}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button
          onClick={handlePlay}
          variant="outlined"
          startIcon={<PlayArrowRoundedIcon />}
          sx={{
            color: '#7cfec3',
            borderColor: '#7cfec3',
            px: { xs: 2.5, md: 3.5 },
            py: 1,
            borderRadius: '999px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            '&:hover': {
              borderColor: '#7cfec3',
              backgroundColor: 'rgba(124, 254, 195, 0.08)',
            },
          }}
        >
          PLAY
        </Button>
      </Box>

      {fallbackReadyForDiva === currentRelease.diva ? (
        <Typography
          sx={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '0.78rem', sm: '0.9rem' },
            mb: 2,
          }}
        >
          Sem som? Clica PLAY novamente para abrir no Bandcamp.
        </Typography>
      ) : null}

      {playerSrc ? (
        <Box
          component="iframe"
          key={playerSrc}
          title={`Hidden Bandcamp player ${currentRelease.artist} ${currentRelease.name}`}
          src={playerSrc}
          allow="autoplay; encrypted-media"
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            opacity: 0,
            pointerEvents: 'none',
            border: 0,
          }}
        />
      ) : null}
    </Box>
  );
}
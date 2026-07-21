'use client';

import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may still be blocked in some mobile browsers.
      });
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100svh',
        minHeight: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#7249b0',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x5-playsinline="true"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          backgroundColor: '#000',
        }}
      >
        <source src="/Fundo_Website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
'use client';

import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsClient(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isClient && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may still be blocked in some mobile browsers.
      });
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          overflow: 'hidden',
          backgroundColor: '#000',
          pointerEvents: 'none',
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
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
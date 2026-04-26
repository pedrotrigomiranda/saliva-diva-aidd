'use client';

import { Box } from '@mui/material';

export default function VideoBackground() {
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
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <source src="/Fundo_Website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
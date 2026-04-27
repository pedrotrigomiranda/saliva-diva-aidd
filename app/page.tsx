'use client';

import Image from 'next/image';
import { Container, Typography, Box, Button } from '@mui/material';
import homepageLogo from '@/public/assets/homepage_logo.png';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          py: 8,
          pt: 12,
        }}
      >
        <Image
          src={homepageLogo}
          alt="Saliva Diva Homepage Logo"
          priority
          style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
        />
        <Typography variant="h2" sx={{ mt: 4, textAlign: 'center', color: '#7cfec3' }}>
          Saliva Diva
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: 600,
            mt: 2,
            color: '#7cfec3',
          }}
        >
          Explore our collection of artists, releases, and live events.
        </Typography>
      </Box>
    </Container>
  );
}

'use client';

import Image from 'next/image';
import { Container, Box } from '@mui/material';
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
      </Box>
    </Container>
  );
}

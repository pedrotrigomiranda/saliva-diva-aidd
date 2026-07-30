'use client';

import Image from 'next/image';
import { Container, Box } from '@mui/material';
import homepageLogo from '@/public/assets/homepage_logo.png';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          py: 0,
          pt: 0,
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
      </Box>
    </Container>
  );
}

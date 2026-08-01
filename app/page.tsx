'use client';

import Image from 'next/image';
import { Container, Box } from '@mui/material';
import homepageLogo from '@/public/assets/homepage_logo.png';
import RecentReleasesSlideshow from './components/RecentReleasesSlideshow';

export default function Home() {
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
        </Box>

        <RecentReleasesSlideshow />
      </Box>
    </Container>
  );
}

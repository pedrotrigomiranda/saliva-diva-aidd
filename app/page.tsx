'use client';

import { Container, Typography, Box, Button } from '@mui/material';

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
        <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
          Welcome to Saliva Diva
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '600px' }}>
          This is the homepage for the Saliva Diva website.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

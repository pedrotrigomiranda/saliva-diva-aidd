'use client'

import { Container, Box, Typography, Button } from '@mui/material'

export default function ReleasesPage() {
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
        <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Releases
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.125rem', maxWidth: '600px', textAlign: 'center' }}>
          Explore our latest releases and catalog.
        </Typography>
        <Button variant="contained" size="large">
          Browse Releases
        </Button>
      </Box>
    </Container>
  )
}

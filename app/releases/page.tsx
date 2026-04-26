'use client'

import { Container, Box, Typography } from '@mui/material'
import releases from '../data/releases'
import ReleaseCard from '../components/ReleaseCard'

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
        <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
          LANÇAMENTOS
        </Typography>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 9,
            '@media (min-width: 900px)': {
              maxWidth: '1062px',
            },
            '@media (max-width: 900px)': {
              padding: '0px 50px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 4,
            }}
          >
            {releases.map((release, index) => (
              <ReleaseCard key={index} release={release} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

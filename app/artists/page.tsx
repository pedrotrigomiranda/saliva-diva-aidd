'use client'

import { Container, Box, Typography } from '@mui/material'
import artists from '../data/artists'
import ArtistCard from '../components/ArtistCard'

export default function ArtistsPage() {
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
          ARTISTAS
        </Typography>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              padding: '32px 16px',
              boxSizing: 'border-box',
              '@media (max-width: 900px)': {
                width: '100%',
                margin: '0 auto',
                padding: '0 16px',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                gap: 3,
              },
            }}
          >
            {artists.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

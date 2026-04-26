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
              justifyContent: 'space-evenly',
              alignItems: 'center',
              margin: 4,
              '@media (max-width: 900px)': {
                flexDirection: 'column',
                margin: 2,
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

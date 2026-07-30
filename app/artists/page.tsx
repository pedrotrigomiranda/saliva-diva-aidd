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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 'bold',
              lineHeight: 1,
              textAlign: { xs: 'center', md: 'left' },
              width: '100%',
              marginBottom: 4,
            }}
          >
            ARTISTAS
          </Typography>

          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 280px)',
                md: 'repeat(3, 240px)',
                lg: 'repeat(4, 240px)',
              },
              gap: 3,
              margin: '0 auto',
              padding: { xs: '0', md: '32px 0' },
              boxSizing: 'border-box',
              justifyItems: 'center',
              justifyContent: 'center',
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

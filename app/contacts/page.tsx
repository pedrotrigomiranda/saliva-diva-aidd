'use client'

import { Container, Box, Typography, Link } from '@mui/material'

export default function ContactsPage() {
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
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 'bold',
            lineHeight: 1,
            textAlign: { xs: 'center', md: 'left' },
            width: '100%',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
          }}
        >
          Contactos
        </Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: '#7cfec3', letterSpacing: 1.2, fontWeight: 700 }}>
              EMAIL
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              saliva.diva.label@gmail.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: '#7cfec3', letterSpacing: 1.2, fontWeight: 700 }}>
              NEWSLETTER
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              newsletter@salivadiva.pt
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: '#7cfec3', letterSpacing: 1.2, fontWeight: 700 }}>
              BANDCAMP
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              <Link href="https://salivadiva.bandcamp.com/" target="_blank" rel="noopener noreferrer" color="inherit">
                https://salivadiva.bandcamp.com/
              </Link>
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: '#7cfec3', letterSpacing: 1.2, fontWeight: 700 }}>
              YOUTUBE
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              <Link href="https://www.youtube.com/@salivadiva3154" target="_blank" rel="noopener noreferrer" color="inherit">
                www.youtube.com/@salivadiva3154
              </Link>
            </Typography>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: '#7cfec3', letterSpacing: 1.2, fontWeight: 700 }}>
              FACEBOOK
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              <Link href="https://www.facebook.com/saliva.diva/" target="_blank" rel="noopener noreferrer" color="inherit">
                www.facebook.com/saliva.diva/
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

'use client'

import { Container, Box, Typography, Button } from '@mui/material'

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
        <Typography variant="body1" sx={{ fontSize: '1.125rem', maxWidth: '600px', textAlign: 'center' }}>
          Get in touch with us.
        </Typography>
        <Button variant="contained" size="large">
          Contact Us
        </Button>
      </Box>
    </Container>
  )
}

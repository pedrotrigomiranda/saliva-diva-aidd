import { Container, Box, Typography, Divider } from '@mui/material'
import calendar from '@/app/data/calendar'
import artists from '@/app/data/artists'

const FALLBACK_IMAGE = '/assets/logo_transparent_secondary.png'

const artistImageByName = new Map(artists.map((artist) => [artist.name.toLowerCase(), artist.image]))

function resolveArtistImage(artistName: string): string {
  const artistKey = artistName.toLowerCase().trim()
  const exactMatch = artistImageByName.get(artistKey)

  if (exactMatch) {
    return exactMatch
  }

  const candidates = artistName.split('+').map((name) => name.trim().toLowerCase())

  for (const candidate of candidates) {
    const candidateMatch = artistImageByName.get(candidate)
    if (candidateMatch) {
      return candidateMatch
    }
  }

  for (const artist of artists) {
    const artistLower = artist.name.toLowerCase()
    if (artistKey.includes(artistLower) || artistLower.includes(artistKey)) {
      return artist.image
    }
  }

  return FALLBACK_IMAGE
}

export default function CalendarPage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 4,
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
          CALENDIVÁRIO
        </Typography>

        {calendar.map((section) => (
          <Box
            key={section.title}
            sx={{
              width: '100%',
              maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
              mx: 'auto',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, mt: 4 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: '1.6rem', fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {section.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontSize: '1.4rem' }}>
                {section.events.length} eventos
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: 'grid', gap: 1.5 }}>
              {section.events.map((event, index) => (
                <Box
                  key={`${event.date}-${event.artist}-${index}`}
                  sx={{
                    py: 1,
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    component="img"
                    src={resolveArtistImage(event.artist)}
                    alt={event.artist}
                    sx={{
                      width: { xs: 108, sm: 140 },
                      minWidth: { xs: 108, sm: 140 },
                      height: { xs: 108, sm: 140 },
                      objectFit: 'contain',
                      objectPosition: 'center',
                      backgroundColor: 'transparent',
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography variant="subtitle2" sx={{ color: '#fff', mb: 0.5, fontSize: '1.1rem' }}>
                      💦 {event.date}
                    </Typography>
                    <Typography variant="h3" component="h3" sx={{ fontSize: '1.5625rem', fontWeight: '700', mb: 0.5 }}>
                      {event.artist}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                      {event.venue}, {event.location}
                    </Typography>
                    {event.note ? (
                      <Typography variant="body2" sx={{ mt: 0.5, color: 'secondary.main', fontWeight: 600, fontSize: '1.1rem' }}>
                        {event.note}
                      </Typography>
                    ) : null}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

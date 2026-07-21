import { Container, Box, Typography, Divider } from '@mui/material'
import calendar from '@/app/data/calendar'

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
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
            fontWeight: 'bold',
          }}
        >
          Calendivário
        </Typography>

        {calendar.map((section) => (
          <Box key={section.title} sx={{ width: '100%', maxWidth: 900 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, mt: 4 }}>
              <Typography variant="h2" component="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
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
                  }}
                >
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
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

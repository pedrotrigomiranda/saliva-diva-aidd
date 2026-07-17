'use client'

import { Container, Box, Typography } from '@mui/material'
import releases from '../data/releases'
import ReleaseCard from '../components/ReleaseCard'

type Release = (typeof releases)[number]

const releasesByYear = releases.reduce<Record<number, Release[]>>((groups, release) => {
  const year = release.year
  if (!groups[year]) {
    groups[year] = []
  }
  groups[year].push(release)
  return groups
}, {})

const sortedYears = Object.keys(releasesByYear)
  .map(Number)
  .sort((a, b) => b - a)

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
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.4rem', md: '3rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 4,
          }}
        >
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
          {sortedYears.map((year) => (
            <Box key={year} sx={{ marginBottom: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: 3,
                }}
              >
                {year}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                {releasesByYear[year].map((release, index) => (
                  <ReleaseCard key={`${year}-${index}`} release={release} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

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
            fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 'bold',
            lineHeight: 1,
            textAlign: { xs: 'center', md: 'left' },
            width: '100%',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
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
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
          }}
        >
          {sortedYears.map((year) => (
            <Box key={year} sx={{ marginBottom: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '5rem' },
                  fontWeight: 'bold',
                  textAlign: { xs: 'center', md: 'left' },
                  marginBottom: 1,
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
                  <Box
                    key={`${year}-${index}`}
                    id={`release-${release.diva}`}
                    sx={{ width: '100%', scrollMarginTop: { xs: '88px', md: '112px' } }}
                  >
                    <ReleaseCard release={release} />
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import calendar from '../data/calendar';
import artists from '../data/artists';

type CalendarEvent = (typeof calendar)[number]['events'][number];

type HomeEvent = CalendarEvent & {
  image: string;
  timestamp: number;
  originalIndex: number;
};

const FALLBACK_IMAGE = '/assets/artist_astra_vaga.jpeg';

const MONTH_BY_SHORT: Record<string, number> = {
  jan: 0,
  fev: 1,
  mar: 2,
  abr: 3,
  mai: 4,
  jun: 5,
  jul: 6,
  ago: 7,
  set: 8,
  out: 9,
  nov: 10,
  dez: 11,
};

const artistImageByName = new Map(artists.map((artist) => [artist.name.toLowerCase(), artist.image]));

function resolveArtistImage(artistName: string): string {
  const artistKey = artistName.toLowerCase().trim();
  const exactMatch = artistImageByName.get(artistKey);

  if (exactMatch) {
    return exactMatch;
  }

  const candidates = artistName.split('+').map((name) => name.trim().toLowerCase());

  for (const candidate of candidates) {
    const candidateMatch = artistImageByName.get(candidate);
    if (candidateMatch) {
      return candidateMatch;
    }
  }

  for (const artist of artists) {
    const artistLower = artist.name.toLowerCase();
    if (artistKey.includes(artistLower) || artistLower.includes(artistKey)) {
      return artist.image;
    }
  }

  return FALLBACK_IMAGE;
}

function getEventTimestamp(eventDate: string, nowYear: number): number {
  const dateMatch = eventDate.toLowerCase().match(/(\d{1,2})\/(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/);

  if (!dateMatch) {
    return Number.POSITIVE_INFINITY;
  }

  const day = Number(dateMatch[1]);
  const month = MONTH_BY_SHORT[dateMatch[2]];

  if (month === undefined) {
    return Number.POSITIVE_INFINITY;
  }

  return new Date(nowYear, month, day).getTime();
}

function getNextEvents(limit: number): HomeEvent[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  const allEvents: HomeEvent[] = calendar.flatMap((section, sectionIndex) =>
    section.events.map((event, eventIndex) => {
      let timestamp = getEventTimestamp(event.date, now.getFullYear());

      // Events are yearly and stored without a year, so shift past dates to next year.
      if (timestamp < today && Number.isFinite(timestamp)) {
        timestamp = getEventTimestamp(event.date, now.getFullYear() + 1);
      }

      return {
        ...event,
        image: resolveArtistImage(event.artist),
        timestamp,
        originalIndex: sectionIndex * 1000 + eventIndex,
      };
    })
  );

  return allEvents
    .sort((a, b) => {
      if (a.timestamp !== b.timestamp) {
        return a.timestamp - b.timestamp;
      }

      return a.originalIndex - b.originalIndex;
    })
    .slice(0, limit);
}

export default function HomeCalendarSection() {
  const events = getNextEvents(4);

  if (events.length === 0) {
    return null;
  }

  return (
    <Box
      component="section"
      aria-label="Calendivario"
      sx={{
        width: '100%',
        maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
        mx: 'auto',
        pb: { xs: 8, md: 12 },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
          fontWeight: 'bold',
          lineHeight: 1,
          textAlign: 'left',
          mb: 4,
        }}
      >
        CALENDIVÁRIO
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          gap: { xs: 2, md: 3 },
        }}
      >
        {events.map((event, index) => (
          <Box
            key={`${event.date}-${event.artist}-${index}`}
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'stretch',
              border: 'none',
              borderRadius: 0,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={event.image}
              alt={event.artist}
              sx={{
                width: { xs: '132px', sm: '180px', md: '220px' },
                minWidth: { xs: '132px', sm: '180px', md: '220px' },
                height: { xs: '132px', sm: '180px', md: '220px' },
                objectFit: 'contain',
                objectPosition: 'center',
                backgroundColor: '#7249b0',
              }}
            />

            <Box
              sx={{
                py: 1.5,
                pr: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#7cfec3',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.8rem', sm: '1.2rem' },
                  mb: 0.5,
                }}
              >
                {event.date}
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '1.2rem', sm: '1.35rem' },
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  mb: 0.5,
                }}
              >
                {event.artist}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1.1rem', sm: '1.35rem' },
                  mb: 0.2,
                }}
              >
                {event.venue}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#ffffff',
                  opacity: 0.85,
                  fontSize: { xs: '0.9rem', sm: '1.1em' },
                }}
              >
                {event.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: { xs: 3, md: 4 }, textAlign: 'left' }}>
        <Typography
          component={Link}
          href="/calendar"
          sx={{
            display: 'inline-flex',
            color: '#7cfec3',
            textDecoration: 'underline',
            textTransform: 'uppercase',
            fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
            fontWeight: 800,
            letterSpacing: '0.03em',
            '&:hover': {
              opacity: 0.86,
            },
          }}
        >
          VER TODOS OS EVENTOS
        </Typography>
      </Box>
    </Box>
  );
}
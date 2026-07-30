'use client';

import { Box, Typography } from '@mui/material';

interface Artist {
  name: string;
  image: string;
  bandcampUrl: string;
  instagram?: string;
  facebook?: string;
  email?: string;
  youtube?: string;
  spotify?: string;
}

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const { name, image, bandcampUrl } = artist;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '340px', sm: '280px', md: '240px', lg: '240px' },
        aspectRatio: '1 / 1',
        position: 'relative',
        backgroundColor: '#7249b0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'all 0.5s ease-in',
        '&:hover .artist-image': {
          opacity: 0.7,
        },
        '&:hover .artist-info': {
          opacity: 1,
        },
        '@media (max-width: 900px)': {
          width: '100%',
          maxWidth: '340px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .artist-image': {
            opacity: 0.7,
          },
          '& .artist-info': {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        className="artist-image"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transition: 'all 0.5s ease-in',
          '@media (max-width: 900px)': {
            width: '100%',
            height: '100%',
          },
          '&:hover': {
            transition: 'all 0.5s ease-out',
          },
        }}
      />
      <Box
        className="artist-info"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0,
          transition: 'opacity 0.5s ease',
          textAlign: 'center',
        }}
      >
        <Box
          component="a"
          href={bandcampUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              margin: 2,
              color: '#7cfec2',
              fontSize: '1.6rem',
              textTransform: 'uppercase',
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.8,
              },
              '@media (max-width: 900px)': {
                fontSize: '1.7rem',
              },
            }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
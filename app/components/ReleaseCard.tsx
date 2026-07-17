'use client';

import {
  Box,
  Typography,
  Link as MuiLink,
  IconButton,
  SvgIcon,
  SvgIconProps,
  SxProps,
  Theme,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState, useEffect } from 'react';

type IconProps = SvgIconProps & { sx?: SxProps<Theme> };

interface Release {
  diva: number;
  type: string;
  name: string;
  artist: string;
  year: number;
  cover: string;
  banner: string;
  instagram: string;
  facebook: string;
  email: string;
  youtube: string;
  spotify: string;
  bandcampLink: string;
  bandcampSrc: string;
  review: string;
}

interface ReleaseCardProps {
  release: Release;
}

function SpotifyIcon(props: IconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
    </SvgIcon>
  );
}

function BandcampIcon(props: IconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M22,6L15.5,18H2L8.5,6H22Z" />
    </SvgIcon>
  );
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Wrap in microtask to avoid synchronous setState in effect
    Promise.resolve().then(() => setIsClient(true));
  }, []);

  const {
    name,
    artist,
    cover,
    banner,
    instagram,
    facebook,
    spotify,
    youtube,
    bandcampLink,
    bandcampSrc,
    review,
  } = release;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 8,
        '& > *': {
          padding: 0,
        },
      }}
    >
      {/* Banner Image */}
      <Box
        component="img"
        src={banner}
        alt={`${artist} - ${name}`}
        sx={{
          width: '100vw',
          padding: 0,
          objectFit: 'contain',
          '@media (max-width: 1200px)': {
            width: '100vw',
          },
        }}
        onError={(e) => {
          // Hide banner if image fails to load
          e.currentTarget.style.display = 'none';
        }}
      />

      {/* Title Section */}
      <Box
        sx={{
          width: '100%',
           display: 'flex',
           flexDirection: 'column',
           textTransform: 'uppercase',
           padding: 0,
           marginTop: 2,
           marginBottom: 2,
           '@media (max-width: 900px)': {
             marginTop: 1,
             marginBottom: 1,
           },
        }}
      >
         <Typography
           variant="h1"
           sx={{
             color: '#7cfec2',
             margin: 0,
             fontSize: { xs: '1.25rem', sm: '1.6rem', md: '4.2rem' },
           }}
         >
          {artist}
        </Typography>
         <Typography
           variant="h3"
           sx={{
             color: '#7cfec2',
             margin: 0,
             fontSize: { xs: '0.85rem', sm: '1rem', md: '1.8rem' },
           }}
         >
          {name}
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          margin: { xs: 1, md: 2 },
          '@media (max-width: 900px)': {
            flexDirection: 'column',
          },
          '@media (max-width: 350px)': {
            maxWidth: '280px',
          },
          padding: 0,
        }}
      >
        {/* Media Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
          }}
        >
          <Box
            component="img"
            src={cover}
            alt={`${artist} - ${name} cover`}
            sx={{
              width: '100%',
              display: 'block',
            }}
          />

          {/* Bandcamp Embed */}
          {isClient ? (
            <Box
              component="iframe"
              title={name}
              src={bandcampSrc}
              sx={{
                width: '100%',
                maxHeight: '42px',
                border: '0',
                margin: '16px 0 16px 0',
                display: 'block',
              }}
              seamless
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '42px',
                margin: 2,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MuiLink href={bandcampLink} target="_blank" rel="noopener noreferrer">
                {name} by {artist}
              </MuiLink>
            </Box>
          )}
        </Box>

        {/* Review and Links Section */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            padding: 0,
            '@media (max-width: 900px)': {
              margin: '16px 0px',
            },
            '@media (min-width: 900px)': {
              paddingLeft: 3,
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.2rem' },
            }}
          >
            {review}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#7cfec2',
              marginBottom: 1,
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
            }}
          >
            <MuiLink
              href={bandcampLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              BUY DIGITAL ALBUM
            </MuiLink>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#7cfec2',
              marginBottom: 2,
              fontSize: { xs: '0.65rem', md: '0.8rem' },
            }}
          >
            <MuiLink
              href={bandcampLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              BUY COMPACT DISC
            </MuiLink>
          </Typography>

          {/* Social Media Links: always show icons; placeholder when missing */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              gap: 1,
            }}
          >
            {/* Instagram */}
            {instagram ? (
              <MuiLink href={instagram} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ paddingLeft: 0, color: '#7cfec2' }} aria-label="instagram">
                  <InstagramIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
              </MuiLink>
            ) : (
              <IconButton
                sx={{
                  paddingLeft: 0,
                  color: '#7cfec2',
                  cursor: 'default',
                }}
                disableRipple
                tabIndex={-1}
                aria-label="instagram-placeholder"
              >
                <InstagramIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            )}

            {/* Facebook */}
            {facebook ? (
              <MuiLink href={facebook} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#7cfec2' }} aria-label="facebook">
                  <FacebookIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
              </MuiLink>
            ) : (
              <IconButton
                sx={{
                  color: '#7cfec2',
                  cursor: 'default',
                }}
                disableRipple
                tabIndex={-1}
                aria-label="facebook-placeholder"
              >
                <FacebookIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            )}

            {/* Spotify */}
            {spotify ? (
              <MuiLink href={spotify} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#7cfec2' }} aria-label="spotify">
                  <SpotifyIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
              </MuiLink>
            ) : (
              <IconButton
                sx={{
                  color: '#7cfec2',
                  cursor: 'default',
                }}
                disableRipple
                tabIndex={-1}
                aria-label="spotify-placeholder"
              >
                <SpotifyIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            )}

            {/* Bandcamp */}
            {bandcampLink ? (
              <MuiLink href={bandcampLink} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#7cfec2' }} aria-label="bandcamp">
                  <BandcampIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
              </MuiLink>
            ) : (
              <IconButton
                sx={{
                  color: '#7cfec2',
                  cursor: 'default',
                }}
                disableRipple
                tabIndex={-1}
                aria-label="bandcamp-placeholder"
              >
                <BandcampIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            )}

            {/* YouTube */}
            {youtube ? (
              <MuiLink href={youtube} target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#7cfec2' }} aria-label="youtube">
                  <YouTubeIcon sx={{ fontSize: '2rem' }} />
                </IconButton>
              </MuiLink>
            ) : (
              <IconButton
                sx={{
                  color: '#7cfec2',
                  cursor: 'default',
                }}
                disableRipple
                tabIndex={-1}
                aria-label="youtube-placeholder"
              >
                <YouTubeIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
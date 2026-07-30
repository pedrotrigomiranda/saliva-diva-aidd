'use client'

import { Container, Box, Typography } from '@mui/material'

const manifestoParts = [
  'As editoras independentes surgem quase sempre pelo mesmo motivo: dar espaço comum a artistas que caminham isoladamente. A Saliva Diva privilegia mais o espírito comunitário e menos as conquistas individuais. Acreditamos na função utilitária da produção criativa como forma de catarse e união, como estímulo sensorial e intelectual, como embalo e despertador. Também acreditamos nela como entretenimento de qualidade. Tal como vocês, queremos rir, chorar, pensar, bezerrar e dançar. Pretendemos ser um elo que facilite a união entre criador e ouvinte. Não trabalhamos apenas para quem já toma a iniciativa de explorar o que acontece por detrás do óbvio. Queremos que os nossos discos descubram novas casas, que cheguem a um público mais universal sem sacrificar a liberdade criativa das obras que editamos.',
  'Queremos um espaço onde nos podemos encontrar, sem termos de ser nicho ou produzir escassez. Toda a gente é bem-vinda! No fundo, queremos partilhar convosco música que consideramos especial, com capas bonitas e um cuidado que só o trabalho em equipa consegue garantir. Também queremos reforçar e abrir esse espírito comunitário em eventos como debates, sessões de audição, concertos, e claro, festas. Não acreditamos em concorrência na arte - aprendemos muito com antecessores que agora são colegas na edição independente, e estamos abertos a sinergias que relevem a música que é feita nos quartos e estúdios do nosso país. É assim a vossa Saliva Diva - muito mais do que discos numa estante!',
]

const manifestoText = `${manifestoParts[0]} ${manifestoParts[1]}`

export default function ManifestoPage() {
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
          width: '100%',
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
          MANIFESTO
        </Typography>

        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            width: '100%',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.125rem', textAlign: 'justify' }}>
            {manifestoText}
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: { md: 5, lg: 8 },
            width: '100%',
            maxWidth: { xs: '340px', sm: '584px', md: '768px', lg: '1032px' },
            mx: 'auto',
          }}
        >
          {manifestoParts.map((part) => (
            <Typography key={part.slice(0, 32)} variant="body1" sx={{ fontSize: '1.125rem', textAlign: 'justify' }}>
              {part}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export type CalendarEvent = {
  date: string
  artist: string
  venue: string
  location: string
  note?: string
}

export type CalendarMonth = {
  title: string
  events: CalendarEvent[]
}

const calendar: CalendarMonth[] = [
  {
    title: 'Outubro',
    events: [
      {
        date: 'quinta, 1/out',
        artist: 'Daniel Catarino',
        venue: 'Pátio da Casa',
        location: 'Portalegre',
      },
      {
        date: 'sexta, 2/out',
        artist: 'Daniel Catarino',
        venue: 'Sociedade Harmonia Eborense',
        location: 'Évora',
      },
      {
        date: 'sábado, 3/out',
        artist: 'Daniel Catarino',
        venue: 'Festival Vai Descalço',
        location: 'Vila Nova de Baronia',
      },
      {
        date: 'domingo, 4/out',
        artist: 'Baleia Baleia Baleia',
        venue: 'Festa Irreversível, CRU',
        location: 'Famalicão',
      },
      {
        date: 'segunda, 5/out',
        artist: 'Galeria Incerteza + Correr Andar',
        venue: 'Não se passa nada às segundas, RCA',
        location: 'Porto',
      },
      {
        date: 'sexta, 9/out',
        artist: 'Correr Andar',
        venue: 'Festa d’Anaia',
        location: 'Cantanhede',
      },
      {
        date: 'sexta, 9/out',
        artist: 'Mordo Mia',
        venue: 'Curt’Arruda',
        location: 'Arruda dos Vinhos',
      },
      {
        date: 'sábado, 10/out',
        artist: 'Baleia Baleia Baleia',
        venue: 'A Quinta, Couto de Cima',
        location: 'Viseu',
      },
      {
        date: 'sábado, 10/out',
        artist: 'Mordo Mia',
        venue: 'MIL',
        location: 'Lisboa',
      },
      {
        date: 'domingo, 11/out',
        artist: 'Hate Moss + Luís Contrário',
        venue: 'Mesmo ao lado da estação, GRCA',
        location: 'Seixas',
      },
      {
        date: 'segunda, 12/out',
        artist: 'Marquise',
        venue: 'Primeira Box, Coliseu',
        location: 'Porto',
      },
      {
        date: 'quinta, 15/out',
        artist: 'Mariana Camacho',
        venue: 'Cine-Teatro S. João',
        location: 'Palmela',
      },
      {
        date: 'sexta, 16/out',
        artist: 'Baleia Baleia Baleia',
        venue: 'Casa da Caturra, Ponto C',
        location: 'Penafiel',
      },
      {
        date: 'sexta, 23/out',
        artist: 'Mariana Camacho',
        venue: 'àCapela, MACAM',
        location: 'Lisboa',
      },
      {
        date: 'sábado, 24/out',
        artist: 'Baleia Baleia Baleia + Lesma',
        venue: 'Mavy',
        location: 'Braga',
      },
      {
        date: 'sábado, 24/out',
        artist: 'Correr Andar',
        venue: 'Xapas Sessions',
        location: 'Paredes de Coura',
      },
      {
        date: 'sexta, 30/out',
        artist: 'Mordo Mia',
        venue: '100m Barreirinha, Barreirinha Bar Café',
        location: 'Funchal',
      },
    ],
  },
]

export default calendar

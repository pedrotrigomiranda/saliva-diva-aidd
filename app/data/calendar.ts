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
    title: 'Julho',
    events: [
      {
        date: 'sexta, 17/jul',
        artist: 'Cortada',
        venue: '100m Barreirinha, Barreirinha Bar Café',
        location: 'Funchal',
      },
      {
        date: 'sábado, 18/jul',
        artist: 'Mordo Mia',
        venue: 'Noite do Corisco, Musa de Marvila',
        location: 'Lisboa',
      },
      {
        date: 'sexta, 24/jul',
        artist: 'Correr Andar',
        venue: 'Livrindie, Arcos de Valdevez',
        location: 'Arcos de Valdevez',
      },
      {
        date: 'sexta, 24/jul',
        artist: 'Marquise',
        venue: 'Mêda +',
        location: 'Mêda',
      },
      {
        date: 'sábado, 25/jul',
        artist: 'Baleia Baleia Baleia',
        venue: 'Dinaamo',
        location: 'Barroselas',
      },
      {
        date: 'sábado, 25/jul',
        artist: 'Correr Andar',
        venue: 'Rock no Rio Febras',
        location: 'Guimarães',
      },
      {
        date: 'sábado, 25/jul',
        artist: 'MONCHMONCH',
        venue: 'Mêda +',
        location: 'Mêda',
      },
      {
        date: 'segunda, 27/jul',
        artist: 'Ni-hao!!!!',
        venue: 'Não se passa nada às segundas, AL859',
        location: 'Porto',
      },
      {
        date: 'sexta, 31/jul',
        artist: 'Baleia Baleia Baleia',
        venue: 'Rock ao Luar, Constantina',
        location: 'Ansião',
      },
    ],
  },
  {
    title: 'Agosto',
    events: [
      {
        date: 'sábado, 1/ago',
        artist: 'Cortada',
        venue: 'Musa de Marvila',
        location: 'Lisboa',
      },
      {
        date: 'sábado, 8/ago',
        artist: 'Marquise + Mordo Mia',
        venue: 'Bons Sons',
        location: 'Cem Soldos',
      },
      {
        date: 'domingo, 9/ago',
        artist: 'Cortada',
        venue: 'Bons Sons',
        location: 'Cem Soldos',
      },
      {
        date: 'quinta, 13/ago',
        artist: 'Marquise',
        venue: 'Kulverão',
        location: 'Cinfães',
      },
      {
        date: 'domingo, 16/ago',
        artist: 'Ξvдyд',
        venue: 'Spot da Juventude',
        location: 'Barreiro',
      },
      {
        date: 'domingo, 28/ago',
        artist: 'Ξvдyд',
        venue: 'Absurda Art Fest',
        location: 'Arcos de Valdevez',
      },
    ],
  },
]

export default calendar

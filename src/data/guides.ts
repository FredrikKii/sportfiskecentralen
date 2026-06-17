export interface GuideTableRow {
  label: string
  value: string
}

export interface GuideSection {
  heading: string
  body?: string
  items?: string[]
  table?: GuideTableRow[]
}

export interface Guide {
  id: string
  title: string
  description: string
  readTime: string
  category: string
  sections: GuideSection[]
}

export const guides: Guide[] = [
  {
    id: 'fiske-ringsjoarna',
    title: 'Fiske i Ringsjöarna – Skånes bästa allroundsjö?',
    description:
      'Ringsjöarna är några av Skånes mest populära insjöar för sportfiske. Här finns starka bestånd av gädda, abborre och gös, vilket gör sjön attraktiv året runt. Sjön är dessutom en av Skånes största.',
    readTime: '6 min',
    category: 'Fiskevatten',
    sections: [
      {
        heading: 'Målarter',
        items: ['Gädda', 'Abborre', 'Gös'],
      },
      {
        heading: 'Tips',
        items: [
          'Fiska gös under varma sommarkvällar.',
          'Leta abborre kring vass och branter.',
          'Prova stora beten efter höstgädda.',
        ],
      },
    ],
  },
  {
    id: 'vaxsjon-familj',
    title: 'Vaxsjön – familjevänligt fiske mitt i Skåne',
    description:
      'Vaxsjön ligger mellan Frostavallen och Skånes Djurpark och erbjuder lättillgängligt fiske med bryggor, grillplatser och stigar runt sjön. Här finns bland annat abborre, gädda och gös.',
    readTime: '5 min',
    category: 'Fiskevatten',
    sections: [
      {
        heading: 'Målarter',
        items: ['Abborre', 'Gädda', 'Gös'],
      },
      {
        heading: 'Tips',
        items: [
          'Perfekt för landfiske.',
          'Testa jigg efter abborre under sommaren.',
          'Tidiga morgnar är ofta bäst för gädda.',
        ],
      },
    ],
  },
  {
    id: 'dagstorpssjon',
    title: 'Dagstorpssjön – dold pärla för abborre och gädda',
    description:
      'Dagstorpssjön ligger nära Norra Rörum och är ett uppskattat fiskevatten för både gädda och abborre. Fiskekort krävs.',
    readTime: '5 min',
    category: 'Fiskevatten',
    sections: [
      {
        heading: 'Målarter',
        items: ['Gädda', 'Abborre', 'Braxen'],
      },
      {
        heading: 'Tips',
        items: [
          'Fiska av vasskanter noggrant.',
          'Små jiggar fungerar bra på abborre.',
          'Hösten kan ge riktigt fin gädda.',
        ],
      },
    ],
  },
  {
    id: 'tjorarpssjon',
    title: 'Tjörnarpssjön – sjön med många arter',
    description:
      'Tjörnarpssjön erbjuder ett varierat fiske med gädda, gös, abborre och flera vitfiskarter.',
    readTime: '5 min',
    category: 'Fiskevatten',
    sections: [
      {
        heading: 'Målarter',
        items: ['Gädda', 'Gös', 'Abborre'],
      },
      {
        heading: 'Tips',
        items: [
          'Vertikalfiske efter gös kan vara effektivt.',
          'Stora abborrar tas ofta nära djupkanter.',
        ],
      },
    ],
  },
  {
    id: 'jakt-40-abborre',
    title: 'Jakten på 40+ abborrar i Skåne',
    description:
      'Skåne har flera vatten med potential för stor abborre, särskilt Ringsjöarna, Vaxsjön och mindre gölar.',
    readTime: '6 min',
    category: 'Abborre',
    sections: [
      {
        heading: 'Taktik',
        items: [
          'Fiska gryning och skymning.',
          'Använd 5–10 cm jiggar.',
          'Leta efter djupbranter nära vegetation.',
        ],
      },
    ],
  },
  {
    id: 'gaddfiske-land',
    title: 'Gäddfiske från land – så lyckas du',
    description: 'Du behöver inte båt för att fånga stor gädda.',
    readTime: '6 min',
    category: 'Gädda',
    sections: [
      {
        heading: 'Bästa platser',
        items: ['Vassvikar', 'Uddar', 'In- och utlopp'],
      },
      {
        heading: 'Bästa period',
        items: ['Mars–maj', 'September–november'],
      },
    ],
  },
  {
    id: 'gosfiske-skane',
    title: 'Gösfiske i mellersta Skåne',
    description:
      'Gösen trivs i djupare och varmare vatten. Ringsjöarna och Tjörnarpssjön är populära gösvatten.',
    readTime: '5 min',
    category: 'Gös',
    sections: [
      {
        heading: 'Tips',
        items: [
          'Fiska sent på kvällen.',
          'Använd jigg eller wobbler nära botten.',
        ],
      },
    ],
  },
  {
    id: 'put-and-take-skane',
    title: 'Put and take i Skåne – perfekt för nybörjare',
    description:
      'Put and take-anläggningar erbjuder inplanterad regnbåge och ibland öring.',
    readTime: '4 min',
    category: 'Put & take',
    sections: [
      {
        heading: 'Fördelar',
        items: [
          'Hög fångstchans',
          'Passar barnfamiljer',
          'Kräver ofta enkelt fiskekort',
        ],
      },
    ],
  },
  {
    id: 'hostfiske-gadda',
    title: 'Höstfiske efter gädda – årets bästa tid',
    description:
      'Många sportfiskare anser att hösten är den bästa gäddsäsongen.',
    readTime: '6 min',
    category: 'Gädda',
    sections: [
      {
        heading: 'Varför?',
        items: [
          'Gäddan äter upp sig inför vintern.',
          'Fiskarna samlas kring betesfisk.',
        ],
      },
      {
        heading: 'Bästa beten',
        items: ['Stora gummibeten', 'Jerkbaits', 'Spinnare'],
      },
    ],
  },
  {
    id: 'fiskearet-skane',
    title: 'Fiskeåret i Skåne – månad för månad',
    description:
      'Skåne erbjuder fiske året runt – från havsöring längs kusten till gös i insjöarna och klassiskt gäddfiske under hösten.',
    readTime: '7 min',
    category: 'Översikt',
    sections: [
      {
        heading: 'Bästa fiske per månad',
        table: [
          { label: 'Jan–Feb', value: 'Gädda' },
          { label: 'Mar–Apr', value: 'Gädda, havsöring' },
          { label: 'Maj–Jun', value: 'Abborre' },
          { label: 'Jul–Aug', value: 'Gös' },
          { label: 'Sep–Okt', value: 'Abborre, gädda' },
          { label: 'Nov–Dec', value: 'Gädda' },
        ],
      },
    ],
  },
]

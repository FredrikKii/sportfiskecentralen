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
  category: string
  sections: GuideSection[]
}

export const guides: Guide[] = [
  {
    id: 'abborrfiske-skane',
    title: 'Abborrfiske i Skåne – en guide för nybörjare och erfarna sportfiskare',
    description:
      'Abborren är en av Sveriges mest populära sportfiskar, och i Skåne finns det gott om vatten med chans på riktigt fina fiskar – från land, kajak eller båt.',
    category: 'Abborre',
    sections: [
      {
        heading: 'Introduktion',
        body: 'I den här guiden går vi igenom när abborrfisket är som bäst, vilka metoder som fungerar och några vanliga misstag som kan vara bra att undvika.',
      },
      {
        heading: 'När är abborrfisket som bäst?',
        body: 'Abborre kan fångas året runt, men vissa perioder är betydligt bättre än andra.',
      },
      {
        heading: 'Vår',
        body: 'Våren är för många årets bästa abborrperiod. När vattnet börjar värmas upp söker sig abborrarna in mot grundare områden och vikar. Fiskarna samlas ofta inför leken och kan vara mycket huggvilliga. Mindre jiggar och spinnare fungerar ofta mycket bra under denna period.',
        items: [
          'Grunda vikar',
          'Vassområden',
          'Mörk botten som värms upp snabbt',
          'Vindskyddade områden',
        ],
      },
      {
        heading: 'Sommar',
        body: 'Under sommaren sprider abborrarna ut sig mer. Mindre fisk kan stå grunt medan de större individerna ofta söker sig mot djupkanter, stenpartier och områden där betesfisken samlas. Tidiga morgnar och sena kvällar brukar vara mest produktiva under varma dagar.',
      },
      {
        heading: 'Höst',
        body: 'Hösten är en favorit bland många abborrfiskare. Fisken äter upp sig inför vintern och större abborrar kan vara betydligt mer aktiva än under sommaren. Det är inte ovanligt att årets största abborrar fångas under hösten.',
        items: [
          'Djupbranter',
          'Uddar',
          'Områden med mycket betesfisk',
          'Övergångar mellan grunt och djupt vatten',
        ],
      },
      {
        heading: 'Jiggfiske efter abborre',
        body: 'Jiggfiske är sannolikt den mest populära metoden för abborrfiske idag. För nybörjare är det svårt att hitta en mer effektiv metod. Fiska långsamt och håll kontakt med botten – många hugg kommer när jiggen sjunker.',
        items: [
          '5–8 cm jiggar',
          'Naturliga färger i klart vatten',
          'Starkare färger i grumligt vatten',
          'Jigghuvuden mellan 5–15 gram beroende på djup',
        ],
      },
      {
        heading: 'Spinnare',
        body: 'Trots alla moderna beten är spinnaren fortfarande ett av de enklaste och mest effektiva abborrbetena. En klassisk Myrans eller Vibrax fungerar fortfarande utmärkt i många skånska sjöar. Det är ett utmärkt bete när man vill täcka mycket vatten på kort tid.',
        items: [
          'På våren',
          'I grunt vatten',
          'För nybörjare',
          'Vid fiske från land',
        ],
      },
      {
        heading: 'Små hårdbeten',
        body: 'Små wobblers och crankbaits kan vara mycket effektiva när abborrarna jagar aktivt. Många av dagens hårdbeten kastar dessutom långt, vilket är en fördel för landfiskare.',
        items: [
          'Under sommaren',
          'När abborrarna jagar småfisk',
          'Längs vasskanter',
          'Vid steniga stränder',
        ],
      },
      {
        heading: 'Abborrfiske från land',
        body: 'Du behöver inte båt för att fånga fina abborrar i Skåne. Rör dig gärna mellan olika platser om fisken inte är aktiv.',
        items: [
          'Uddar',
          'Vasskanter',
          'Djupbranter som når nära land',
          'Bryggor och hamnområden där fiske är tillåtet',
          'In- och utlopp',
        ],
      },
      {
        heading: 'Abborrfiske från kajak',
        body: 'Kajakfiske har blivit allt populärare i Skåne och passar perfekt för abborrfiske. Glöm inte flytväst och kontrollera väderprognosen innan du ger dig ut.',
        items: [
          'Du når områden som är svåra från land',
          'Du kommer nära fisken utan att störa den',
          'Låga kostnader jämfört med båt',
        ],
      },
      {
        heading: 'Vanliga misstag',
        items: [
          'För stora beten – mindre jiggar fungerar ofta bättre, särskilt när abborrarna är försiktiga.',
          'För snabbt fiske – abborren vill inte alltid jaga långt; ett långsammare tempo ger ofta fler hugg.',
          'Att stanna för länge – byt plats om du inte får kontakt, inte bara bete.',
          'Att ignorera betesfisken – hittar du småfisk i ytan eller i stim finns abborrar ofta i närheten.',
        ],
      },
      {
        heading: 'Sammanfattning',
        body: 'Abborrfiske i Skåne erbjuder något för alla, oavsett om du fiskar från land, kajak eller båt. Våren och hösten är ofta de mest produktiva perioderna, men med rätt metod går det att fånga abborre under hela året. Börja enkelt med mindre jiggar eller en klassisk spinnare, lär känna ditt vatten och fokusera på områden där betesfisken samlas. Förr eller senare kommer storabborren att hugga.',
      },
    ],
  },
  {
    id: 'fiske-ringsjoarna',
    title: 'Fiske i Ringsjöarna – Skånes bästa allroundsjö?',
    description:
      'Ringsjöarna är några av Skånes mest populära insjöar för sportfiske. Här finns starka bestånd av gädda, abborre och gös, vilket gör sjön attraktiv året runt. Sjön är dessutom en av Skånes största.',
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

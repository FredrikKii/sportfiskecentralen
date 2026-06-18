export interface ImageCreditData {
  id: string
  title: string
  author: string
  authorUrl?: string
  sourceName: string
  sourceUrl: string
  license: string
  licenseUrl: string
}

export const imageCredits: ImageCreditData[] = [
  {
    id: 'ringsjoarna-hero',
    title: 'Ringsjöarna',
    author: 'Susanne Nilsson',
    sourceName: 'Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Blue_hour_at_the_Lake_(23151926910).jpg',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
  {
    id: 'dagstorpssjon-hero',
    title: 'Dagstorpssjön',
    author: 'Sportfiskecentralen',
    sourceName: 'Sportfiskecentralen',
    sourceUrl: '/credits',
    license: 'Modifierad med AI',
    licenseUrl: '/credits',
  },
  {
    id: 'lokala-avar-hero',
    title: 'Lokala åar och bäckar',
    author: 'Sportfiskecentralen',
    sourceName: 'Sportfiskecentralen',
    sourceUrl: '/credits',
    license: 'Modifierad med AI',
    licenseUrl: '/credits',
  },
  {
    id: 'satoftasjon-hero',
    title: 'Sätoftasjön',
    author: 'Sportfiskecentralen',
    sourceName: 'Sportfiskecentralen',
    sourceUrl: '/credits',
    license: 'Modifierad med AI',
    licenseUrl: '/credits',
  },
  {
    id: 'tjornarpssjon-hero',
    title: 'Tjörnarpssjön',
    author: 'Jorchr',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Jorchr',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tj%C3%B6rnarpasj%C3%B6n_2010.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    id: 'bosarpasjon-hero',
    title: 'Bosarpasjön',
    author: 'David Castor',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Dcastor',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/Category:Images_by_David_Castor',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    id: 'vaxsjon-hero',
    title: 'Vaxsjön',
    author: 'Jorchr',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Jorchr',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vaxsj%C3%B6n,_Sk%C3%A5ne_2.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
]

export function getImageCredit(id: string): ImageCreditData | undefined {
  return imageCredits.find((credit) => credit.id === id)
}

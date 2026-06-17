export interface Water {
  id: string
  name: string
  species: string[]
  description: string
  gradient: string
  region: string
  bestSeason: string
  techniques: string[]
  access: string
  content: string[]
}

export const waters: Water[] = [
  {
    id: 'ringsjoarna',
    name: 'Ringsjöarna',
    species: ['Abborre', 'Gädda', 'Gös', 'Mört'],
    description:
      'Skånes största sjösystem med varierad struktur – från grunda vassvikar till djupare partier. Ett klassiskt vatten för abborre och gös året runt.',
    gradient: 'from-forest-dark via-forest to-forest-light',
    region: 'Höör / Eslöv',
    bestSeason: 'April–oktober',
    techniques: ['Spinnfiske', 'Mete', 'Pimpelfiske', 'Trolling'],
    access: 'Flera ramper och naturliga landningsplatser längs strandlinjen. Bra tillgång från land i östra och södra delarna.',
    content: [
      'Ringsjöarna består av Östra och Västra Ringsjön och utgör ett av Skånes mest mångsidiga fiskevatten. Strukturen varierar kraftigt – grunda vassvikar i norr, öppna pelagiska partier i mitten och branta kanter längs vissa stränder.',
      'Abborren är vattenets mest tillgängliga art. Under våren samlas den i grunda vikar med tempererat vatten. Jiggfiske med 5–8 cm jiggar i naturliga färger fungerar bra. Vasskanten är ofta produktiv redan när vattnet passerar 8–10 grader.',
      'Gösen håller till i djupare partier, särskilt kring Östra Ringsjön. Vertikalfiske med jiggar och livebete är klassiska metoder. Trolling med djupgående wobblers kan ge fina fiskar under sommaren när gösen står djupare.',
      'Gäddan jagar aktivt längs vasslinjer och i sund mellan sjöarna. Kvällsfiske med spinnare och jerkbaits är särskilt givande under hösten. Ytfiske fungerar bra när vattnet är varmt och gäddan står grunt.',
    ],
  },
  {
    id: 'dagstorpssjon',
    name: 'Dagstorpssjön',
    species: ['Abborre', 'Gädda', 'Mört', "Björkna", "Sutare", "Braxen"],
    description:
      'Populärt fiskevatten nära Höör med bra tillgång från land. Abborren är aktiv i vasskanter och gäddor jagar också aktivt längs vasslinjen.',
    gradient: 'from-charcoal via-forest-dark to-forest',
    region: 'Höör',
    bestSeason: 'Mars–november',
    techniques: ['Spinnfiske', 'Flugfiske', 'Mete'],
    access: 'Bra parkeringsmöjligheter och fiske från land längs stora delar av sjön. Handikappanpassad brygga finns.',
    content: [
      'Dagstorpssjön ligger strax utanför Höör och är ett av de mest besökta fiskevattnen i området. Sjön är lagom stor för att utforskas till fots längs stranden, med tydliga strukturer som vass, bryggor och naturliga vikar.',
      'Abborren är aktiv under större delen av säsongen. Vasskanterna i norra delen av sjön är särskilt produktiva under våren och försommaren. Lätta spinnriggar med små jiggar och spinnare ger bra resultat.',
      'Regnbåge släpps ut under put and take-säsongen och lockar många familjer och nybörjare. Morgontimmar med kallt vatten ger bäst chans. Powerbait, spinnare och små flugor är beprövade val.',
      'Gäddan finns i god mängd och jagar ofta nära vass och bryggor. Kvällsfiske med ytflytande beten kan ge fina följningar under sommaren.',
    ],
  },
  {
    id: 'tjornarpssjon',
    name: 'Tjörnarpssjön',
    species: ['Abborre', 'Gädda', 'Gös'],
    description:
      'Mindre men givande sjö med tydlig struktur längs strandlinjen. Perfekt för kvällsfiske efter gädda och tidig vårfiske efter abborre.',
    gradient: 'from-forest via-forest-light to-sand-muted',
    region: 'Höör',
    bestSeason: 'April–september',
    techniques: ['Spinnfiske', 'Mete', 'Pimpelfiske'],
    access: 'Naturvägar längs stranden. Begränsad parkering – kom tidigt under helger.',
    content: [
      'Tjörnarpssjön är en mindre sjö med överraskande bra fiske. Den tydliga strandstrukturen gör det enkelt att hitta fisk, och vattnet är ofta lugnare än på större sjöar i regionen.',
      'Abborren samlas tidigt på våren i grunda vikar. Pimpelfiske fungerar utmärkt under vårvintern och tidig vår när abborren står grunt. Jiggfiske längs vasskanten är produktivt under hela sommaren.',
      'Gäddan jagar aggressivt längs vasslinjen, särskilt under gryning och skymning. Spinnare och jerkbaits i naturliga färger är bra val. Ytfiske med buzzbaits kan ge spektakulära hugg under varma sommarkvällar.',
      'Gösen finns i sjön men är mer kräsen än abborre och gädda. Vertikalfiske i djupare partier vid sjöns mitt ger bäst chans under högsommar.',
    ],
  },
  {
    id: 'vaxsjon',
    name: 'Vaxsjön',
    species: ['Abborre', 'Gädda', 'Braxen'],
    description:
      'Lugnt vatten med fina bottenstrukturer och vasszoner. Bra val för mete och lättare spinnfiske från bryggor och naturliga landningsplatser.',
    gradient: 'from-charcoal-light via-forest-dark to-forest-light',
    region: 'Höör',
    bestSeason: 'Maj–oktober',
    techniques: ['Mete', 'Spinnfiske', 'Bombarda'],
    access: 'Bryggor och naturliga fiskeplatser längs västra stranden. Lätt tillgängligt från parkering.',
    content: [
      'Vaxsjön är ett stillsamt fiskevatten som passar dig som vill ha lugnare fiske. Bottenstrukturen med sand, grus och vass ger bra förutsättningar för både rovfisk och vitfisk.',
      'Abborren finns i god mängd och svarar bra på mete med mask eller maggot nära vass och bryggor. Lätt spinnfiske med små jiggar fungerar också utmärkt.',
      'Braxen är vanlig och kan ge fina fångster på mete under sommaren. Fiska grunt med flötmete nära vasskanten under varma dagar.',
      'Gäddan finns men är inte vattenets huvudattraktion. Kvällsfiske längs vasslinjen kan ändå ge fina fiskar, särskilt under hösten.',
    ],
  },
  {
    id: 'lokala-avar',
    name: 'Lokala åar och bäckar',
    species: ['Abborre', 'Gädda', 'Öring'],
    description:
      'De mindre vattendragen runt Höör och Ringsjöbygden erbjuder stillsamt fiske med överraskande bra abborrbestånd – ofta bortglömda av de flesta.',
    gradient: 'from-forest-dark via-charcoal to-forest',
    region: 'Höör / Ringsjöbygden',
    bestSeason: 'April–oktober',
    techniques: ['Spinnfiske', 'Flugfiske', 'Mete'],
    access: 'Varierar per vattendrag. Respektera privat mark och lokala fiskeregler.',
    content: [
      'De mindre åarna och bäckarna runt Höör och Ringsjöbygden är ofta förbisedda men kan erbjuda fint fiske för den som tar sig tid att utforska. Vattendragen har tydlig strömstruktur med djuphål, strömtåg och stillastående partier.',
      'Abborren finns i de lugnare partierna och bakom naturliga hinder som träd och stenar. Lätt spinnfiske med små jiggar och spinnare ger bra resultat. Fiska långsamt och metodiskt längs stränderna.',
      'Gäddan lurar i djuphål och vid sammanflöden. Jerkbaits och spinnare fungerar bra, särskilt under våren och hösten när vattnet är svalare.',
      'I vissa vattendrag finns öring, särskilt där kallare källvatten tillförs. Flugfiske med nymfer och små streamers kan ge fina fångster under våren.',
    ],
  },
  {
    id: 'malmo-kanal',
    name: 'Malmö Kanal',
    species: ['Abborre', 'Gädda', 'Mört'],
    description:
      'Ett av Skånes mest kända abborrvatten – längs kanalens kant, vid broar och bryggor finns ett starkt och tillgängligt abborrbestånd mitt i staden.',
    gradient: 'from-charcoal via-forest-dark to-charcoal-light',
    region: 'Malmö',
    bestSeason: 'April–november',
    techniques: ['Spinnfiske', 'Mete', 'Jiggfiske'],
    access: 'Utmärkt tillgång från land längs stora delar av kanalen. Promenadstråk och bryggor gör fisket lätt att nå utan båt.',
    content: [
      'Malmö Kanal är ett klassiskt abborrvatten som lockar sportfiskare från hela regionen. Vattnet är djupt och strukturerat längs kanalväggarna, och abborren söker sig till bryggor, pålar, brofundament och andra naturliga gömställen.',
      'Abborren är utan tvekan kanalens huvudattraktion. Jiggfiske längs kanten med 5–7 cm jiggar i naturliga färger ger konsekventa fångster året runt. Fiska långsamt och låt jiggen nå botten – abborren står ofta tätt mot kanalväggen eller vid bryggorna.',
      'Våren och hösten är bästa säsongerna, men abborren är aktiv även under sommaren tidigt på morgonen och sent på kvällen. Vid varmt väder söker den sig djupare, nära bottenstrukturer och skugga under broar.',
      'Gädda och mört finns också i kanalen, men de flesta fiskare siktar på abborre. Ett lätt spinnspö med flätad lina och ett urval av jiggar räcker långt. Mete med mask vid bryggor kan ge fina fångster under lugnare dagar.',
    ],
  },
]

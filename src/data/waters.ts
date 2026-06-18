import backocha from '../assets/backocha.png'
import bosarpasjon from '../assets/Bosarpasjön.png'
import dagstorpssjonSommar from '../assets/dagstorpssjon-sommar.png'
import satoftasjon from '../assets/sätoftasjön.png'

export interface WaterImage {
  src: string
  alt: string
  creditId: string
  objectPosition?: string
}

export interface Water {
  id: string
  name: string
  species: string[]
  description: string
  gradient: string
  image?: WaterImage
  region: string
  bestSeason: string
  techniques: string[]
  access: string
  content: string[]
  fishingPermitUrl?: string
  fishingPermitLabel?: string
}

export const waters: Water[] = [
  {
    id: 'ringsjoarna',
    name: 'Ringsjöarna',
    species: ['Abborre', 'Gädda', 'Gös', 'Mört'],
    description:
      'Skånes största sjösystem med varierad struktur – från grunda vassvikar till djupare partier. Ett klassiskt vatten för abborre och gös året runt.',
    gradient: 'from-forest-dark via-forest to-forest-light',
    image: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_hour_at_the_Lake_(23151926910).jpg?width=1280',
      alt: 'Blå timmen vid Ringsjöarna',
      creditId: 'ringsjoarna-hero',
      objectPosition: '50% 25%',
    },
    region: 'Höör / Eslöv',
    bestSeason: 'April–oktober',
    techniques: ['Spinnfiske', 'Mete', 'Pimpelfiske', 'Trolling'],
    access: 'Flera ramper och naturliga landningsplatser längs strandlinjen. Bra tillgång från land i östra och södra delarna.',
    fishingPermitUrl: 'https://www.ifiske.se/fiskekort-ringsjon.htm',
    content: [
      'Ringsjöarna består av Östra och Västra Ringsjön och utgör ett av Skånes mest mångsidiga fiskevatten. Strukturen varierar kraftigt – grunda vassvikar i norr, öppna pelagiska partier i mitten och branta kanter längs vissa stränder.',
      'Abborren är vattenets mest tillgängliga art. Under våren samlas den i grunda vikar med tempererat vatten. Jiggfiske med 5–8 cm jiggar i naturliga färger fungerar bra. Vasskanten är ofta produktiv redan när vattnet passerar 8–10 grader.',
      'Gösen håller till i djupare partier, särskilt kring Östra Ringsjön. Vertikalfiske med jiggar och livebete är klassiska metoder. Trolling med djupgående wobblers kan ge fina fiskar under sommaren när gösen står djupare.',
      'Gäddan jagar aktivt längs vasslinjer och i sund mellan sjöarna. Kvällsfiske med spinnare och jerkbaits är särskilt givande under hösten. Ytfiske fungerar bra när vattnet är varmt och gäddan står grunt.',
    ],
  },
  {
    id: 'satoftasjon',
    name: 'Sätoftasjön',
    species: ['Abborre', 'Gädda', 'Gös', 'Mört'],
    description:
      'Djupaste delen av Ringsjösystemet med varierad struktur – från grunda vassvikar till djupare pelagiska partier. Ett givande vatten för gös och abborre.',
    gradient: 'from-forest via-forest-dark to-charcoal',
    image: {
      src: satoftasjon,
      alt: 'Illustrativ bild av Sätoftasjön, modifierad med AI.',
      creditId: 'satoftasjon-hero',
    },
    region: 'Höör / Hörby',
    bestSeason: 'April–oktober',
    techniques: ['Spinnfiske', 'Mete', 'Vertikalfiske', 'Trolling'],
    access: 'Fiske från land och båt. Tillhör Ringsjön FVOF – samma fiskekort gäller som för övriga Ringsjöarna.',
    fishingPermitUrl: 'https://www.ifiske.se/fiskekort-ringsjon.htm',
    content: [
      'Sätoftasjön är en del av Ringsjösystemet och hänger ihop med Östra Ringsjön. Här finns systemets största djup – upp mot 17 meter – vilket gör sjön särskilt intressant för gösfiske och vertikalfiske i djupare partier.',
      'Strukturen varierar mellan grunda, vassiga vikar och öppna pelagiska ytor. Abborren är aktiv längs vasskanten under våren och försommaren. Jiggfiske med 5–8 cm jiggar i naturliga färger fungerar bra när abborren står grunt.',
      'Gösen håller ofta till i djupare vatten och kan fångas med vertikalfiske, jiggar och trolling. Under sommaren när gösen står djupare kan djupgående wobblers och vertikalmetoder ge fina fiskar.',
      'Gäddan jagar längs vasslinjer och i övergångar mellan grunt och djupt vatten. Kvällsfiske med spinnare och jerkbaits är produktivt under hösten. Kom ihåg att samma fiskeregler och minimimått gäller som för hela Ringsjön FVOF.',
    ],
  },
  {
    id: 'dagstorpssjon',
    name: 'Dagstorpssjön',
    species: ['Abborre', 'Gädda', 'Mört', "Björkna", "Sutare", "Braxen"],
    description:
      'Populärt fiskevatten nära Höör med bra tillgång från land. Abborren är aktiv i vasskanter och gäddor jagar också aktivt längs vasslinjen.',
    gradient: 'from-charcoal via-forest-dark to-forest',
    image: {
      src: dagstorpssjonSommar,
      alt: 'Illustrativ bild av Dagstorpssjön, modifierad med AI.',
      creditId: 'dagstorpssjon-hero',
    },
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
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Tj%C3%B6rnarpasj%C3%B6n_2010.jpg',
      alt: 'Tjörnarpasjön en sommardag',
      creditId: 'tjornarpssjon-hero',
      objectPosition: '50% 45%',
    },
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
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Vaxsj%C3%B6n%2C_Sk%C3%A5ne_2.jpg',
      alt: 'Vaxsjön en sommardag',
      creditId: 'vaxsjon-hero',
      objectPosition: '50% 45%',
    },
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
    id: 'bosarpasjon',
    name: 'Bosarpasjön',
    species: ['Abborre', 'Gädda', 'Gös', 'Braxen', 'Mört', 'Karp'],
    description:
      'Näringsrik källsjö sydost om Sösdala, känd för sitt karpfiske och varierade bestånd av både rovfisk och vitfisk i en lugn skånsk sjömiljö.',
    gradient: 'from-sand-muted via-forest-dark to-forest',
    image: {
      src: bosarpasjon,
      alt: 'Bosarpasjön en sommardag',
      creditId: 'bosarpasjon-hero',
    },
    region: 'Hässleholm / Sösdala',
    bestSeason: 'Maj–oktober',
    techniques: ['Mete', 'Karpmete', 'Spinnfiske', 'Flugfiske', 'Pimpelfiske'],
    access: 'Privat fiskevatten med begränsat antal dagskort. Fiske från land och båt – respektera lokala regler och fastighetsgränser.',
    fishingPermitUrl: 'https://www.bosarpasjon.se/?page_id=329',
    fishingPermitLabel: 'Fiskekort och regler',
    content: [
      'Bosarpasjön ligger en knapp mil sydost om Sösdala i Hässleholms kommun. Sjön är en näringsrik källsjö med varierad struktur – grunda vassvikar, djupare partier och tydliga bottenmiljöer som gynnar både karpfisk och rovfisk.',
      'Vitfisken dominerar beståndet med arter som braxen, mört, sutare och karp. Sjön är särskilt omtalad för karpfiske, men abborre, gös och gädda finns också i vattnet. Mete och karpmete är naturliga val när du söker större vitfisk i grunda, vegetationsrika partier.',
      'Rovfisket kan ge fina upplevelser med spinnfiske och vertikalfiske efter gös och abborre. Gäddan finns men beståndet är glest – fiska metodiskt längs vasslinjer och i övergångar mellan grunt och djupt vatten, särskilt under gryning och skymning.',
      'Ett begränsat antal fiskekort säljs till allmänheten. För dagskort gäller catch-and-release på rovfisk, och särskilda regler om fredningstider och återutsättning – läs alltid aktuella föreskrifter på Bosarpasjöns fiskevårdsområde innan du fiskar.',
    ],
  },
  {
    id: 'lokala-avar',
    name: 'Lokala åar och bäckar',
    species: ['Abborre', 'Gädda', 'Öring'],
    description:
      'De mindre vattendragen runt Höör och Ringsjöbygden erbjuder stillsamt fiske med överraskande bra abborrbestånd – ofta bortglömda av de flesta.',
    gradient: 'from-forest-dark via-charcoal to-forest',
    image: {
      src: backocha,
      alt: 'Illustrativ bild av lokala åar och bäckar, modifierad med AI.',
      creditId: 'lokala-avar-hero',
    },
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
]

export interface Report {
  id: string
  title: string
  date: string
  location: string
  species: string[]
  excerpt: string
  author: string
  content: string[]
}

export const reports: Report[] = [
  {
    id: 'abborre-gamla-bo-kanalen',
    title: 'Abborre och gädda i Gamla Bo-kanalen',
    date: '2026-07-28',
    location: 'Gamla Bo-kanalen, Ringsjöarna',
    species: ['Abborre', 'Gädda'],
    author: 'Fredrik Eriksson',
    excerpt:
      'Fiskade mellan Ringsjöarna och Gamla Bo-kanalen. Småabborre jagade betesfisk mot strandkanterna, medan större borrar på cirka 35 cm tog mitt i kanalen på djupet med 5 cm Westin Shadteez.',
    content: [
      'Fiskade mellan Ringsjöarna och Gamla Bo-kanalen den 28 juli. Jag upplevde att fisken rör sig mellan sjöarna i olika takt – emellanåt var det småabborre som jagade små betesfisk upp mot strandkanterna.',
      'De större borrarna, runt 35 cm, fick jag mitt i kanalen på djupet. Bästa betet var en 5 cm Westin Shadteez med 3,5 g skalle.',
      'När gäddan istället var den som huggit har abborrarna lyst med sin frånvaro i ungefär 30 minuter innan de kommit tillbaka. Ett tydligt mönster som är värt att ha i bakhuvudet när man fiskar kanalen.',
    ],
  },
  {
    id: 'abborre-vaxsjon-juli',
    title: 'Abborrfiske från brygga i Vaxsjön – tyst dag i juli',
    date: '2026-07-20',
    location: 'Vaxsjön',
    species: ['Abborre'],
    author: 'Fredrik Eriksson',
    excerpt:
      'Landfiske efter abborre från bryggorna vid Vaxsjön utanför Höör. Jigg 5–7 cm, jerkbait och dropbite – men fisket var stendött den här dagen.',
    content: [
      'Den 20 juli fiskade jag abborre i Vaxsjön, mitt i centrala Skåne mellan Frostavallen och Skånes Djurpark. Sjöns bryggor är smidigt placerade längs stranden och passar bra för landfiske utan båt.',
      'Jag kastade mest från bryggorna med jiggar på 5–7 cm, och testade även jerkbait och dropbite. Tyvärr var det helt stendött – varken hugg eller följningar att tala om.',
      'Vaxsjön är ändå värd ett återbesök. Nästa gång blir det andra sträckor längs sjön för att se vad abborr- och gäddfisket har att erbjuda när fisken är mer aktiv.',
    ],
  },
  {
    id: 'abborre-tjornarpssjon-juli',
    title: 'Småabborre runt ön i Tjörnarpssjön',
    date: '2026-07-15',
    location: 'Tjörnarpssjön',
    species: ['Abborre'],
    author: 'Fredrik Eriksson',
    excerpt:
      'Fint och varmt väder, båt hyrd via FVOF. Småabborre stod både vassnära och mitt ute i sjön – gäddan lyste med sin frånvaro trots Buster Jerk.',
    content: [
      'Den 15 juli var det fint och varmt väder, så jag hyrde en båt av Tjörnarpssjöns FVOF – smidigt och enkelt arrangerat.',
      'Jag började vassnära och vid näckrosorna och fick snabbt ett gäng småabborrar. När jag sedan rodde lite längre ut och la några kast mitt ute i “ingenstans” kom det abborre direkt där också.',
      'Därefter rodde jag runt ön i sjön och fiskade av de små sunden och runt fallna träd. Där var det mer sparsamt – något enstaka hugg, men inget mer än så.',
      'Jag hade även med gäddspöt och drog ett par kast med favoriten Buster Jerk, men gäddorna var inte aktiva den här dagen.',
    ],
  },
  {
    id: 'abborre-ringsjon',
    title: 'Abborren börjar röra på sig i Ringsjön',
    date: '2026-06-12',
    location: 'Ringsjöarna',
    species: ['Abborre'],
    author: 'Erik från Höör',
    excerpt:
      'Vattentemperaturen har stigit och abborren samlas nu kring grunda vasspartier i östra delen av sjön. Jigg i naturliga färger har gett bäst resultat vid lätt vind.',
    content: [
      'Efter en kylig vår har vattentemperaturen i Ringsjöarna äntligen stigit till runt 14 grader i de grunda vikarna. Abboren har blivit märkbart mer aktiv de senaste dagarna, särskilt i östra delen av sjösystemet.',
      'Bästa fisket har varit vid lätt vind och molnig himmel. Jiggfiske med 7 cm jiggar i grönt och brunt har gett konsekventa fångster. Fiska långsamt längs vasskanten – abborren står ofta bara en meter från vassen.',
      'Större abborrar verkar ha samlats i djupare vasskanter där botten går från 1 till 3 meter. En större jigg med lätt jigghuvud har gett de finaste fiskarna.',
      'Prognosen för kommande vecka ser lovande ut med fortsatt stigande temperaturer. Förvänta dig ännu bättre fiske om vädret håller sig stabilt.',
    ],
  },
  {
    id: 'kvallsfiske-gadda',
    title: 'Kvällsfiske efter gädda runt vasskanterna',
    date: '2026-06-08',
    location: 'Dagstorpssjön',
    species: ['Gädda'],
    author: 'Sportfiskecentralen',
    excerpt:
      'Senaste kvällarna har gäddan jagat aktivt längs vasslinjen. Ytfiske med spinnare och jerkbaits mellan kl. 20–22 har gett fina följningar och några riktigt fina fiskar.',
    content: [
      'Dagstorpssjön har levererat fina kvällar den senaste veckan. Gäddan jagar aktivt längs vasslinjen när solen går ner, och ytfiske har varit den klart bästa metoden.',
      'Mellan kl. 20 och 22 har följningarna varit som mest intensiva. Spinnare i koppar och silver har gett snabba hugg, medan jerkbaits i naturliga färger har lockat till större fiskar.',
      'Norra vasskanten har varit mest produktiv, särskilt där vassen möter öppet vatten med 1–2 meters djup. Fiska långsamt och ge betet tid att arbeta i ytan.',
      'Flera fiskare rapporterar gäddor över 80 cm den senaste veckan. Kom gärna ut sent – de sista ljuset ger ofta de bästa huggen.',
    ],
  },
  {
    id: 'put-and-take-tips',
    title: 'Put and take-tips inför helgen',
    date: '2026-06-05',
    location: 'Centrala Skåne',
    species: ['Regnbåge', 'Öring'],
    author: 'Sportfiskecentralen',
    excerpt:
      'Inför helgens put and take-säsong: välj kallare morgontimmar, fiska djupt med små spinnare eller Powerbait vid botten. De senaste utsättningarna har varit starka.',
    content: [
      'Put and take-säsongen är i full gång i centrala Skåne och de senaste utsättningarna har varit starka med fina regnbågar och öringar.',
      'Morgontimmar ger klart bäst resultat, särskilt under varma dagar. Regnbågen står ofta grunt tidigt på morgonen och går djupare när solen värmer vattnet.',
      'Powerbait vid botten är det säkraste valet för nybörjare. Mer erfarna fiskare kan prova små spinnare och lätt spinnfiske längs vasskanten.',
      'Kom ihåg att kontrollera lokala regler och fiskekort innan du ger dig ut. Dagstorpssjön och flera vatten i regionen kräver särskilt fiskekort för put and take.',
    ],
  },
  {
    id: 'gos-ringsjoarna',
    title: 'Gösfiske piggar till i Ringsjöarnas djupare partier',
    date: '2026-06-01',
    location: 'Ringsjöarna',
    species: ['Gös'],
    author: 'Marcus',
    excerpt:
      'Gösen har blivit mer aktiv i de djupare partierna kring Östra Ringsjön. Vertikalfiske med större jiggar har gett fina fångster tidigt på morgonen.',
    content: [
      'Gösfisket i Ringsjöarna har tagit fart den senaste veckan. Fiskare som satsat på vertikalfiske i djupare partier har haft god framgång, särskilt i gryning.',
      'Bästa djupet har legat mellan 5 och 8 meter, ofta precis vid övergången mellan grundare och djupare botten. Större jiggar i silver och vitt har varit mest produktiva.',
      'Trolling med djupgående wobblers har också gett resultat från båt, men landfiskare bör fokusera på tillgängliga djupkantszoner längs östra stranden.',
      'Prognosen ser god ut med fortsatt stabilt väder. Tidiga morgnar ger klart bäst chans.',
    ],
  },
  {
    id: 'mete-vaxsjon',
    title: 'Fin abborrfiske på mete i Vaxsjön',
    date: '2026-05-28',
    location: 'Vaxsjön',
    species: ['Abborre', 'Braxen'],
    author: 'Lina',
    excerpt:
      'Vaxsjön levererar stabilt metfiske längs vasskanten. Mask och maggot har gett fina abborrar, och braxen har börjat visa sig i värmen.',
    content: [
      'Vaxsjön är ett utmärkt val för dig som vill ha lugnare fiske med metspö. De senaste dagarna har abborren stått grunt längs vasskanten, särskilt vid västra stranden.',
      'Mask och maggot på en enkel rigg med flöte har gett konsekventa fångster. Abborrarna är oftast mellan 20 och 30 cm, men några finare fiskar har också rapporterats.',
      'Braxen har börjat dyka upp i värmen och svarar bra på samma mete. Fiska grunt och ge betet tid – braxen kan vara försiktig.',
      'Perfekt plats för en lugn fiskemorgon med familjen. Kom tidigt för bäst aktivitet.',
    ],
  },
]

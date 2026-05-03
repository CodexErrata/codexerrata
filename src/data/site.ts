export type Locale = "sv" | "en";

export type ProductionKind =
  | "Factual entertainment"
  | "True crime"
  | "Documentary"
  | "Social journalism"
  | "Reality"
  | "Podcast"
  | "Commissioned";

export type ProductionBucketId = "factual" | "true-crime" | "podcasts";

export type Production = {
  slug: string;
  title: string;
  channel: string;
  seasons: string;
  years: string;
  yearSort: number;
  genres: ProductionKind[];
  description: Record<Locale, string>;
  summary: Record<Locale, string>;
  participants?: string;
  trailerUrl?: string;
  statusNote?: Record<Locale, string>;
  artwork?: {
    src: string;
    cardSrc: string;
    width: number;
    height: number;
    cardWidth: number;
    cardHeight: number;
    alt: Record<Locale, string>;
  };
  stills: string[];
};

export type ProductionBucket = {
  id: ProductionBucketId;
  label: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
};

export type TeamMember = {
  name: string;
  role: Record<Locale, string>;
  image: {
    src: string;
    width: number;
    height: number;
    alt: Record<Locale, string>;
  };
};

export type ContactRole = {
  role: Record<Locale, string>;
  name: string;
  email: string;
  phone: string;
  bio: Record<Locale, string>;
};

export const site = {
  name: "Alaska Film & TV",
  legalName: "Alaska Film & TV AB",
  url: "https://www.alaskafilmtv.com",
  address: "Stockholm, Sverige",
  email: "info@alaskafilmtv.com",
  phone: "+46 XX XXX XX XX",
  accent: "#5b5f43",
  analytics: "Plausible/Fathom placeholder"
};

export const nav = {
  sv: [
    {
      href: "/produktioner",
      label: "Produktioner",
      children: [
        { href: "/produktioner", label: "Alla produktioner" },
        { href: "/produktioner?category=factual", label: "Factual" },
        { href: "/produktioner?category=true-crime", label: "True crime" },
        { href: "/produktioner?category=podcasts", label: "Podcasts" }
      ]
    },
    {
      href: "/bolaget",
      label: "Om Alaska",
      children: [
        { href: "/bolaget", label: "Om Alaska" },
        { href: "/siffror-utmarkelser", label: "Siffror & utmärkelser" },
        { href: "/bolaget#team", label: "Team" }
      ]
    },
    { href: "/kontakt", label: "Kontakt" }
  ],
  en: [
    {
      href: "/en/productions",
      label: "Productions",
      children: [
        { href: "/en/productions", label: "All productions" },
        { href: "/en/productions?category=factual", label: "Factual" },
        { href: "/en/productions?category=true-crime", label: "True crime" },
        { href: "/en/productions?category=podcasts", label: "Podcasts" }
      ]
    },
    {
      href: "/en/company",
      label: "About Alaska",
      children: [
        { href: "/en/company", label: "About Alaska" },
        { href: "/en/stats-awards", label: "Stats & awards" },
        { href: "/en/company#team", label: "Team" }
      ]
    },
    { href: "/en/contact", label: "Contact" }
  ]
} satisfies Record<Locale, { href: string; label: string; children?: { href: string; label: string }[] }[]>;

export const productionBuckets: ProductionBucket[] = [
  {
    id: "factual",
    label: { sv: "Factual", en: "Factual" },
    eyebrow: { sv: "TV och digitalt", en: "TV and digital" }
  },
  {
    id: "true-crime",
    label: { sv: "True crime", en: "True crime" },
    eyebrow: { sv: "Kriminaljournalistik", en: "Crime journalism" }
  },
  {
    id: "podcasts",
    label: { sv: "Podcasts", en: "Podcasts" },
    eyebrow: { sv: "Ljudproduktion", en: "Audio production" }
  }
];

export const placeholderTeamMembers: TeamMember[] = [
  {
    name: "Barack Obama",
    role: {
      sv: "USA:s president, 2009-2017",
      en: "President of the United States, 2009-2017"
    },
    image: {
      src: "/images/team/barack-obama.jpg",
      width: 1280,
      height: 1599,
      alt: {
        sv: "Porträtt av Barack Obama",
        en: "Portrait of Barack Obama"
      }
    }
  },
  {
    name: "George W. Bush",
    role: {
      sv: "USA:s president, 2001-2009",
      en: "President of the United States, 2001-2009"
    },
    image: {
      src: "/images/team/george-w-bush.jpg",
      width: 1280,
      height: 1764,
      alt: {
        sv: "Porträtt av George W. Bush",
        en: "Portrait of George W. Bush"
      }
    }
  },
  {
    name: "Bill Clinton",
    role: {
      sv: "USA:s president, 1993-2001",
      en: "President of the United States, 1993-2001"
    },
    image: {
      src: "/images/team/bill-clinton.jpg",
      width: 1280,
      height: 1683,
      alt: {
        sv: "Porträtt av Bill Clinton",
        en: "Portrait of Bill Clinton"
      }
    }
  },
  {
    name: "George H. W. Bush",
    role: {
      sv: "USA:s president, 1989-1993",
      en: "President of the United States, 1989-1993"
    },
    image: {
      src: "/images/team/george-hw-bush.jpg",
      width: 1280,
      height: 1750,
      alt: {
        sv: "Porträtt av George H. W. Bush",
        en: "Portrait of George H. W. Bush"
      }
    }
  },
  {
    name: "Ronald Reagan",
    role: {
      sv: "USA:s president, 1981-1989",
      en: "President of the United States, 1981-1989"
    },
    image: {
      src: "/images/team/ronald-reagan.jpg",
      width: 1280,
      height: 1601,
      alt: {
        sv: "Porträtt av Ronald Reagan",
        en: "Portrait of Ronald Reagan"
      }
    }
  },
  {
    name: "Jimmy Carter",
    role: {
      sv: "USA:s president, 1977-1981",
      en: "President of the United States, 1977-1981"
    },
    image: {
      src: "/images/team/jimmy-carter.jpg",
      width: 1280,
      height: 1698,
      alt: {
        sv: "Porträtt av Jimmy Carter",
        en: "Portrait of Jimmy Carter"
      }
    }
  },
  {
    name: "Gerald Ford",
    role: {
      sv: "USA:s president, 1974-1977",
      en: "President of the United States, 1974-1977"
    },
    image: {
      src: "/images/team/gerald-ford.jpg",
      width: 1280,
      height: 1595,
      alt: {
        sv: "Porträtt av Gerald Ford",
        en: "Portrait of Gerald Ford"
      }
    }
  },
  {
    name: "Richard Nixon",
    role: {
      sv: "USA:s president, 1969-1974",
      en: "President of the United States, 1969-1974"
    },
    image: {
      src: "/images/team/richard-nixon.jpg",
      width: 1280,
      height: 1706,
      alt: {
        sv: "Porträtt av Richard Nixon",
        en: "Portrait of Richard Nixon"
      }
    }
  }
];

const productionArtwork = (slug: string, title: string) => ({
  src: `/productions/${slug}.jpg`,
  cardSrc: `/productions/${slug}-card.jpg`,
  width: 1280,
  height: 720,
  cardWidth: 520,
  cardHeight: 292,
  alt: {
    sv: `Bild för ${title}`,
    en: `${title} artwork`
  }
});

export const productions: Production[] = [
  {
    slug: "gransbevakarna-sverige",
    title: "Gränsbevakarna Sverige",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "2022",
    yearSort: 2022,
    genres: ["Factual entertainment", "Documentary"],
    summary: {
      sv: "Faktaserie om gränskontroll, tull och myndighetsarbete i vardagliga men pressade situationer.",
      en: "Factual series following border control, customs and public authority work in high-pressure everyday situations."
    },
    description: {
      sv: "Gränsbevakarna Sverige är en fängslande dokumentärserie som tar tittarna bakom kulisserna vid gränskontrollstationer där tulltjänstemän och poliser arbetar för att skydda landets gränser. Serien visar hur dessa tjänstemän hanterar allt från smuggling och olaglig verksamhet till in- och utresekontroller, och avslöjar både de spännande och utmanande sidorna av yrket. Gränsbevakarna har blivit en stor framgång och en internationell hit som visas över hela världen för engagerade tittare. År 2024 vann serien den prestigefyllda Kristallen-utmärkelsen för Bästa Reality, Sveriges motsvarighet till den amerikanska Emmy Award.",
      en: "Gränsbevakarna Sverige is a captivating documentary series that takes viewers behind the scenes at border control stations where customs officers and police work to protect the country's borders. The series shows how these officers deal with everything from smuggling and illegal activities to checking in and out passengers, revealing both the exciting and challenging aspects of their profession. Gränsbevakarna has become a major success and an international hit, airing worldwide to captivated audiences. In 2024, it won the prestigious Kristallen Award for Best Reality Series, Sweden's equivalent of the American Emmy Award."
    },
    participants: "Medverkande myndighetspersonal och resenärer, enligt sändningsgodkännande.",
    statusNote: {
      sv: "Säsonger och bildmaterial ska slutbekräftas mot broadcaster och produktionsarkiv.",
      en: "Seasons and imagery need final confirmation against broadcaster and production archive."
    },
    artwork: productionArtwork("gransbevakarna-sverige", "Gränsbevakarna Sverige"),
    stills: ["Kontrollmiljö", "Intervjusituation", "Operativ vardag"]
  },
  {
    slug: "svenska-truckers",
    title: "Svenska Truckers",
    channel: "TV3 / Viaplay",
    seasons: "Att bekräfta",
    years: "2020",
    yearSort: 2020,
    genres: ["Factual entertainment", "Reality"],
    summary: {
      sv: "Faktabaserad reality om transportyrket, vardagslogistik och människor som håller landet i rörelse.",
      en: "Factual reality following transport work, daily logistics and the people who keep the country moving."
    },
    description: {
      sv: "Svenska Truckers är en realistisk serie som följer lastbilschaufförernas vardagliga äventyr på vägarna, där de tar sig fram på tuffa sträckor och hanterar leveranser under strikta tidsramar. Programmet ger en unik inblick i lastbilschaufförernas värld, från de långa, ensamma timmarna på vägen till deras skicklighet i att manövrera stora fordon i komplicerade situationer. Svenska Truckers har vunnit den prestigefyllda Kristallen-utmärkelsen för Sveriges Bästa Reality och har fått ytterligare tre nomineringar, vilket befäster seriens position som en av de främsta inom svensk reality-tv.",
      en: "Svenska Truckers is a realistic series that follows the daily adventures of truck drivers on the road, where they navigate tough routes and manage deliveries under strict deadlines. The program provides a unique insight into the world of truck drivers, from the long, lonely hours on the open road to their skill in handling large vehicles in complex situations. Svenska Truckers has won the prestigious Kristallen Award for Sweden's Best Reality Series and has received three additional nominations, solidifying its status as a standout in Swedish reality television."
    },
    artwork: productionArtwork("svenska-truckers", "Svenska Truckers"),
    stills: ["Förare", "Lastning", "Vägsekvens"]
  },
  {
    slug: "efterlyst",
    title: "Efterlyst",
    channel: "TV3 / Viaplay",
    seasons: "30+ år som format, 13 säsonger under Alaska enligt brief",
    years: "1990",
    yearSort: 1990,
    genres: ["True crime", "Social journalism"],
    summary: {
      sv: "Ett av Sveriges mest etablerade kriminaljournalistiska format, med lång historik och stark publik igenkänning.",
      en: "One of Sweden's most established crime journalism formats, with a long history and high public recognition."
    },
    description: {
      sv: "Efterlyst tar tittarna rakt in i hjärtat av Sveriges mest uppseendeväckande brottsfall, där polisen och allmänheten samarbetar för att lösa nedlagda fall och gripa efterlysta brottslingar. Efterlyst har sänts i över 30 år och är en flaggskeppsproduktion och ett prestigeprojekt som fått åtta nomineringar till Kristallen—den svenska motsvarigheten till Emmy. Alaska har valts ut bland produktionsbolagen i Sverige som den betrodda partnern att producera programmet år efter år. Programmet kombinerar råa fakta med autentiska rekonstruktioner för att skildra den pågående jakten på rättvisa.",
      en: "Efterlyst takes viewers straight into the heart of Sweden's most shocking criminal cases, where the police and the public work together to solve cold cases and capture wanted criminals. Airing for over 30 years, Efterlyst is a flagship production and a true prestige project, having earned eight nominations for the Kristallen Award—the Swedish equivalent of an Emmy. Alaska has been specially chosen among production companies in Sweden as the trusted partner to produce this program year after year. The program combines raw facts with authentic reconstructions to portray the ongoing quest for justice."
    },
    participants: "Programledare och medverkande ska bekräftas per säsong.",
    statusNote: {
      sv: "Kanalhistorik och säsongslista behöver redaktionell kontroll innan publicering.",
      en: "Channel history and season list require editorial verification before publishing."
    },
    artwork: productionArtwork("efterlyst", "Efterlyst"),
    stills: ["Studio", "Fallgrafik", "Intervju"]
  },
  {
    slug: "gruvan",
    title: "Gruvan",
    channel: "SVT / SVT Play",
    seasons: "Att bekräfta",
    years: "2023",
    yearSort: 2023,
    genres: ["Documentary", "Factual entertainment"],
    summary: {
      sv: "Dokumentär/faktaserie i gruvmiljö, med fokus på arbete, risk, teknik och samhälle.",
      en: "Documentary/factual series in a mining environment, focused on work, risk, technology and society."
    },
    description: {
      sv: "Djupt under bergen i norra Sverige vaknar en dold värld till liv. Gruvan är en arbetsplatsreality som tar tittarna med in i några av världens mest avancerade och säkraste gruvor. Från Kirunas omfattande underjordsnät till Aitiks väldiga dagbrott följer vi kvinnorna och männen som driver produktionen framåt. Med modern teknik, moderna brytningsmetoder och maskiner som hör till de största på jorden kräver varje moment precision. Det här är världsledande gruvdrift—där innovation och säkerhet går hand i hand för att driva industrin och trygga en nations framtid.",
      en: "Deep beneath the mountains of northern Sweden, a hidden world comes alive. Gruvan is a workplace reality series that takes viewers inside some of the world's most advanced and safest mines. From Kiruna's extensive underground network to Aitik's vast open-pit, we follow the women and men who drive production forward. With cutting-edge technology, modern mining techniques, and machines among the largest on Earth, every operation demands precision. This is world-leading mining—where innovation and safety go hand in hand to power industry and secure a nation's future."
    },
    artwork: productionArtwork("gruvan", "Gruvan"),
    stills: ["Gruvmiljö", "Arbetslag", "Säkerhetsgenomgång"]
  },
  {
    slug: "vagens-hjaltar",
    title: "Vägens Hjältar",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "2015",
    yearSort: 2015,
    genres: ["Factual entertainment", "Reality"],
    summary: {
      sv: "Faktaserie om bärgning, vägservice och vardagens akuta insatser i trafikmiljö.",
      en: "Factual series about recovery work, roadside service and urgent everyday interventions in traffic environments."
    },
    description: {
      sv: "Vägens Hjältar tar tittarna med in i bärgarnas hektiska vardag när de bärgar bilar och andra fordon som krockat eller åkt av vägen. Den framgångsrika serien har under många år fångat tittare i alla åldrar med sina medryckande berättelser om räddning och bärgning. Varje avsnitt visar den skicklighet, det mod och den snabbtänkthet som krävs för att hantera kritiska situationer på vägen, och drar in tittarna i utmaningarna och framgångarna hos dem som håller våra vägar säkra.",
      en: "Vägens Hjältar takes viewers into the fast-paced daily lives of tow truck operators as they recover cars and other vehicles that have crashed or veered off the road. This highly successful series has, for many years, captivated audiences of all ages with its compelling stories of rescue and recovery. Each episode showcases the skills, bravery, and quick thinking required to handle high-stakes situations on the road, drawing viewers into the challenges and triumphs of those who keep our roads safe."
    },
    artwork: productionArtwork("vagens-hjaltar", "Vägens Hjältar"),
    stills: ["Bärgning", "Vägteam", "Nattinsats"]
  },
  {
    slug: "ronnasfallet",
    title: "Rönnäsfallet",
    channel: "SVT / SVT Play",
    seasons: "Att bekräfta",
    years: "2021",
    yearSort: 2021,
    genres: ["True crime", "Documentary"],
    summary: {
      sv: "True crime-dokumentär med plats, minne och utredning som bärande redaktionella delar.",
      en: "True crime documentary with place, memory and investigation as central editorial elements."
    },
    description: {
      sv: "Den exklusiva Discovery-dokumentären Rönnäsfallet – Jakten på sanningen avslöjar nya bevis i det uppmärksammade Rönnäsmålet, bevis som kan fria Lars Appelvik, som många anser blev felaktigt dömd. Serien följer advokat Marko Tuhkanen, kriminalinspektör Bo Åström och professor Minna Gräns, och blottlägger kritiska brister i utredningen och ifrågasätter grunden för Appelviks dom. Med rekonstruktioner av brottsplatsen och nya infallsvinklar ger Rönnäsfallet en medryckande bild av jakten på rättvisa i ett av Sveriges mest omdiskuterade fall.",
      en: "The exclusive Discovery documentary Rönnäsfallet – The Quest for Truth reveals new evidence in the notorious Rönnäs assault case, potentially clearing Lars Appelvik, who many believe was wrongfully convicted. Following attorney Marko Tuhkanen, detective Bo Åström, and professor Minna Gräns, the series exposes critical flaws in the investigation and challenges the foundation of Appelvik's sentence. With crime scene reconstructions and fresh insights, Rönnäsfallet offers a gripping look into the search for justice in one of Sweden's most controversial cases."
    },
    artwork: productionArtwork("ronnasfallet", "Rönnäsfallet"),
    stills: ["Miljöbild", "Arkivmaterial", "Intervju"]
  },
  {
    slug: "bra-surr",
    title: "Bra surr",
    channel: "YouTube / social platforms",
    seasons: "Att bekräfta",
    years: "-",
    yearSort: 0,
    genres: ["Social journalism", "Documentary"],
    summary: {
      sv: "Samtalsdrivet format med social närvaro och lättare ton, byggt för public service-miljö.",
      en: "Conversation-led format with social presence and a lighter tone, built for a public service context."
    },
    description: {
      sv: "Ett ofiltrerat diskussionsprogram där Reine-Alix Ndengeyinka möter orädda unga och tar upp de frågor som betyder mest för dagens ungdomar.",
      en: "An unfiltered discussion show where Reine-Alix Ndengeyinka engages with fearless young people, diving into the issues that matter most to today's youth."
    },
    artwork: productionArtwork("bra-surr", "Bra surr"),
    stills: ["Samtal", "Deltagare", "Miljö"]
  },
  {
    slug: "kvartsamtalet",
    title: "Kvartsamtalet",
    channel: "Podcast platforms (Spotify, Apple Podcasts)",
    seasons: "Att bekräfta",
    years: "-",
    yearSort: 0,
    genres: ["Social journalism", "Documentary"],
    summary: {
      sv: "Kortare samtalsformat med fokus på tydlig redaktionell inramning och närvarande ton.",
      en: "Short conversation format focused on clear editorial framing and an attentive tone."
    },
    description: {
      sv: "Kvartsamtalet är en tankeväckande intervjuserie på SVT Play, ledd av Parisa Amiri under de två första säsongerna och av Assia Dahir i den tredje. I varje 15-minutersavsnitt delar kändisar som Bianca Ingrosso, Carl Bildt och Niklas Strömstedt med sig av öppenhjärtiga reflektioner och samtalar om allt från personliga ångerstunder till avgörande ögonblick i karriären.",
      en: "Kvartsamtalet is a thought-provoking interview series on SVT Play, hosted by Parisa Amiri in its first two seasons and Assia Dahir in the third. In each 15-minute episode, celebrities like Bianca Ingrosso, Carl Bildt, and Niklas Strömstedt share candid insights, discussing everything from personal regrets to career-defining moments."
    },
    artwork: productionArtwork("kvartsamtalet", "Kvartsamtalet"),
    stills: ["Studio/samtal", "Närbild", "Miljö"]
  },
  {
    slug: "spotify-dokumentara-poddar",
    title: "Spotify dok",
    channel: "Spotify",
    seasons: "Flera serier",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "True crime", "Documentary"],
    summary: {
      sv: "Ljudproduktion inom dokumentär och true crime, inklusive internationellt gångbara ämnesvärldar.",
      en: "Audio production across documentary and true crime, including internationally legible subject worlds."
    },
    description: {
      sv: "Spotify Dok samlar Sveriges mest kraftfulla dokumentärer och bjuder på berättelser du aldrig hört förut—eller aldrig hört berättas på det här sättet. Från medryckande true crime-serier till fristående dokumentärer om aktuella ämnen är allt samlat och utvalt åt dig på en och samma plattform.",
      en: "Spotify Dok brings together Sweden's most powerful documentaries, offering stories you've never heard before—or heard in this way. From gripping true crime series to standalone documentaries on pressing topics, it's all curated for you under one platform."
    },
    participants: "Titlar och medverkande ska specificeras per serie.",
    artwork: productionArtwork("spotify-dokumentara-poddar", "Spotify dok"),
    stills: ["Podcastomslag", "Studiosituation", "Researchmaterial"]
  },
  {
    slug: "seriemordare",
    title: "Seriemördare",
    channel: "Spotify",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "True crime", "Documentary"],
    summary: {
      sv: "Dokumentär podcastserie inom true crime, att komplettera med verifierad säsongs- och avsnittsdata.",
      en: "Documentary true crime podcast series, to be completed with verified season and episode data."
    },
    description: {
      sv: "I den medryckande podcasten dyker journalisten Irena Požar tillsammans med en expert ner i de kusliga livsöden som präglar några av världens mest ökända seriemördare. Berättad av Samuel Fröler utforskar serien deras tillvägagångssätt, offer och de mörka teman som ligger bakom brotten, däribland kannibalism, rasism och begär.",
      en: "In this gripping podcast, journalist Irena Požar, alongside an expert, delves into the chilling lives of some of the world's most notorious serial killers. Narrated by Samuel Fröler, the series explores their methods, victims, and the dark themes behind their crimes, including cannibalism, racism, and desire."
    },
    statusNote: {
      sv: "Avsnitt, år och omslagsmaterial ska verifieras.",
      en: "Episodes, years and cover material should be verified."
    },
    artwork: productionArtwork("seriemordare", "Seriemördare"),
    stills: ["Podcastomslag", "Researchmaterial", "Studiosituation"]
  },
  {
    slug: "sekter",
    title: "Sekter",
    channel: "Spotify",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "True crime", "Documentary"],
    summary: {
      sv: "Dokumentär podcastserie med ämnesvärld som kräver research, tonkontroll och tydlig faktahantering.",
      en: "Documentary podcast series in a subject area requiring research, tonal control and clear fact handling."
    },
    description: {
      sv: "I den fängslande podcasten utforskar programledaren Soraya Hashim tillsammans med en expert sekternas mörka och intressanta värld, och undersöker både ökända och mindre kända rörelser i Sverige och runt om i världen. Berättad av Emil Hedayat går varje avsnitt in på manipulationen, maktdynamiken och den underliggande längtan efter samhörighet som driver dessa grupper, med målet att förstå vad som lockar anhängare och vad som definierar en sekt.",
      en: "In this fascinating podcast, host Soraya Hashim, alongside an expert, explores the dark and intriguing world of cults, examining notorious and lesser-known movements both in Sweden and around the globe. Narrated by Emil Hedayat, each episode delves into the manipulation, power dynamics, and the underlying longing for belonging that drive these groups, seeking to understand what attracts followers and defines a cult."
    },
    statusNote: {
      sv: "Beskrivning och metadata ska verifieras.",
      en: "Description and metadata should be verified."
    },
    artwork: productionArtwork("sekter", "Sekter"),
    stills: ["Podcastomslag", "Research", "Ljudproduktion"]
  },
  {
    slug: "minnet",
    title: "Minnet",
    channel: "YouTube / social platforms",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "Documentary"],
    summary: {
      sv: "Podcasttitel att komplettera med verifierad plattform, publiceringsår och redaktionell beskrivning.",
      en: "Podcast title to be completed with verified platform, publishing years and editorial description."
    },
    description: {
      sv: "I Minnet utforskar minnesmästaren Yänjaa Wintersoul, som har vunnit VM-medaljer och satt flera världsrekord i minnesteknik, den mänskliga hjärnans fascinerande komplexitet. Varje vecka behandlar hon ämnen som traumatiska minnen, demens, ADHD och de mentala processer som formar vilka vi är, och får unika insikter genom sina gästers erfarenheter.",
      en: "In Minnet, memory champion Yänjaa Wintersoul, who has won World Championship medals and set multiple world records in memory, delves into the fascinating complexities of the human brain. Each week, she explores topics such as traumatic memories, dementia, ADHD, and the mental processes that shape who we are, gaining unique insights from her guests' experiences."
    },
    statusNote: {
      sv: "Plattform, avsnitt och beskrivning ska bekräftas.",
      en: "Platform, episodes and description should be confirmed."
    },
    artwork: productionArtwork("minnet", "Minnet"),
    stills: ["Podcastomslag", "Studio", "Researchmaterial"]
  },
  {
    slug: "diktatorer",
    title: "Diktatorer",
    channel: "Spotify",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "Documentary"],
    summary: {
      sv: "Dokumentär podcastserie med historisk och samhällsorienterad ämnesvärld.",
      en: "Documentary podcast series with a historical and society-focused subject area."
    },
    description: {
      sv: "I Diktatorer går programledaren Parisa Amiri på djupet med tyrannerna som format världshistorien, och utforskar deras motiv, egenheter och det förödande avtryck deras styre lämnat. Med hjälp av experter reder hon ut frågor som varför Idi Amin undvek människokött, omfattningen av Stalins paranoia och de våldsamma händelserna under Maos kulturrevolution, och ger perspektiv på det förflutna, nutiden och framtiden.",
      en: "In Diktatorer, host Parisa Amiri takes a deep dive into the lives of the tyrants who shaped world history, exploring their motives, quirks, and the devastating impacts of their rule. With the help of experts, she unravels questions such as why Idi Amin shunned human flesh, the extent of Stalin's paranoia, and the violent events of Mao's Cultural Revolution, offering insights into the past, present, and future."
    },
    statusNote: {
      sv: "Avsnittslista, år och medverkande ska verifieras.",
      en: "Episode list, years and participants should be verified."
    },
    artwork: productionArtwork("diktatorer", "Diktatorer"),
    stills: ["Podcastomslag", "Manusarbete", "Research"]
  },
  {
    slug: "dagens-sport",
    title: "Dagens sport",
    channel: "TV4 / TV4 Play",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "Factual entertainment"],
    summary: {
      sv: "Sportrelaterad podcasttitel att komplettera med plattform, format och publiceringsdata.",
      en: "Sports-related podcast title to be completed with platform, format and publishing data."
    },
    description: {
      sv: "Dagens Sport är en podcast som lyfter fram betydelsefulla händelser ur idrottshistorien som inträffat på dagens datum, med en ny idrottsstjärna eller profil som berättare varje vecka. Från stora segrar och tävlingar till berättelser om pionjärer, innovationer och oväntade bedrifter ger serien ett nytt perspektiv på de ögonblick som format och förändrat idrottsvärlden.",
      en: "Dagens Sport is a podcast that highlights significant events from sports history that occurred on each day's date, featuring a new sports star or profile as the narrator each week. From major victories and competitions to stories of pioneers, innovations, and unexpected achievements, the series offers a fresh perspective on the moments that have shaped and transformed the world of sports."
    },
    statusNote: {
      sv: "Format, plattform och publiceringsdata ska bekräftas.",
      en: "Format, platform and publishing data should be confirmed."
    },
    artwork: productionArtwork("dagens-sport", "Dagens sport"),
    stills: ["Podcastomslag", "Studio", "Formatbild"]
  },
  {
    slug: "trevligt-snack",
    title: "Trevligt snack",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "Factual entertainment"],
    summary: {
      sv: "Samtalsdriven podcasttitel, att komplettera med verifierad plattform och formatbeskrivning.",
      en: "Conversation-led podcast title, to be completed with verified platform and format description."
    },
    description: {
      sv: "I Trevligt snack möter vi framgångsrika ledare från en rad olika branscher, från hundtränare till fotbollstränare och poliser, för att upptäcka vad vi kan lära oss av deras unika sätt att leda. Följ med på resan för konkreta verktyg, tips och inspiration som hjälper dig att utveckla ditt eget ledarskap—det blir trevligt, vi lovar!",
      en: "In Trevligt snack, we meet successful leaders from a wide range of industries, from dog trainers to football coaches and police officers, to discover what we can learn from their unique approaches to leadership. Join us on this journey for practical tools, tips, and inspiration to help develop your own leadership skills—it's going to be enjoyable, we promise!"
    },
    statusNote: {
      sv: "Programbeskrivning och metadata ska verifieras.",
      en: "Programme description and metadata should be verified."
    },
    artwork: productionArtwork("trevligt-snack", "Trevligt snack"),
    stills: ["Podcastomslag", "Samtal", "Studio"]
  },
  {
    slug: "zeinas-hogtidsmat",
    title: "Zeinas högtidsmat",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 2019,
    genres: ["Podcast", "Factual entertainment"],
    summary: {
      sv: "Mat- och högtidsrelaterad podcasttitel att komplettera med plattform, format och medverkande.",
      en: "Food and holiday-related podcast title to be completed with platform, format and participants."
    },
    description: {
      sv: "I Zeinas högtidsmat öppnar matbloggaren och kocken Zeina Mourtada en kulturell \"smakdörr\" varje dag i december, fram till julafton. Tillsammans med sina gäster utforskar Zeina historien och den kulturella betydelsen bakom högtidsrätter från hela världen, och bjuder på allt från plumpudding till dolma, kryddat med läckra anekdoter och smaktips.",
      en: "In Zeinas högtidsmat, food blogger and chef Zeina Mourtada opens a cultural \"flavor door\" each day throughout December, leading up to Christmas Eve. Along with her guests, Zeina explores the history and cultural significance of holiday dishes from around the world, sharing everything from plum pudding to dolma, while offering delicious anecdotes and flavor tips."
    },
    statusNote: {
      sv: "Plattform, format och rättigheter ska bekräftas.",
      en: "Platform, format and rights should be confirmed."
    },
    artwork: productionArtwork("zeinas-hogtidsmat", "Zeinas högtidsmat"),
    stills: ["Podcastomslag", "Matmiljö", "Studio"]
  },
  {
    slug: "roret",
    title: "Röret",
    channel: "YouTube / social platforms",
    seasons: "Att bekräfta",
    years: "-",
    yearSort: 0,
    genres: ["Documentary", "Social journalism"],
    summary: {
      sv: "Produktion att komplettera med verifierat årtal, säsonger och redaktionell beskrivning.",
      en: "Production to be completed with verified years, seasons and editorial description."
    },
    description: {
      sv: "I den äventyrliga serien tar sig de nyfikna barnen Greta och Tamara an de stora frågor som femåringar ofta funderar på, från vart bajset tar vägen när man spolar till varför glassen smälter på sommaren. Med hjälp av sin modiga och kloka vän, björnen Sylvester, ger de sig ut på resor genom nya världar för att hitta svaren på dessa spännande mysterier.",
      en: "In this adventurous series, curious children Greta and Tamara tackle big questions that five-year-olds often wonder about, from where the poop goes when you flush to why ice cream melts in the summer. With the help of their brave and wise friend, Sylvester the bear, they journey through new worlds to uncover the answers to these fascinating mysteries."
    },
    statusNote: {
      sv: "Metadata och beskrivning behöver verifieras mot produktionsarkiv.",
      en: "Metadata and description need verification against the production archive."
    },
    artwork: productionArtwork("roret", "Röret"),
    stills: ["Miljöbild", "Medverkande", "Arkivbild"]
  },
  {
    slug: "fangar-pa-polisens-kamera",
    title: "Fångar på polisens kamera",
    channel: "TV4 / TV4 Play",
    seasons: "Att bekräfta",
    years: "2023",
    yearSort: 2023,
    genres: ["Factual entertainment", "Documentary"],
    summary: {
      sv: "Faktabaserad produktion kopplad till polisarbete och kameramaterial, med metadata att verifiera.",
      en: "Factual production connected to police work and camera material, with metadata to verify."
    },
    description: {
      sv: "Caught on the Police Camera är ett tv-program som visar dramatiska och intensiva situationer från verkliga polisingripanden, fångade av övervakningskameror, kroppskameror och andra inspelningsenheter. Programmet ger en inblick i polisens vardag och hur de hanterar brott, farliga situationer och ibland oväntade händelser.",
      en: "Caught on the Police Camera is a television program that shows dramatic and intense situations from real police interventions, captured on surveillance cameras, body cameras and other recording devices. The program gives an insight into the everyday life of the police and how they deal with crime, dangerous situations and sometimes unexpected events."
    },
    statusNote: {
      sv: "Säsonger, rättigheter och programbeskrivning ska bekräftas.",
      en: "Seasons, rights and programme description should be confirmed."
    },
    artwork: productionArtwork("fangar-pa-polisens-kamera", "Fångar på polisens kamera"),
    stills: ["Polismiljö", "Kameramaterial", "Intervju"]
  },
  {
    slug: "norrlandspolisen",
    title: "Norrlandspolisen",
    channel: "Att bekräfta",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 0,
    genres: ["Factual entertainment", "Documentary"],
    summary: {
      sv: "Faktaserie kopplad till polisarbete i norrländska miljöer, med metadata att verifiera.",
      en: "Factual series connected to police work in northern Swedish environments, with metadata to verify."
    },
    description: {
      sv: "Norrlandspolisen följer några av de 600 poliser som tjänstgör i de tuffa norrländska orterna Piteå, Luleå, Umeå, Sundsvall och Östersund. Poliserna hanterar allt från vapenbrott och narkotikahandel till tjuvjakt och storskaliga sökinsatser, och tar tittarna rakt in i händelserna. Den spännande serien visar det mod och den uthållighet som krävs för att upprätthålla lagen i Sveriges vidsträckta och utmanande norrländska miljöer.",
      en: "The Norrland Police follows some of the 600 officers serving in the rugged northern towns of Piteå, Luleå, Umeå, Sundsvall, and Östersund. These officers tackle everything from weapons offenses and drug trafficking to poaching and large-scale search missions, bringing viewers directly into the action. This thrilling series showcases the bravery and resilience needed to uphold the law in Sweden's vast and challenging northern landscapes."
    },
    statusNote: {
      sv: "Kanal, år, säsonger och programbeskrivning ska verifieras.",
      en: "Channel, years, seasons and programme description should be verified."
    },
    artwork: productionArtwork("norrlandspolisen", "Norrlandspolisen"),
    stills: ["Polismiljö", "Medverkande", "Operativ vardag"]
  },
  {
    slug: "stockholmspolisen",
    title: "Stockholmspolisen",
    channel: "Att bekräfta",
    seasons: "Att bekräfta",
    years: "Att bekräfta",
    yearSort: 0,
    genres: ["Factual entertainment", "Documentary"],
    summary: {
      sv: "Faktaserie om polisarbete i Stockholmsmiljö, med fakta och kanaldata att komplettera.",
      en: "Factual series about police work in Stockholm environments, with facts and channel data to complete."
    },
    description: {
      sv: "Stockholm Police ger en ofiltrerad inblick i de dagliga utmaningar som polisen möter när de hanterar gängbrottslighet, hemlöshet, narkotikaproblem och växande sociala problem. Den medryckande serien följer Stockholms poliser när de rycker ut på akuta larm—från olyckor till misshandel och skjutningar—och fångar intensiteten och oförutsägbarheten i arbetet i frontlinjen. Varje avsnitt ger en stark inblick i det engagemang och det mod som krävs för att skydda staden och dess invånare. Med verkligt drama och kritiska ögonblick är Stockholm Police ett måste för den som vill uppleva pulsen i stadens mest akuta utmaningar.",
      en: "Stockholm Police offers an unfiltered look into the daily challenges faced by the police as they tackle gang crime, homelessness, drug issues, and escalating social problems. This gripping series follows Stockholm's officers as they respond to urgent calls—from accidents to assaults and even shootings—capturing the intensity and unpredictability of life on the front lines. Each episode provides a powerful glimpse into the dedication and bravery required to protect the city and its residents. With real-life drama and high-stakes moments, Stockholm Police is a must-watch for those who want to experience the pulse of the city's most pressing challenges."
    },
    statusNote: {
      sv: "Kanal, år, säsonger och programbeskrivning ska verifieras.",
      en: "Channel, years, seasons and programme description should be verified."
    },
    artwork: productionArtwork("stockholmspolisen", "Stockholmspolisen"),
    stills: ["Polismiljö", "Medverkande", "Operativ situation"]
  },
  {
    slug: "tunnelbanan",
    title: "Tunnelbanan",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "2012",
    yearSort: 2012,
    genres: ["Factual entertainment", "Reality"],
    summary: {
      sv: "Faktaserie i kollektivtrafikmiljö där ordning, service och vardagliga konflikter möter publikt intresse.",
      en: "Factual series in a public transport environment where order, service and everyday conflict meet public interest."
    },
    description: {
      sv: "Tunnelbanan ger tittarna en sällsynt inblick i det dagliga arbetet med att hålla Stockholms kollektivtrafik säker. Serien följer SL:s säkerhetsteam—inklusive väktare, volontärer och tunnelbanepolis—när de övervakar stationer och ingriper vid incidenter i realtid. Med en blandning av kritiska ingripanden och samordnade insatser fångar Tunnelbanan det intensiva arbetet bakom kulisserna som krävs för att upprätthålla ordningen, och ger spännande inblickar i den viktiga driften av Stockholms kollektivtrafik.",
      en: "Tunnelbanan gives viewers a rare glimpse into the daily efforts to keep Stockholm's transit system safe. The series follows SL's security team—including guards, volunteers, and subway police—as they monitor stations through surveillance and respond to incidents in real time. With a mix of high-stakes interventions and coordinated responses, Subway captures the intense, behind-the-scenes work needed to maintain order, offering suspenseful insights into the vital operations of Stockholm's public transit."
    },
    statusNote: {
      sv: "Säsonger, kanalhistorik och godkända stills ska bekräftas.",
      en: "Seasons, channel history and approved stills should be confirmed."
    },
    artwork: productionArtwork("tunnelbanan", "Tunnelbanan"),
    stills: ["Stationsmiljö", "Personal", "Operativ situation"]
  },
  {
    slug: "havets-hjaltar",
    title: "Havets hjältar",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "2019",
    yearSort: 2019,
    genres: ["Factual entertainment", "Documentary"],
    summary: {
      sv: "Faktaserie med sjöräddning, kustmiljö och operativa insatser som kärna.",
      en: "Factual series centred on sea rescue, coastal environments and operational response."
    },
    description: {
      sv: "Havets Hjältar tar med tittarna på en spännande resa tillsammans med 60 sjöpoliser som patrullerar de vackra men oförutsägbara skärgårdarna kring Stockholm och Göteborg. Serien följer även hängivna frivilliga från Sjöräddningssällskapet, som alltid är beredda att rycka ut när lugna vatten plötsligt blir farliga. Vare sig det handlar om nödsituationer, olyckor eller brottsplatser riskerar dessa modiga män och kvinnor allt för att hålla Sveriges vatten säkra. Varje avsnitt tar tittarna närmare händelsernas centrum och visar det mod och den uthållighet som krävs för att möta det oväntade till havs. Följ med in i Havets Hjältars värld och bevittna verkliga hjältedåd på Sveriges stora vatten.",
      en: "Havets Hjältar takes viewers on a thrilling journey with 60 marine police officers patrolling the stunning yet unpredictable archipelagos of Stockholm and Gothenburg. The series also follows dedicated volunteers from the Swedish Sea Rescue Society, who are always ready to lend a helping hand when calm waters turn treacherous. Whether responding to emergencies, accidents, or even crime scenes, these brave men and women risk it all to keep Sweden's waters safe. Each episode brings viewers closer to the action, showcasing the courage and resilience required to face the unexpected at sea. Dive into the captivating world of Havets Hjältar and witness true acts of heroism on Sweden's vast waters."
    },
    statusNote: {
      sv: "Säsongsinformation och bildmaterial ska bekräftas.",
      en: "Season information and imagery should be confirmed."
    },
    artwork: productionArtwork("havets-hjaltar", "Havets hjältar"),
    stills: ["Båt/sjöräddning", "Kustmiljö", "Insats"]
  },
  {
    slug: "johanna-moller",
    title: "Johanna Möller",
    channel: "TV4 / TV4 Play",
    seasons: "Att bekräfta",
    years: "2021",
    yearSort: 2021,
    genres: ["True crime", "Documentary"],
    summary: {
      sv: "True crime-produktion där fakta, ton och hänsyn behöver vara vägledande.",
      en: "True crime production where facts, tone and care need to lead the presentation."
    },
    description: {
      sv: "År 2016 inträffade ett av Sveriges mest uppmärksammade mord, det så kallade \"sommarstugemordet\". Offrets dotter, Johanna Möller, blir känd som \"Arbogakvinnan\" och döms till livstids fängelse för att ha varit hjärnan bakom dådet som hon fick sin pojkvän att utföra. Johanna Möller fälls utan teknisk bevisning och domen grundar sig på medmisstänkta Mohammad Rajabis vittnesmål.",
      en: "In 2016, one of Sweden's most high-profile murders took place, the so-called \"Summer cottage murder\". The victim's daughter, Johanna Möller, becomes known as the \"Arboga woman\" and is sentenced to life imprisonment for being the mastermind behind the act that she made her boyfriend carry out. Johanna Möller is convicted without technical evidence and the verdict is based on the testimony of co-suspect Mohammad Rajabi."
    },
    statusNote: {
      sv: "Fakta, rättigheter och formuleringar behöver redaktionell kontroll.",
      en: "Facts, rights and wording need editorial review."
    },
    artwork: productionArtwork("johanna-moller", "Johanna Möller"),
    stills: ["Arkivmaterial", "Intervju", "Miljöbild"]
  },
  {
    slug: "det-stora-tartslaget",
    title: "Det stora tårtslaget",
    channel: "Kanal 5 / Discovery+ (Max)",
    seasons: "Att bekräfta",
    years: "2014",
    yearSort: 2014,
    genres: ["Factual entertainment", "Reality"],
    summary: {
      sv: "Underhållningsformat med tävlings- eller deltagardriven struktur, att komplettera med verifierade fakta.",
      en: "Entertainment format with a competition or participant-led structure, to be completed with verified facts."
    },
    description: {
      sv: "I Det stora tårtslaget tävlar nio deltagare med en gemensam passion för tårtdesign för att bevisa att de har vad som krävs för att bli bäst. Varje vecka utmanas de att skapa imponerande tårtor utifrån ett nytt tema, samtidigt som de tar sig an kluriga tekniska tester i dekoration och design. Med kreativitet, skicklighet och nerver på spel är Det stora tårtslaget en spännande resa in i tårtkonstens värld, där bara de mest imponerande skapelserna når toppen!",
      en: "In Det stora tårtslaget, nine contestants with a shared passion for cake design compete to prove they have what it takes to be the best. Each week, they're challenged to create stunning cakes based on a new theme, all while tackling tricky technical tests in decoration and design. With creativity, skill, and nerves on the line, Det stora tårtslaget is a thrilling journey into the world of cake artistry, where only the most impressive creations will rise to the top!"
    },
    statusNote: {
      sv: "Formatdata och sändningsinformation ska bekräftas.",
      en: "Format data and broadcast information should be confirmed."
    },
    artwork: productionArtwork("det-stora-tartslaget", "Det stora tårtslaget"),
    stills: ["Tävlingsmoment", "Deltagare", "Miljö"]
  },
  {
    slug: "sommaren-i-grums",
    title: "Sommaren i Grums",
    channel: "SVT / SVT Play",
    seasons: "Att bekräfta",
    years: "2024",
    yearSort: 2024,
    genres: ["Documentary", "Social journalism"],
    summary: {
      sv: "Person- eller platsdriven produktion med social och dokumentär ton, att komplettera med arkivdata.",
      en: "Character or place-led production with a social and documentary tone, to be completed with archive data."
    },
    description: {
      sv: "I sommar tar radioprofilen Hanna Hellquist klivet in i tv-rutan med sitt nya program Sommar i Grums. Tillsammans med kändisgäster ger sig Hanna i kast med en stor utmaning: att förvandla trädgården på familjens älskade gård. Följ med Hanna när hon tar hjälp av artisten Oscar Zia, kriminalförfattaren Malin Persson Giolito, hennes På spåret-kollega Ina Lundström, samt Jonatan Unge och Little Jinder. Med oväntad humor, hårt arbete och livligt sällskap blir Sommar i Grums ett varmt och underhållande äventyr på den svenska landsbygden.",
      en: "This summer, radio personality Hanna Hellquist brings a fresh twist to TV with her new show Summer in Grums. Teaming up with celebrity guests, Hanna tackles the ultimate challenge: transforming the garden on her family's beloved farm. Join Hanna as she enlists the help of singer Oscar Zia, crime novelist Malin Persson Giolito, her På spåret partner Ina Lundström, along with Jonatan Unge and Little Jinder. With unexpected humor, hard work, and lively company, Summer in Grums promises to be a heartwarming and entertaining adventure in rural Sweden."
    },
    statusNote: {
      sv: "Beskrivning och metadata ska verifieras.",
      en: "Description and metadata should be verified."
    },
    artwork: productionArtwork("sommaren-i-grums", "Sommaren i Grums"),
    stills: ["Platsbild", "Medverkande", "Vardagsmiljö"]
  },
  {
    slug: "vara-tonaringar",
    title: "Våra tonåringar",
    channel: "SVT / SVT Play",
    seasons: "Att bekräfta",
    years: "2025",
    yearSort: 2025,
    genres: ["Social journalism", "Documentary"],
    summary: {
      sv: "Socialt orienterad produktion om unga, familj eller vardag, med känslig deltagarhantering.",
      en: "Socially oriented production about young people, family or everyday life, with sensitive participant handling."
    },
    description: {
      sv: "Våra tonåringar är en svensk serie som ger värdefulla insikter för föräldrar som navigerar utmaningarna med att uppfostra tonåringar. Serien innehåller expertråd från yrkesverksamma som psykologen Johannes Hatem och medverkan av kändisar som rapparen Cleo och tv-profilen Hans Wiklund. Programmet behandlar ämnen som beteendeförändring, stöd för skolframgång och hur man undviker vanliga fallgropar i kommunikationen med tonåringar.",
      en: "Våra tonåringar is a Swedish series offering invaluable insights for parents navigating the challenges of raising teenagers, featuring expert advice from professionals like psychologist Johannes Hatem and appearances from celebrities such as rapper Cleo and TV host Hans Wiklund. The show explores topics like behavior change, supporting academic success, and avoiding common pitfalls in communication with teens."
    },
    statusNote: {
      sv: "Deltagarhantering, rättigheter och fakta ska kontrolleras före publicering.",
      en: "Participant handling, rights and facts should be checked before publication."
    },
    artwork: productionArtwork("vara-tonaringar", "Våra tonåringar"),
    stills: ["Familjemiljö", "Samtal", "Vardagsbild"]
  },
  {
    slug: "mamma-jimmy-guo",
    title: "Mamma & Jimmy Guo",
    channel: "SVT / SVT Play",
    seasons: "Att bekräfta",
    years: "2023",
    yearSort: 2023,
    genres: ["Documentary", "Social journalism"],
    summary: {
      sv: "Persondriven dokumentär eller faktaproduktion, att komplettera med verifierad redaktionell information.",
      en: "Character-led documentary or factual production, to be completed with verified editorial information."
    },
    description: {
      sv: "I kinesisk kultur är mat mycket mer än näring—det är ett firande av glädje, kultur och kärlek. I den här serien bjuder kocken Jimmy Guo och hans mamma in tittarna i sin värld och delar med sig av de rika traditionerna och smakerna från sitt kulinariska arv.",
      en: "In Chinese culture, food is much more than sustenance—it's a celebration of joy, culture, and love. In this series, chef Jimmy Guo and his mother invite viewers into their world, sharing the rich traditions and flavors of their culinary heritage."
    },
    statusNote: {
      sv: "Format, säsong och medverkande ska bekräftas.",
      en: "Format, season and participants should be confirmed."
    },
    artwork: productionArtwork("mamma-jimmy-guo", "Mamma & Jimmy Guo"),
    stills: ["Porträtt", "Samtal", "Miljöbild"]
  }
];

export const contacts: ContactRole[] = [
  {
    role: { sv: "VD", en: "CEO" },
    name: "Namn att bekräfta",
    email: "ceo@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Övergripande bolagsansvar, strategiska samarbeten och större kundrelationer.",
      en: "Company leadership, strategic partnerships and senior client relationships."
    }
  },
  {
    role: { sv: "Executive Producer", en: "Executive Producer" },
    name: "Namn att bekräfta",
    email: "executiveproducer@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Broadcasterdialog, produktionell kvalitet och genomförande av större serier.",
      en: "Broadcaster dialogue, production quality and delivery of major series."
    }
  },
  {
    role: { sv: "Utvecklingschef", en: "Head of Development" },
    name: "Namn att bekräfta",
    email: "development@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Formatutveckling, pitchar, research och tidig beställardialog.",
      en: "Format development, pitches, research and early commissioner dialogue."
    }
  },
  {
    role: { sv: "Produktionschef", en: "Production Manager" },
    name: "Namn att bekräfta",
    email: "production@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Planering, bemanning, inspelningslogistik, arbetsmiljö och leveransrutiner.",
      en: "Planning, staffing, shoot logistics, workplace safety and delivery routines."
    }
  },
  {
    role: { sv: "Ansvarig uppdragsproduktion", en: "Head of Commissioned Work" },
    name: "Namn att bekräfta",
    email: "commissioned@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Film, podcast och redaktionell kommunikation för företag och offentliga aktörer.",
      en: "Film, podcast and editorial communication for companies and public bodies."
    }
  },
  {
    role: { sv: "Presskontakt", en: "Press Contact" },
    name: "Namn att bekräfta",
    email: "press@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Pressbilder, intervjuer, nomineringar, prisinformation och branschförfrågningar.",
      en: "Press images, interviews, nominations, awards information and trade enquiries."
    }
  },
  {
    role: { sv: "Jobbansökningar", en: "Job applications" },
    name: "Namn att bekräfta",
    email: "ansokan@alaskafilmtv.com",
    phone: "+46 XX XXX XX XX",
    bio: {
      sv: "Skicka CV, portfolio och spontanansökningar till denna adress.",
      en: "Send CVs, portfolios and speculative applications to this address."
    }
  }
];

export function productionPath(production: Production, locale: Locale) {
  return locale === "sv"
    ? `/produktioner/${production.slug}`
    : `/en/productions/${production.slug}`;
}

export function productionBucketId(production: Production): ProductionBucketId {
  if (production.genres.includes("Podcast")) return "podcasts";
  if (production.genres.includes("True crime")) return "true-crime";
  return "factual";
}

export function getProductionsByBucket() {
  return productionBuckets.map((bucket) => ({
    ...bucket,
    items: productions.filter((production) => productionBucketId(production) === bucket.id)
  }));
}

export function allGenres() {
  return Array.from(new Set(productions.flatMap((production) => production.genres))).sort();
}

export function allChannels() {
  return Array.from(new Set(productions.map((production) => production.channel))).sort();
}

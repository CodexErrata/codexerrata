export const alaskaSite = {
  name: "Alaska Film & TV",
  legalName: "Alaska Film & TV AB",
  url: "https://www.alaskafilmtv.com",
  address: "Stockholm, Sverige",
  email: "info@alaskafilmtv.com",
  jobApplicationsEmail: "ansokan@alaskafilmtv.com",
  accent: "#5b5f43",
  socials: {
    instagram: "https://www.instagram.com/alaskafilmtv/",
    facebook: "https://www.facebook.com/alaskafilmtv/"
  }
};

export type ProductionStat = {
  label: string;
  value: number;
  suffix?: string;
};

export type ProductionBucketId = "factual" | "true-crime" | "podcasts";

export type Production = {
  slug: string;
  title: string;
  year?: string;
  category?: string;
  broadcaster?: string;
  image: string;
  cardImage?: string;
  description?: string;
  stats?: ProductionStat[];
  gallery?: string[];
};

export type ContactRole = {
  role: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
};

export const productions: Production[] = [
  {
    slug: "gransbevakarna-sverige",
    title: "Gränsbevakarna Sverige",
    year: "2022",
    category: "Factual entertainment",
    broadcaster: "Kanal 5 / Discovery+",
    image: "/productions/gransbevakarna-sverige.jpg",
    cardImage: "/productions/gransbevakarna-sverige-card.jpg",
    description:
      "Gränsbevakarna Sverige is a captivating documentary series that takes viewers behind the scenes at border control stations where customs officers and police work to protect the country's borders. The series shows how these officers deal with everything from smuggling and illegal activities to checking in and out passengers, revealing both the exciting and challenging aspects of their profession. Gränsbevakarna has become a major success and an international hit, airing worldwide to captivated audiences. In 2024, it won the prestigious Kristallen Award for Best Reality Series, Sweden's equivalent of the American Emmy Award.",
    stats: [
      { label: "Seasons", value: 4 },
      { label: "Episodes", value: 48 },
      { label: "Award", value: 1 }
    ],
    gallery: ["/productions/tunnelbanan.jpg", "/productions/havets-hjaltar.jpg"]
  },
  {
    slug: "svenska-truckers",
    title: "Svenska Truckers",
    year: "2020",
    category: "Reality",
    broadcaster: "TV3 / Viaplay",
    image: "/productions/svenska-truckers.jpg",
    cardImage: "/productions/svenska-truckers-card.jpg",
    description:
      "Svenska Truckers is a realistic series that follows the daily adventures of truck drivers on the road, where they navigate tough routes and manage deliveries under strict deadlines. The program provides a unique insight into the world of truck drivers, from the long, lonely hours on the open road to their skill in handling large vehicles in complex situations. Svenska Truckers has won the prestigious Kristallen Award for Sweden's Best Reality Series and has received three additional nominations, solidifying its status as a standout in Swedish reality television.",
    stats: [
      { label: "Seasons", value: 5 },
      { label: "Episodes", value: 42 },
      { label: "Nominations", value: 4 }
    ],
    gallery: ["/productions/vagens-hjaltar.jpg", "/productions/gruvan.jpg"]
  },
  {
    slug: "efterlyst",
    title: "Efterlyst",
    year: "1990",
    category: "True crime",
    broadcaster: "TV3 / Viaplay",
    image: "/productions/efterlyst.avif",
    cardImage: "/productions/efterlyst-card.jpg",
    description:
      "Efterlyst takes viewers straight into the heart of Sweden's most shocking criminal cases, where the police and the public work together to solve cold cases and capture wanted criminals. Airing for over 30 years, Efterlyst is a flagship production and a true prestige project, having earned eight nominations for the Kristallen Award—the Swedish equivalent of an Emmy. Alaska has been specially chosen among production companies in Sweden as the trusted partner to produce this program year after year. The program combines raw facts with authentic reconstructions to portray the ongoing quest for justice.",
    stats: [
      { label: "Years", value: 30, suffix: "+" },
      { label: "Seasons", value: 13 },
      { label: "Nominations", value: 8 }
    ],
    gallery: ["/productions/johanna-moller.jpg", "/productions/ronnasfallet.jpg"]
  },
  {
    slug: "gruvan",
    title: "Gruvan",
    year: "2023",
    category: "Documentary",
    broadcaster: "SVT / SVT Play",
    image: "/productions/gruvan.jpg",
    cardImage: "/productions/gruvan-card.jpg",
    description:
      "Deep beneath the mountains of northern Sweden, a hidden world comes alive. Gruvan is a workplace reality series that takes viewers inside some of the world's most advanced and safest mines. From Kiruna's extensive underground network to Aitik's vast open-pit, we follow the women and men who drive production forward. With cutting-edge technology, modern mining techniques, and machines among the largest on Earth, every operation demands precision. This is world-leading mining—where innovation and safety go hand in hand to power industry and secure a nation's future.",
    stats: [
      { label: "Sites", value: 2 },
      { label: "Teams", value: 7 },
      { label: "Episodes", value: 6 }
    ],
    gallery: ["/productions/norrlandspolisen.jpg", "/productions/sommaren-i-grums.jpg"]
  },
  {
    slug: "vagens-hjaltar",
    title: "Vägens Hjältar",
    year: "2015",
    category: "Factual entertainment",
    broadcaster: "Kanal 5 / Discovery+",
    image: "/productions/vagens-hjaltar.jpg",
    cardImage: "/productions/vagens-hjaltar-card.jpg",
    description:
      "Vägens Hjältar takes viewers into the fast-paced daily lives of tow truck operators as they recover cars and other vehicles that have crashed or veered off the road. This highly successful series has, for many years, captivated audiences of all ages with its compelling stories of rescue and recovery. Each episode showcases the skills, bravery, and quick thinking required to handle high-stakes situations on the road, drawing viewers into the challenges and triumphs of those who keep our roads safe.",
    stats: [
      { label: "Years", value: 10, suffix: "+" },
      { label: "Episodes", value: 120, suffix: "+" },
      { label: "Teams", value: 12 }
    ],
    gallery: ["/productions/svenska-truckers.jpg", "/productions/tunnelbanan.jpg"]
  },
  {
    slug: "tunnelbanan",
    title: "Tunnelbanan",
    year: "2012",
    category: "Reality",
    broadcaster: "Kanal 5 / Discovery+",
    image: "/productions/tunnelbanan.jpg",
    cardImage: "/productions/tunnelbanan-card.jpg",
    description:
      "Tunnelbanan gives viewers a rare glimpse into the daily efforts to keep Stockholm's transit system safe. The series follows SL's security team—including guards, volunteers, and subway police—as they monitor stations through surveillance and respond to incidents in real time. With a mix of high-stakes interventions and coordinated responses, Subway captures the intense, behind-the-scenes work needed to maintain order, offering suspenseful insights into the vital operations of Stockholm's public transit.",
    stats: [
      { label: "Years", value: 10, suffix: "+" },
      { label: "Episodes", value: 100, suffix: "+" },
      { label: "Sites", value: 14 }
    ],
    gallery: ["/productions/stockholmspolisen.jpg", "/productions/havets-hjaltar.jpg"]
  },
  {
    slug: "havets-hjaltar",
    title: "Havets hjältar",
    year: "2019",
    category: "Documentary",
    broadcaster: "Kanal 5 / Discovery+",
    image: "/productions/havets-hjaltar.jpg",
    cardImage: "/productions/havets-hjaltar-card.jpg",
    description:
      "Havets Hjältar takes viewers on a thrilling journey with 60 marine police officers patrolling the stunning yet unpredictable archipelagos of Stockholm and Gothenburg. The series also follows dedicated volunteers from the Swedish Sea Rescue Society, who are always ready to lend a helping hand when calm waters turn treacherous. Whether responding to emergencies, accidents, or even crime scenes, these brave men and women risk it all to keep Sweden's waters safe. Each episode brings viewers closer to the action, showcasing the courage and resilience required to face the unexpected at sea. Dive into the captivating world of Havets Hjältar and witness true acts of heroism on Sweden's vast waters.",
    stats: [
      { label: "Crews", value: 6 },
      { label: "Waters", value: 2 },
      { label: "Episodes", value: 18 }
    ],
    gallery: ["/productions/vagens-hjaltar.jpg", "/productions/gransbevakarna-sverige.jpg"]
  },
  {
    slug: "sommaren-i-grums",
    title: "Sommaren i Grums",
    year: "2024",
    category: "Documentary",
    broadcaster: "SVT / SVT Play",
    image: "/productions/sommaren-i-grums.jpg",
    cardImage: "/productions/sommaren-i-grums-card.jpg",
    description:
      "This summer, radio personality Hanna Hellquist brings a fresh twist to TV with her new show Summer in Grums. Teaming up with celebrity guests, Hanna tackles the ultimate challenge: transforming the garden on her family's beloved farm. Join Hanna as she enlists the help of singer Oscar Zia, crime novelist Malin Persson Giolito, her På spåret partner Ina Lundström, along with Jonatan Unge and Little Jinder. With unexpected humor, hard work, and lively company, Summer in Grums promises to be a heartwarming and entertaining adventure in rural Sweden.",
    stats: [
      { label: "Guests", value: 5 },
      { label: "Episodes", value: 6 },
      { label: "Location", value: 1 }
    ],
    gallery: ["/productions/mamma-jimmy-guo.jpg", "/productions/vara-tonaringar.jpg"]
  },
  {
    slug: "vara-tonaringar",
    title: "Våra tonåringar",
    year: "2025",
    category: "Social journalism",
    broadcaster: "SVT / SVT Play",
    image: "/productions/vara-tonaringar-social-network.jpg",
    cardImage: "/productions/vara-tonaringar-card.jpg",
    description:
      "Våra tonåringar is a Swedish series offering invaluable insights for parents navigating the challenges of raising teenagers, featuring expert advice from professionals like psychologist Johannes Hatem and appearances from celebrities such as rapper Cleo and TV host Hans Wiklund. The show explores topics like behavior change, supporting academic success, and avoiding common pitfalls in communication with teens.",
    stats: [
      { label: "Experts", value: 4 },
      { label: "Stories", value: 12 },
      { label: "Episodes", value: 6 }
    ],
    gallery: ["/productions/bra-surr.jpg", "/productions/kvartsamtalet.jpg"]
  },
  {
    slug: "johanna-moller",
    title: "Johanna Möller",
    year: "2021",
    category: "True crime",
    broadcaster: "TV4 / TV4 Play",
    image: "/productions/johanna-moller.jpg",
    cardImage: "/productions/johanna-moller-card.jpg",
    description:
      "In 2016, one of Sweden's most high-profile murders took place, the so-called \"Summer cottage murder\". The victim's daughter, Johanna Möller, becomes known as the \"Arboga woman\" and is sentenced to life imprisonment for being the mastermind behind the act that she made her boyfriend carry out. Johanna Möller is convicted without technical evidence and the verdict is based on the testimony of co-suspect Mohammad Rajabi.",
    stats: [
      { label: "Case", value: 1 },
      { label: "Parts", value: 3 },
      { label: "Year", value: 2016 }
    ],
    gallery: ["/productions/efterlyst.jpg", "/productions/ronnasfallet.jpg"]
  },
  {
    slug: "ronnasfallet",
    title: "Rönnäsfallet",
    year: "2021",
    category: "True crime",
    broadcaster: "SVT / SVT Play",
    image: "/productions/ronnasfallet.jpg",
    cardImage: "/productions/ronnasfallet-card.jpg",
    description:
      "The exclusive Discovery documentary Rönnäsfallet – The Quest for Truth reveals new evidence in the notorious Rönnäs assault case, potentially clearing Lars Appelvik, who many believe was wrongfully convicted. Following attorney Marko Tuhkanen, detective Bo Åström, and professor Minna Gräns, the series exposes critical flaws in the investigation and challenges the foundation of Appelvik's sentence. With crime scene reconstructions and fresh insights, Rönnäsfallet offers a gripping look into the search for justice in one of Sweden's most controversial cases.",
    stats: [
      { label: "Case", value: 1 },
      { label: "Parts", value: 3 },
      { label: "Voices", value: 8 }
    ],
    gallery: ["/productions/johanna-moller.jpg", "/productions/seriemordare.jpg"]
  },
  {
    slug: "spotify-dokumentara-poddar",
    title: "Spotify dokumentära poddar",
    year: "2019",
    category: "Podcast",
    broadcaster: "Spotify",
    image: "/productions/spotify-dokumentara-poddar.jpg",
    cardImage: "/productions/spotify-dokumentara-poddar-card.jpg",
    description:
      "Spotify Dok brings together Sweden's most powerful documentaries, offering stories you've never heard before—or heard in this way. From gripping true crime series to standalone documentaries on pressing topics, it's all curated for you under one platform.",
    stats: [
      { label: "Series", value: 6 },
      { label: "Episodes", value: 80, suffix: "+" },
      { label: "Platform", value: 1 }
    ],
    gallery: ["/productions/seriemordare.jpg", "/productions/sekter.jpg"]
  },
  {
    slug: "seriemordare",
    title: "Seriemördare",
    year: "2019",
    category: "Podcast",
    broadcaster: "Spotify",
    image: "/productions/seriemordare.jpg",
    cardImage: "/productions/seriemordare-card.jpg",
    description:
      "In this gripping podcast, journalist Irena Požar, alongside an expert, delves into the chilling lives of some of the world's most notorious serial killers. Narrated by Samuel Fröler, the series explores their methods, victims, and the dark themes behind their crimes, including cannibalism, racism, and desire.",
    stats: [
      { label: "Series", value: 1 },
      { label: "Episodes", value: 20, suffix: "+" },
      { label: "Format", value: 1 }
    ],
    gallery: ["/productions/sekter.jpg", "/productions/diktatorer.jpg"]
  },
  {
    slug: "sekter",
    title: "Sekter",
    year: "2019",
    category: "Podcast",
    broadcaster: "Spotify",
    image: "/productions/sekter.jpg",
    cardImage: "/productions/sekter-card.jpg",
    description:
      "In this fascinating podcast, host Soraya Hashim, alongside an expert, explores the dark and intriguing world of cults, examining notorious and lesser-known movements both in Sweden and around the globe. Narrated by Emil Hedayat, each episode delves into the manipulation, power dynamics, and the underlying longing for belonging that drive these groups, seeking to understand what attracts followers and defines a cult.",
    stats: [
      { label: "Series", value: 1 },
      { label: "Episodes", value: 20, suffix: "+" },
      { label: "Voices", value: 10, suffix: "+" }
    ],
    gallery: ["/productions/seriemordare.jpg", "/productions/diktatorer.jpg"]
  },
  {
    slug: "diktatorer",
    title: "Diktatorer",
    year: "2019",
    category: "Podcast",
    broadcaster: "Spotify",
    image: "/productions/diktatorer.jpg",
    cardImage: "/productions/diktatorer-card.jpg",
    description:
      "In Diktatorer, host Parisa Amiri takes a deep dive into the lives of the tyrants who shaped world history, exploring their motives, quirks, and the devastating impacts of their rule. With the help of experts, she unravels questions such as why Idi Amin shunned human flesh, the extent of Stalin's paranoia, and the violent events of Mao's Cultural Revolution, offering insights into the past, present, and future.",
    stats: [
      { label: "Series", value: 1 },
      { label: "Episodes", value: 25, suffix: "+" },
      { label: "Subjects", value: 12, suffix: "+" }
    ],
    gallery: ["/productions/spotify-dokumentara-poddar.jpg", "/productions/minnet.jpg"]
  },
  {
    slug: "mamma-jimmy-guo",
    title: "Mamma & Jimmy Guo",
    year: "2023",
    category: "Documentary",
    broadcaster: "SVT / SVT Play",
    image: "/productions/mamma-jimmy-guo.jpg",
    cardImage: "/productions/mamma-jimmy-guo-card.jpg",
    description:
      "In Chinese culture, food is much more than sustenance—it's a celebration of joy, culture, and love. In this series, chef Jimmy Guo and his mother invite viewers into their world, sharing the rich traditions and flavors of their culinary heritage.",
    stats: [
      { label: "Hosts", value: 2 },
      { label: "Episodes", value: 6 },
      { label: "Kitchen", value: 1 }
    ],
    gallery: ["/productions/zeinas-hogtidsmat.jpg", "/productions/sommaren-i-grums.jpg"]
  },
  {
    slug: "det-stora-tartslaget",
    title: "Det stora tårtslaget",
    year: "2014",
    category: "Reality",
    broadcaster: "Kanal 5 / Discovery+",
    image: "/productions/det-stora-tartslaget.jpg",
    cardImage: "/productions/det-stora-tartslaget-card.jpg",
    description:
      "In Det stora tårtslaget, nine contestants with a shared passion for cake design compete to prove they have what it takes to be the best. Each week, they're challenged to create stunning cakes based on a new theme, all while tackling tricky technical tests in decoration and design. With creativity, skill, and nerves on the line, Det stora tårtslaget is a thrilling journey into the world of cake artistry, where only the most impressive creations will rise to the top!",
    stats: [
      { label: "Contestants", value: 9 },
      { label: "Episodes", value: 8 },
      { label: "Season", value: 1 }
    ],
    gallery: ["/productions/zeinas-hogtidsmat.jpg", "/productions/bra-surr.jpg"]
  },
  {
    slug: "fangar-pa-polisens-kamera",
    title: "Fångar på polisens kamera",
    year: "2023",
    category: "Factual entertainment",
    broadcaster: "TV4 / TV4 Play",
    image: "/productions/fangar-pa-polisens-kamera.jpg",
    cardImage: "/productions/fangar-pa-polisens-kamera-card.jpg",
    description:
      "Caught on the Police Camera is a television program that shows dramatic and intense situations from real police interventions, captured on surveillance cameras, body cameras and other recording devices. The program gives an insight into the everyday life of the police and how they deal with crime, dangerous situations and sometimes unexpected events.",
    stats: [
      { label: "Episodes", value: 8 },
      { label: "Cases", value: 20, suffix: "+" },
      { label: "Year", value: 2023 }
    ],
    gallery: ["/productions/norrlandspolisen.jpg", "/productions/stockholmspolisen.jpg"]
  },
  {
    slug: "norrlandspolisen",
    title: "Norrlandspolisen",
    year: "2024",
    category: "Factual entertainment",
    image: "/productions/norrlandspolisen.jpg",
    cardImage: "/productions/norrlandspolisen-card.jpg",
    description:
      "The Norrland Police follows some of the 600 officers serving in the rugged northern towns of Piteå, Luleå, Umeå, Sundsvall, and Östersund. These officers tackle everything from weapons offenses and drug trafficking to poaching and large-scale search missions, bringing viewers directly into the action. This thrilling series showcases the bravery and resilience needed to uphold the law in Sweden's vast and challenging northern landscapes.",
    stats: [
      { label: "Cities", value: 5 },
      { label: "Officers", value: 600, suffix: "+" },
      { label: "Region", value: 1 }
    ],
    gallery: ["/productions/stockholmspolisen.jpg", "/productions/fangar-pa-polisens-kamera.jpg"]
  },
  {
    slug: "stockholmspolisen",
    title: "Stockholmspolisen",
    year: "2024",
    category: "Factual entertainment",
    image: "/productions/stockholmspolisen.jpg",
    cardImage: "/productions/stockholmspolisen-card.jpg",
    description:
      "Stockholm Police offers an unfiltered look into the daily challenges faced by the police as they tackle gang crime, homelessness, drug issues, and escalating social problems. This gripping series follows Stockholm's officers as they respond to urgent calls—from accidents to assaults and even shootings—capturing the intensity and unpredictability of life on the front lines. Each episode provides a powerful glimpse into the dedication and bravery required to protect the city and its residents. With real-life drama and high-stakes moments, Stockholm Police is a must-watch for those who want to experience the pulse of the city's most pressing challenges.",
    stats: [
      { label: "City", value: 1 },
      { label: "Cases", value: 20, suffix: "+" },
      { label: "Teams", value: 6 }
    ],
    gallery: ["/productions/norrlandspolisen.jpg", "/productions/fangar-pa-polisens-kamera.jpg"]
  },
  {
    slug: "bra-surr",
    title: "Bra surr",
    year: "2023",
    category: "Social journalism",
    broadcaster: "YouTube / social platforms",
    image: "/productions/bra-surr.jpg",
    cardImage: "/productions/bra-surr-card.jpg",
    description:
      "An unfiltered discussion show where Reine-Alix Ndengeyinka engages with fearless young people, diving into the issues that matter most to today's youth.",
    stats: [
      { label: "Format", value: 1 },
      { label: "Voices", value: 12, suffix: "+" },
      { label: "Platform", value: 1 }
    ],
    gallery: ["/productions/kvartsamtalet.jpg", "/productions/vara-tonaringar.jpg"]
  },
  {
    slug: "kvartsamtalet",
    title: "Kvartsamtalet",
    year: "2022",
    category: "Social journalism",
    broadcaster: "SVT / SVT Play",
    image: "/productions/kvartsamtalet.jpg",
    cardImage: "/productions/kvartsamtalet-card.jpg",
    description:
      "Kvartsamtalet is a thought-provoking interview series on SVT Play, hosted by Parisa Amiri in its first two seasons and Assia Dahir in the third. In each 15-minute episode, celebrities like Bianca Ingrosso, Carl Bildt, and Niklas Strömstedt share candid insights, discussing everything from personal regrets to career-defining moments.",
    stats: [
      { label: "Minutes", value: 15 },
      { label: "Seasons", value: 3 },
      { label: "Guests", value: 20, suffix: "+" }
    ],
    gallery: ["/productions/bra-surr.jpg", "/productions/vara-tonaringar.jpg"]
  },
  {
    slug: "minnet",
    title: "Minnet",
    year: "2019",
    category: "Podcast",
    broadcaster: "Spotify",
    image: "/productions/minnet.jpg",
    cardImage: "/productions/minnet-card.jpg",
    description:
      "In Minnet, memory champion Yänjaa Wintersoul, who has won World Championship medals and set multiple world records in memory, delves into the fascinating complexities of the human brain. Each week, she explores topics such as traumatic memories, dementia, ADHD, and the mental processes that shape who we are, gaining unique insights from her guests' experiences.",
    stats: [
      { label: "Series", value: 1 },
      { label: "Episodes", value: 12, suffix: "+" },
      { label: "Host", value: 1 }
    ],
    gallery: ["/productions/spotify-dokumentara-poddar.jpg", "/productions/dagens-sport.jpg"]
  },
  {
    slug: "dagens-sport",
    title: "Dagens sport",
    year: "2019",
    category: "Podcast",
    broadcaster: "Podcast platforms",
    image: "/productions/dagens-sport.jpg",
    cardImage: "/productions/dagens-sport-card.jpg",
    description:
      "Dagens Sport is a podcast that highlights significant events from sports history that occurred on each day's date, featuring a new sports star or profile as the narrator each week. From major victories and competitions to stories of pioneers, innovations, and unexpected achievements, the series offers a fresh perspective on the moments that have shaped and transformed the world of sports.",
    stats: [
      { label: "Series", value: 1 },
      { label: "Episodes", value: 30, suffix: "+" },
      { label: "Format", value: 1 }
    ],
    gallery: ["/productions/minnet.jpg", "/productions/trevligt-snack.jpg"]
  },
  {
    slug: "trevligt-snack",
    title: "Trevligt snack",
    year: "2019",
    category: "Podcast",
    broadcaster: "Podcast platforms",
    image: "/productions/trevligt-snack.jpg",
    cardImage: "/productions/trevligt-snack-card.jpg",
    description:
      "In Trevligt snack, we meet successful leaders from a wide range of industries, from dog trainers to football coaches and police officers, to discover what we can learn from their unique approaches to leadership. Join us on this journey for practical tools, tips, and inspiration to help develop your own leadership skills—it's going to be enjoyable, we promise!",
    stats: [
      { label: "Series", value: 1 },
      { label: "Guests", value: 20, suffix: "+" },
      { label: "Format", value: 1 }
    ],
    gallery: ["/productions/dagens-sport.jpg", "/productions/kvartsamtalet.jpg"]
  },
  {
    slug: "zeinas-hogtidsmat",
    title: "Zeinas högtidsmat",
    year: "2019",
    category: "Podcast",
    broadcaster: "Podcast platforms",
    image: "/productions/zeinas-hogtidsmat.jpg",
    cardImage: "/productions/zeinas-hogtidsmat-card.jpg",
    description:
      "In Zeinas högtidsmat, food blogger and chef Zeina Mourtada opens a cultural \"flavor door\" each day throughout December, leading up to Christmas Eve. Along with her guests, Zeina explores the history and cultural significance of holiday dishes from around the world, sharing everything from plum pudding to dolma, while offering delicious anecdotes and flavor tips.",
    stats: [
      { label: "Days", value: 24 },
      { label: "Host", value: 1 },
      { label: "Format", value: 1 }
    ],
    gallery: ["/productions/mamma-jimmy-guo.jpg", "/productions/det-stora-tartslaget.jpg"]
  },
  {
    slug: "roret",
    title: "Röret",
    year: "2020",
    category: "Documentary",
    broadcaster: "YouTube / social platforms",
    image: "/productions/roret.jpg",
    cardImage: "/productions/roret-card.jpg",
    description:
      "In this adventurous series, curious children Greta and Tamara tackle big questions that five-year-olds often wonder about, from where the poop goes when you flush to why ice cream melts in the summer. With the help of their brave and wise friend, Sylvester the bear, they journey through new worlds to uncover the answers to these fascinating mysteries.",
    stats: [
      { label: "Hosts", value: 2 },
      { label: "Questions", value: 10, suffix: "+" },
      { label: "Format", value: 1 }
    ],
    gallery: ["/productions/bra-surr.jpg", "/productions/sommaren-i-grums.jpg"]
  }
];

export const showProductions = productions.filter(
  (production) => production.category !== "Podcast" && production.slug !== "roret"
);

export const podcastProductions = productions.filter(
  (production) => production.category === "Podcast"
);

export const categories = Array.from(
  new Set(productions.map((production) => production.category).filter(Boolean))
).sort() as string[];

export const contacts: ContactRole[] = [
  {
    role: "CEO",
    name: "Vivianne Krantz",
    email: "bossbitch@gmail.com",
    phone: "+46 XX XXX XX XX",
    bio: "Company leadership, strategic partnerships and senior client relationships."
  },
  {
    role: "Executive Producer",
    name: "Hunter S Thompson",
    email: "raoulduke@gmail.com",
    phone: "+46 XX XXX XX XX",
    bio: "Broadcaster dialogue, production quality and delivery of major series."
  },
  {
    role: "Head of Development",
    name: "Donna Tartt",
    email: "judypoovey@gmail.com",
    phone: "+46 XX XXX XX XX",
    bio: "Format development, pitches, research and early commissioner dialogue."
  },
  {
    role: "Production Manager",
    name: "Tosha",
    email: "cykablyatvov@gmail.com",
    phone: "+46 XX XXX XX XX",
    bio: "Planning, staffing, shoot logistics, workplace safety and delivery routines."
  },
  {
    role: "Head of Commissioned Work",
    name: "Janne Jönsson",
    email: "theman@gmail.com",
    phone: "+46 XX XXX XX XX",
    bio: "Film, podcast and editorial communication for companies and public bodies."
  },
  {
    role: "Press Contact",
    name: "Christer Petterson",
    email: "didntdoit@gmail.com",
    phone: "+46 XX XXX XX XX",
    bio: "Press images, interviews, nominations, awards information and trade enquiries."
  }
];

export const awards = [
  {
    image: "/awards/Kristallen_foto.jpg",
    label: "Kristallen"
  },
  {
    image: "/awards/Kristallen1.jpg",
    label: "Award moment"
  },
  {
    image: "/awards/Kristallen2.jpg",
    label: "Award ceremony"
  },
  {
    image: "/awards/Kristallen3.jpg",
    label: "Alaska production award"
  },
  {
    image: "/awards/Kristallen4.jpg",
    label: "Kristallen recognition"
  }
];

export function productionHref(production: Production) {
  return `/productions/${production.slug}`;
}

export function getProduction(slug: string) {
  return productions.find((production) => production.slug === slug);
}

export function productionBucketId(production: Production): ProductionBucketId {
  if (production.category === "Podcast") return "podcasts";
  if (production.category === "True crime") return "true-crime";
  return "factual";
}

export function getRelatedProductions(production: Production, count = 2) {
  const bucketId = productionBucketId(production);
  const bucketProductions = productions.filter(
    (candidate) =>
      candidate.slug !== production.slug && productionBucketId(candidate) === bucketId
  );

  if (bucketProductions.length <= count) return bucketProductions;

  const productionIndex = productions.findIndex((candidate) => candidate.slug === production.slug);
  const startIndex = Math.max(
    0,
    bucketProductions.findIndex((candidate) => productions.indexOf(candidate) > productionIndex)
  );

  return Array.from({ length: count }, (_, offset) => {
    const index = (startIndex + offset) % bucketProductions.length;
    return bucketProductions[index];
  });
}

export function pageTitle(page?: string) {
  return page ? `${page} — ${alaskaSite.name}` : alaskaSite.name;
}

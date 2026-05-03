import { productions, type Locale } from "@/data/site";

export type StatsAwardImage = {
  src: string;
  alt: Record<Locale, string>;
  label: Record<Locale, string>;
};

export type StatsAwardItem = {
  year: string;
  award: string;
  show: Record<Locale, string>;
  status: Record<Locale, string>;
  statusKind: "won" | "nominated";
  category: Record<Locale, string>;
  featured?: boolean;
};

export type StatsKpiItem = {
  id: string;
  label: Record<Locale, string>;
  target: number;
  suffix?: Record<Locale, string>;
  sublabel: Record<Locale, string>;
  featured?: boolean;
};

export const statsAwardImages: StatsAwardImage[] = [
  {
    src: "/productions/gransbevakarna-sverige.jpg",
    alt: {
      sv: "Bild från Gränsbevakarna Sverige",
      en: "Still from Gränsbevakarna Sverige"
    },
    label: {
      sv: "Gränsbevakarna Sverige",
      en: "Gränsbevakarna Sverige"
    }
  },
  {
    src: "/productions/svenska-truckers.jpg",
    alt: {
      sv: "Bild från Svenska Truckers",
      en: "Still from Svenska Truckers"
    },
    label: {
      sv: "Svenska Truckers",
      en: "Svenska Truckers"
    }
  },
  {
    src: "/productions/efterlyst.jpg",
    alt: {
      sv: "Bild från Efterlyst",
      en: "Still from Efterlyst"
    },
    label: {
      sv: "Efterlyst",
      en: "Efterlyst"
    }
  }
];

export const statsAwards: StatsAwardItem[] = [
  {
    year: "2024",
    award: "Kristallen",
    show: { sv: "Gränsbevakarna Sverige", en: "Gränsbevakarna Sverige" },
    status: { sv: "Vinnare", en: "Winner" },
    statusKind: "won",
    category: { sv: "Bästa dokumentärserie", en: "Best documentary series" },
    featured: true
  },
  {
    year: "2024",
    award: "Guldspaden",
    show: { sv: "Svenska Truckers", en: "Svenska Truckers" },
    status: { sv: "Nominerad", en: "Nominated" },
    statusKind: "nominated",
    category: { sv: "Årets grävande program", en: "Investigative programme of the year" },
    featured: true
  },
  {
    year: "2023",
    award: "Prix Europa",
    show: { sv: "Okänd produktion", en: "Production to be confirmed" },
    status: { sv: "Vinnare", en: "Winner" },
    statusKind: "won",
    category: { sv: "Best European Documentary", en: "Best European Documentary" }
  },
  {
    year: "2023",
    award: "Kristallen",
    show: { sv: "Gränsbevakarna Sverige", en: "Gränsbevakarna Sverige" },
    status: { sv: "Vinnare", en: "Winner" },
    statusKind: "won",
    category: { sv: "Bästa realityprogram", en: "Best reality programme" },
    featured: true
  },
  {
    year: "2022",
    award: "Nordisk Råds filmpris",
    show: { sv: "Dramatik, Nordic co-pro", en: "Drama, Nordic co-production" },
    status: { sv: "Nominerad", en: "Nominated" },
    statusKind: "nominated",
    category: { sv: "Bästa nordiska film", en: "Best Nordic film" }
  },
  {
    year: "2021",
    award: "Kristallen",
    show: { sv: "Factual series", en: "Factual series" },
    status: { sv: "Vinnare", en: "Winner" },
    statusKind: "won",
    category: { sv: "Årets underhållningsprogram", en: "Entertainment programme of the year" }
  }
];

export const statsAwardsKpis: StatsKpiItem[] = [
  {
    id: "experience-history",
    label: { sv: "År av erfarenhet", en: "Years of experience" },
    target: 9,
    sublabel: {
      sv: "Samlad erfarenhet bakom Alaska-produktioner, från kortfilm till internationell samproduktion.",
      en: "Combined experience behind Alaska productions, from short film to international co-production."
    },
    featured: true
  },
  {
    id: "produced-hours",
    label: { sv: "Producerade timmar", en: "Produced hours" },
    target: 1200,
    suffix: { sv: " h", en: " h" },
    sublabel: {
      sv: "Sändningstid hos svenska och internationella kanaler.",
      en: "Broadcast hours across Swedish and international channels."
    }
  },
  {
    id: "productions",
    label: { sv: "Produktioner", en: "Productions" },
    target: productions.length,
    sublabel: {
      sv: "Serier, filmer och fristående program sedan starten.",
      en: "Series, films and standalone programmes since launch."
    }
  },
  {
    id: "international-markets",
    label: { sv: "Internationella marknader", en: "International markets" },
    target: 34,
    sublabel: {
      sv: "Länder där Alaska-produktioner har visats eller sålts.",
      en: "Countries where Alaska productions have aired or sold."
    }
  },
  {
    id: "awards-nominations",
    label: { sv: "Priser & nomineringar", en: "Awards & nominations" },
    target: 24,
    sublabel: {
      sv: "Nationella och internationella priser sedan 2005.",
      en: "National and international recognition since 2005."
    }
  },
  {
    id: "active-partners",
    label: { sv: "Samarbetspartners", en: "Partners" },
    target: 18,
    sublabel: {
      sv: "Broadcasters, streamingplattformar och fondpartners.",
      en: "Broadcasters, streaming platforms and funding partners."
    }
  },
  {
    id: "average-watch-time",
    label: { sv: "Genomsnittlig tittartid", en: "Average watch time" },
    target: 920,
    suffix: { sv: " tkr", en: "k" },
    sublabel: {
      sv: "Sändning i primetime på SVT och TV4.",
      en: "Prime-time broadcasts on SVT and TV4."
    }
  },
  {
    id: "team",
    label: { sv: "Team", en: "Team" },
    target: 45,
    sublabel: {
      sv: "Fast anställda - plus ett nätverk av 200+ frilansare.",
      en: "Permanent staff - plus a network of 200+ freelancers."
    }
  }
];

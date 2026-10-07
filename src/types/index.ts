export interface ContactInfo {
  name: string;
  acronym: string;
  slogan: string;
  founder: {
    name: string;
    title: string;
    description?: string;
  };
  status: string;
  address: {
    street: string;
    fokontany: string;
    district: string;
    region: string;
    country: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp: string;
  whatsappRaw: string;
  facebook: string;
  facebookUrl?: string;
}

export interface Formation {
  id: string;
  code: string;
  title: string;
  levelBadge: string;
  description: string;
  objective: string;
  audienceNote: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  detail: string;
  iconName?: string;
}

export interface FoadPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface Perspective {
  number: string;
  title: string;
  summary: string;
  items: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  alt: string;
  /** Chemin de l'image (importée via src/images/index.ts). */
  image: string;
  iconName: string;
}

export interface RegionalRole {
  title: string;
  description: string;
  iconName: string;
}

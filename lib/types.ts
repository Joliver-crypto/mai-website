export type ProjectPalette = {
  bg: string;
  bgSecondary: string;
  accent: string;
  text: string;
  textMuted: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  layout?: "full" | "wide" | "detail" | "spread";
};

export type Project = {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions?: string;
  description: string;
  descriptionVi?: string;
  palette: ProjectPalette;
  images: ProjectImage[];
  narrative?: string[];
};

export type NavItem = {
  id: string;
  label: string;
  group?: "work" | "info";
};

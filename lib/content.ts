import type { NavItem, Project, ProjectPalette } from "./types";

const LIGHT_MUTED = "#6b6256";
const DARK_MUTED = "#9a9088";

export const SECTION_PALETTES: Record<string, ProjectPalette> = {
  intro: {
    bg: "#faf9f7",
    bgSecondary: "#f2f0ec",
    accent: "#1a1816",
    text: "#1a1816",
    textMuted: LIGHT_MUTED,
  },
  about: {
    bg: "#f2f0ec",
    bgSecondary: "#eae8e4",
    accent: "#1a1816",
    text: "#1a1816",
    textMuted: LIGHT_MUTED,
  },
  cv: {
    bg: "#f2f0ec",
    bgSecondary: "#eae8e4",
    accent: "#1a1816",
    text: "#1a1816",
    textMuted: LIGHT_MUTED,
  },
  contact: {
    bg: "#f2f0ec",
    bgSecondary: "#eae8e4",
    accent: "#1a1816",
    text: "#1a1816",
    textMuted: LIGHT_MUTED,
  },
};

export const SITE = {
  name: "Mai Nguy",
  tagline: "Artist & Arts Administrator",
  email: "Mnguy@ucdavis.edu",
  cvPath: "/CV/CV_ Curriculum Vitae (3).pdf",
  headshot: "/headshot/IMG_7542.JPEG",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "photobook", label: "Untitled (Photobook)", group: "work" },
  { id: "ba-ngoai", label: "Bà Ngoại Untranslated", group: "work" },
  { id: "napalm-girl", label: "Napalm Girl", group: "work" },
  { id: "admin-pedestal", label: "Administrator's Pedestal", group: "work" },
  { id: "last-prayer", label: "The Last Prayer", group: "work" },
  { id: "about", label: "About", group: "info" },
  { id: "cv", label: "CV", group: "info" },
  { id: "contact", label: "Contact", group: "info" },
];

export const ARTIST_STATEMENT = `Mai Nguy is an undergraduate student at University of California, Davis who will graduate with a degree in Art Studio with a minor in Museum Studies in June 2026. She is an emerging arts professional whose interests lie at the intersection of art administration, and amplifying marginalized voices.

Mai currently works as the Co-Lead and Director of Administration for the Basement Gallery, a student-led gallery at UC Davis, where she leads a team of six to plan and execute 3-4 exhibitions per quarter. Here, she develops exhibition themes, artist calls, curates, engages in community outreach, event promotion, and end-to-end logistics from art delivery to installation and pickup. The most rewarding aspects of her job are honoring and amplifying the voices of underrepresented communities through intentional exhibition themes and curation. Recent exhibitions that she helped produce were In the Flesh, a movement-based exhibition featuring live performances by dance collective Essence and the UC Davis Pole Dancing Dance, and BrainFreeze 2026 Art Gallery at the Mondavi Center in collaboration with ASUCD Entertainment Council.

As an artist herself, her sculptures have been featured in a collaborative exhibition at the UC Davis arboretum titled A BowerHaus for a Post-Antropocene World, where she contributed to multiple installations which accompanied live musical performances. Her sculpture incorporates her life experiences which she transforms into vulnerable works that are intimate and deeply personal. She has a multidisciplinary sculptural practice that incorporates ceramics, wood, metal, and weave.

Motivated by a future in contemporary art institutions, Mai advocates for equity and ethical practices within cultural institutions. She brings to every project a blend of creativity and professionalism with a desire to make art accessible and welcoming to the wider community.`;

export const PROJECTS: Project[] = [
  {
    id: "photobook",
    title: "Untitled",
    year: "2026",
    medium: "Inkjet prints, paper, thread",
    description:
      "In the archives, there was a file of New York society photos that captured my fascination. I love learning about how people lived during a specific time, place, and culture. While looking at the photos, I noticed how you were able to glean information about their relationships to each other and their positioning in society by studying the details.",
    narrative: [
      "In that same regard, I wanted to document Vietnamese traditions that occur when we lose a loved one and the perseverance of love. I created a photobook out of cut and folded crafting paper that was sewn together using a traditional book-binding technique.",
      "The photos on those pages contained images of my grandma's funeral which spanned across two days totaling 12 hours of prayers, guest visitation, cries, and laughs. These pages depict Vietnamese funerary customs and rituals that occur when a tragic loss strikes our community.",
      "Traditions evolve and change, so it was important to capture specifically Vietnamese-American funerals to reflect this moment in time at this place. I made my work with the intention of archiving an important part of history in our diaspora.",
    ],
    palette: {
      bg: "#f0ebe2",
      bgSecondary: "#e4ddd2",
      accent: "#7a6b58",
      text: "#2a241c",
      textMuted: "#6b6256",
    },
    images: [
      {
        src: "/Photobook/Photobook_1.jpg",
        alt: "Untitled photobook — spread one",
        layout: "full",
        caption: "Hand-bound pages, inkjet prints on folded crafting paper",
      },
      {
        src: "/Photobook/Photobook_2.jpg",
        alt: "Untitled photobook — spread two",
        layout: "wide",
        caption: "Vietnamese-American funerary customs, documented across two days",
      },
    ],
  },
  {
    id: "ba-ngoai",
    title: "Bà Ngoại Untranslated",
    year: "2025",
    medium: "Cardboard, yarn, fabric, & wood",
    dimensions: '12 × 14 × 15"',
    description:
      "This sculpture uses a loom to weave materials that hold my grandmother's essence and my memories of her. Each weave is then used to decorate and adorn the loom until the tool itself can no longer function. This piece was inspired by my grandmother as she faced her mortality.",
    descriptionVi:
      "Tác phẩm này dùng khung cửi để dệt những vật mang theo hình bóng của bà ngoại của tôi, và những ký ức về bà. Mỗi sợi dệt dùng để trang trí và tô điểm cho chính cái khung cửi đó, cho đến khi không còn dùng được nữa. Tôi bắt đầu làm tác phẩm này trong thời gian bà ngoại bị bệnh nặng. Trong lúc thời giang đó, tôi dần dần phải đối diện với nỗi mất mát đang đến gần, vì sức khỏe của bà càng ngày càng yếu đi. Trong gia đình nhập cư đông người của chúng tôi, bà là cội nguồn và gốc rễ mà từ đó cả gia đình được sinh ra.",
    narrative: [
      "As her health declined, I was increasingly confronted with the impending loss of a matriarch in our large immigrant family, the weight of what she meant to my mother, a disappearing library of cultural knowledge, and my remorse for all the stories I never had the chance to discover.",
      "Now, following her passing, the work has become both a memorial and a reflection on the fragile nature of memory, inheritance, and what remains when a loved one is gone.",
    ],
    palette: {
      bg: "#ede8e0",
      bgSecondary: "#ddd4c8",
      accent: "#9a7b5e",
      text: "#2c2620",
      textMuted: "#6e6458",
    },
    images: [
      {
        src: "/Ba Ngoai Untranslated/loom_1.JPG",
        alt: "Bà Ngoại Untranslated — loom sculpture",
        layout: "full",
        caption: "The loom adorned until it can no longer function",
      },
      {
        src: "/Ba Ngoai Untranslated/loom_2.JPG",
        alt: "Bà Ngoại Untranslated — detail",
        layout: "detail",
        caption: "Materials woven with memory and inheritance",
      },
    ],
  },
  {
    id: "napalm-girl",
    title: "Napalm Girl",
    year: "2026",
    medium: "Oil pastel on paper",
    dimensions: '11" × 14"',
    description:
      "My drawing is based on a famous photo of nine-year old Phan Thi Kim Phuc running naked on a road after suffering severe burns from a napalm attack. The image has become a sobering emblem of the tragedies and horror inflicted by war and imperialism.",
    narrative: [
      "Developed by the United States during World War II and later used extensively in the Vietnam War, napalm became one of the most controversial weapons of modern warfare. In this moment of suffering, the photograph captures a broader history of systemic violence.",
      "When I made this drawing, I remembered the anger I felt when I first discovered the photo and thought about the complicated history of the US and its constant reinterpretation. How stories are told, retold, and continually reinterpreted.",
      "While Kim Phuc has since shared her journey toward healing and forgiveness, I find myself reflecting on how this image continues to circulate unevenly across generations. For many younger Vietnamese people, particularly Vietnamese Americans, this history is not always encountered within formal education that you could learn about in American textbooks, but discovered independently, often later in life.",
      "For those of us who did not live through the war, our emotional responses are still unfolding. We are encountering these histories for the first time, and our reactions have not yet reached the place of resolution that Kim Phuc describes. Instead, we are left to navigate our own processes of reckoning with inherited memory, cultural displacement, and the enduring impacts of Western imperialism.",
    ],
    palette: {
      bg: "#1c1a18",
      bgSecondary: "#2a2622",
      accent: "#c45c2a",
      text: "#ede8e2",
      textMuted: "#a89e94",
    },
    images: [
      {
        src: "/Napalm Girl/Napalm Girl.JPG",
        alt: "Napalm Girl — oil pastel drawing",
        layout: "full",
        caption: "Based on the photograph of Phan Thi Kim Phuc, 1972",
      },
    ],
  },
  {
    id: "admin-pedestal",
    title: "Administrator's Pedestal",
    year: "2026",
    medium: "Wood and paper",
    dimensions: '14 × 14 × 44.5"',
    description:
      "The Administrator's Pedestal highlights the often unseen labor of administration by transforming the pedestal itself into an archive of organizational work. Covered in printed calendars, emails, messages, meeting agendas, google sheets and written records, the structure is composed of the countless acts of coordination, communication, and planning that support the visible outcomes of institutions and exhibitions.",
    descriptionVi:
      "Tác phẩm này muốn nói về công việc thầm lặng của người lo tổ chức, sắp xếp mọi thứ phía sau — những việc mà thường không ai để ý. Cái bệ này được bao phủ bởi lịch làm việc, email, tin nhắn, lịch họp, bảng tính và giấy tờ ghi chép — tất cả những thứ đó gộp lại tạo nên tác phẩm. Thường thì cái bệ chỉ để đỡ tác phẩm nghệ thuật bên trên. Nhưng ở đây, chính cái bệ mới là tác phẩm.",
    narrative: [
      "Traditionally, a pedestal exists to elevate and draw attention to an artwork placed above it. Here, however, the pedestal becomes the artwork itself, foregrounding the labor that is typically hidden beneath exhibitions, events, and collective endeavors.",
      "The layered documents function as traces of time, responsibility, care, and evidence of the invisible systems that sustain public-facing achievements.",
    ],
    palette: {
      bg: "#f5f3ef",
      bgSecondary: "#eae6df",
      accent: "#4a5568",
      text: "#1a1f2e",
      textMuted: "#5c6370",
    },
    images: [
      {
        src: "/Admin Pedestal/pedestal_1.jpg",
        alt: "Administrator's Pedestal — full view",
        layout: "full",
        caption: "Calendars, emails, agendas — the archive of invisible labor",
      },
      {
        src: "/Admin Pedestal/pedestal_2.jpg",
        alt: "Administrator's Pedestal — detail",
        layout: "detail",
        caption: "The pedestal as artwork",
      },
    ],
  },
  {
    id: "last-prayer",
    title: "The Last Prayer",
    year: "2026",
    medium: "Mixed media",
    description:
      "A work exploring ritual, remembrance, and the final gestures of mourning — the quiet moments that close a chapter of grief and honor a life lived.",
    palette: {
      bg: "#1a1816",
      bgSecondary: "#252220",
      accent: "#b8956a",
      text: "#e8e2d8",
      textMuted: "#9a9088",
    },
    images: [
      {
        src: "/The Last Prayer/The Last Prayer.jpeg",
        alt: "The Last Prayer",
        layout: "full",
      },
    ],
  },
];

export function getSectionPalette(sectionId: string): ProjectPalette {
  const project = PROJECTS.find((p) => p.id === sectionId);
  if (project) return project.palette;
  return SECTION_PALETTES[sectionId] ?? SECTION_PALETTES.intro;
}

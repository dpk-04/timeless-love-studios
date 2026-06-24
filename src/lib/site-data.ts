export const BRAND = {
  name: "CraftPhotography",
  tagline: "Capturing Timeless Love Stories",
  city: "Mumbai · Available across India & Worldwide",
  email: "hello@craftphotography.in",
  phone: "+91 98765 43210",
  studio: "Studio 12, Bandra West, Mumbai 400050",
  instagram: "https://instagram.com/craftphotography",
  instagramHandle: "@craftphotography",
};

export const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const heroSlides = [
  {
    src: U("photo-1519741497674-611481863552", 2000),
    alt: "Bride and groom in golden light",
  },
  {
    src: U("photo-1583939003579-730e3918a45a", 2000),
    alt: "Intimate portrait in soft daylight",
  },
  {
    src: U("photo-1511285560929-80b456fea0bc", 2000),
    alt: "Destination wedding ceremony",
  },
  {
    src: U("photo-1604017011826-d3b4c23f8914", 2000),
    alt: "Candlelit wedding dinner",
  },
  {
    src: U("photo-1537907510278-10acdb198d0f", 2000),
    alt: "Engagement shoot at dawn",
  },
];

export type PortfolioCategory = {
  slug: string;
  name: string;
  blurb: string;
  cover: string;
  images: string[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "weddings",
    name: "Weddings",
    blurb: "Grand Indian weddings, told with cinematic restraint.",
    cover: U("photo-1519741497674-611481863552", 1400),
    images: [
      U("photo-1519741497674-611481863552", 1200),
      U("photo-1525258946800-98cfd641d0de", 1200),
      U("photo-1511285560929-80b456fea0bc", 1200),
      U("photo-1604017011826-d3b4c23f8914", 1200),
      U("photo-1519225421980-715cb0215aed", 1200),
      U("photo-1591604466107-ec97de577aff", 1200),
    ],
  },
  {
    slug: "pre-wedding",
    name: "Pre-Wedding Shoots",
    blurb: "Romantic, story-led portraits before the big day.",
    cover: U("photo-1537907510278-10acdb198d0f", 1400),
    images: [
      U("photo-1537907510278-10acdb198d0f", 1200),
      U("photo-1529636798458-92182e662485", 1200),
      U("photo-1465495976277-4387d4b0e4a6", 1200),
      U("photo-1519671482749-fd09be7ccebf", 1200),
    ],
  },
  {
    slug: "engagement",
    name: "Engagement Shoots",
    blurb: "Intimate frames celebrating the promise of forever.",
    cover: U("photo-1606800052052-a08af7148866", 1400),
    images: [
      U("photo-1606800052052-a08af7148866", 1200),
      U("photo-1583939003579-730e3918a45a", 1200),
      U("photo-1507504031003-b417219a0fde", 1200),
      U("photo-1606216794074-735e91aa2c92", 1200),
    ],
  },
  {
    slug: "maternity",
    name: "Maternity Shoots",
    blurb: "Soft, glowing portraits of the months before.",
    cover: U("photo-1519011985187-444d62641929", 1400),
    images: [
      U("photo-1519011985187-444d62641929", 1200),
      U("photo-1515488764276-beab7607c1e6", 1200),
      U("photo-1555252333-9f8e92e65df9", 1200),
      U("photo-1518795147063-7777c1d9b94a", 1200),
    ],
  },
  {
    slug: "baby-shower",
    name: "Baby Shower Shoots",
    blurb: "Joyful celebrations and quiet first portraits.",
    cover: U("photo-1519689680058-324335c77eba", 1400),
    images: [
      U("photo-1519689680058-324335c77eba", 1200),
      U("photo-1530577197743-7adf14294584", 1200),
      U("photo-1546015720-b8b30df5aa27", 1200),
      U("photo-1517846693597-826c6e8c4f10", 1200),
    ],
  },
  {
    slug: "birthday",
    name: "Birthday Photography",
    blurb: "Vivid memories from milestone celebrations.",
    cover: U("photo-1530103862676-de8c9debad1d", 1400),
    images: [
      U("photo-1530103862676-de8c9debad1d", 1200),
      U("photo-1464349095431-e9a21285b5f3", 1200),
      U("photo-1513151233558-d860c5398176", 1200),
      U("photo-1502635385003-ee1e6a1a742d", 1200),
    ],
  },
  {
    slug: "family",
    name: "Family Portraits",
    blurb: "Heirloom portraits of the people who matter most.",
    cover: U("photo-1469371670807-013ccf25f16a", 1400),
    images: [
      U("photo-1469371670807-013ccf25f16a", 1200),
      U("photo-1542037104857-ffbb0b9155fb", 1200),
      U("photo-1511895426328-dc8714191300", 1200),
      U("photo-1444840535719-195841cb6e2b", 1200),
    ],
  },
  {
    slug: "events",
    name: "Event Photography",
    blurb: "Corporate, cultural, and private event coverage.",
    cover: U("photo-1492684223066-81342ee5ff30", 1400),
    images: [
      U("photo-1492684223066-81342ee5ff30", 1200),
      U("photo-1505373877841-8d25f7d46678", 1200),
      U("photo-1511795409834-ef04bbd61622", 1200),
      U("photo-1464366400600-7168b8af9bc3", 1200),
    ],
  },
];

export const services = [
  {
    name: "Wedding Photography",
    price: "₹1,50,000",
    blurb: "Full-day cinematic coverage of your wedding.",
    items: [
      "10 hours of coverage",
      "Two photographers",
      "500+ hand-edited images",
      "Private online gallery",
      "Pre-wedding consultation",
    ],
  },
  {
    name: "Pre-Wedding Photography",
    price: "₹45,000",
    blurb: "A romantic story shoot before the big day.",
    items: [
      "4 hours, one location",
      "Two outfit changes",
      "150+ edited images",
      "Cinematic colour grading",
    ],
  },
  {
    name: "Maternity Photography",
    price: "₹25,000",
    blurb: "Soft, glowing portraits of the months before.",
    items: [
      "2 hours studio or outdoor",
      "Wardrobe styling guidance",
      "80+ edited images",
      "Two retouched fine-art prints",
    ],
    featured: true,
  },
  {
    name: "Baby Shower Photography",
    price: "₹30,000",
    blurb: "Joyful celebration coverage, candid and posed.",
    items: [
      "3 hours of coverage",
      "Décor & detail photography",
      "120+ edited images",
      "Private online gallery",
    ],
  },
  {
    name: "Birthday Photography",
    price: "₹20,000",
    blurb: "Milestone and party photography.",
    items: [
      "2 hours of coverage",
      "Candid & family portraits",
      "80+ edited images",
      "Quick 48-hour preview",
    ],
  },
  {
    name: "Family Photography",
    price: "₹18,000",
    blurb: "Heirloom portraits for the whole family.",
    items: [
      "90-minute session",
      "Indoor or outdoor",
      "60+ edited images",
      "One framed fine-art print",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "CraftPhotography captured our wedding with such grace. Every image feels like a film still — we will treasure them for the rest of our lives.",
    name: "Aanya & Rohan",
    where: "Udaipur, Rajasthan",
  },
  {
    quote:
      "The calmest, most thoughtful presence on our wedding day. Their work is editorial, warm, and breathtakingly honest.",
    name: "Sneha & Arjun",
    where: "Goa",
  },
  {
    quote:
      "Our maternity portraits hang in every room of our home. CraftPhotography has a rare gift for quiet, extraordinary moments.",
    name: "The Mehra Family",
    where: "Mumbai",
  },
  {
    quote:
      "From the first call to the final album, every detail felt considered. Truly the best decision we made for our wedding.",
    name: "Ishita & Karan",
    where: "Jaipur",
  },
];

export const instagramImages = [
  U("photo-1529636798458-92182e662485", 800),
  U("photo-1465495976277-4387d4b0e4a6", 800),
  U("photo-1519225421980-715cb0215aed", 800),
  U("photo-1606216794074-735e91aa2c92", 800),
  U("photo-1507504031003-b417219a0fde", 800),
  U("photo-1519671482749-fd09be7ccebf", 800),
];

export const artists = [
  {
    name: "Aarav Sharma",
    role: "Co-Founder · Lead Photographer",
    image: U("photo-1506794778202-cad84cf45f1d", 1200),
    bio: "With over a decade behind the lens, Aarav blends editorial restraint with the colour and warmth of Indian celebrations. His frames are quiet, considered, and unmistakably cinematic.",
  },
  {
    name: "Priya Kapoor",
    role: "Co-Founder · Portrait Artist",
    image: U("photo-1544005313-94ddf0286df2", 1200),
    bio: "Priya specialises in portraiture — maternity, family, and intimate moments. Her work is rooted in soft natural light and the unhurried trust she builds with every client.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

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

/**
 * All imagery is served from `public/images/`. Replace the files in those
 * folders (keeping the same filenames) to swap in real client photography
 * without touching any code.
 *
 *   public/images/hero/        → homepage hero slideshow
 *   public/images/portfolio/   → portfolio galleries (per category)
 *   public/images/team/        → about page artist portraits
 *   public/images/instagram/   → instagram feed grid
 */
const img = (path: string) => `/images/${path}`;

export const heroSlides = [
  { src: img("hero/hero-1.jpg"), alt: "Bride and groom in golden light" },
  { src: img("hero/hero-2.jpg"), alt: "Intimate portrait in soft daylight" },
  { src: img("hero/hero-3.jpg"), alt: "Destination wedding ceremony" },
  { src: img("hero/hero-4.jpg"), alt: "Candlelit wedding dinner" },
  { src: img("hero/hero-5.jpg"), alt: "Engagement shoot at dawn" },
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
    cover: img("portfolio/wedding-1.jpg"),
    images: [
      img("portfolio/wedding-1.jpg"),
      img("portfolio/wedding-2.jpg"),
      img("portfolio/wedding-3.jpg"),
      img("portfolio/wedding-4.jpg"),
      img("portfolio/wedding-5.jpg"),
      img("portfolio/wedding-6.jpg"),
    ],
  },
  {
    slug: "pre-wedding",
    name: "Pre-Wedding Shoots",
    blurb: "Romantic, story-led portraits before the big day.",
    cover: img("portfolio/prewedding-1.jpg"),
    images: [
      img("portfolio/prewedding-1.jpg"),
      img("portfolio/prewedding-2.jpg"),
      img("portfolio/prewedding-3.jpg"),
      img("portfolio/prewedding-4.jpg"),
    ],
  },
  {
    slug: "engagement",
    name: "Engagement Shoots",
    blurb: "Intimate frames celebrating the promise of forever.",
    cover: img("portfolio/engagement-1.jpg"),
    images: [
      img("portfolio/engagement-1.jpg"),
      img("portfolio/engagement-2.jpg"),
      img("portfolio/engagement-3.jpg"),
      img("portfolio/engagement-4.jpg"),
    ],
  },
  {
    slug: "maternity",
    name: "Maternity Shoots",
    blurb: "Soft, glowing portraits of the months before.",
    cover: img("portfolio/maternity-1.jpg"),
    images: [
      img("portfolio/maternity-1.jpg"),
      img("portfolio/maternity-2.jpg"),
      img("portfolio/maternity-3.jpg"),
      img("portfolio/maternity-4.jpg"),
    ],
  },
  {
    slug: "baby-shower",
    name: "Baby Shower Shoots",
    blurb: "Joyful celebrations and quiet first portraits.",
    cover: img("portfolio/babyshower-1.jpg"),
    images: [
      img("portfolio/babyshower-1.jpg"),
      img("portfolio/babyshower-2.jpg"),
      img("portfolio/babyshower-3.jpg"),
      img("portfolio/babyshower-4.jpg"),
    ],
  },
  {
    slug: "birthday",
    name: "Birthday Photography",
    blurb: "Vivid memories from milestone celebrations.",
    cover: img("portfolio/birthday-1.jpg"),
    images: [
      img("portfolio/birthday-1.jpg"),
      img("portfolio/birthday-2.jpg"),
      img("portfolio/birthday-3.jpg"),
      img("portfolio/birthday-4.jpg"),
    ],
  },
  {
    slug: "family",
    name: "Family Portraits",
    blurb: "Heirloom portraits of the people who matter most.",
    cover: img("portfolio/family-1.jpg"),
    images: [
      img("portfolio/family-1.jpg"),
      img("portfolio/family-2.jpg"),
      img("portfolio/family-3.jpg"),
      img("portfolio/family-4.jpg"),
    ],
  },
  {
    slug: "events",
    name: "Event Photography",
    blurb: "Corporate, cultural, and private event coverage.",
    cover: img("portfolio/event-1.jpg"),
    images: [
      img("portfolio/event-1.jpg"),
      img("portfolio/event-2.jpg"),
      img("portfolio/event-3.jpg"),
      img("portfolio/event-4.jpg"),
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
  img("instagram/ig-1.jpg"),
  img("instagram/ig-2.jpg"),
  img("instagram/ig-3.jpg"),
  img("instagram/ig-4.jpg"),
  img("instagram/ig-5.jpg"),
  img("instagram/ig-6.jpg"),
];

export const artists = [
  {
    name: "Aarav Sharma",
    role: "Co-Founder · Lead Photographer",
    image: img("team/aarav.jpg"),
    bio: "With over a decade behind the lens, Aarav blends editorial restraint with the colour and warmth of Indian celebrations. His frames are quiet, considered, and unmistakably cinematic.",
  },
  {
    name: "Priya Kapoor",
    role: "Co-Founder · Portrait Artist",
    image: img("team/priya.jpg"),
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

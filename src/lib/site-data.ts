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
 * All imagery is served from `public/images/` and all video from
 * `public/videos/`. Replace files in those folders (keeping the same
 * filenames) to swap in real client work without touching any code.
 *
 *   public/images/hero/        → homepage hero slideshow
 *   public/images/portfolio/   → portfolio galleries (per category)
 *   public/images/team/        → about page artist portraits
 *   public/images/instagram/   → instagram feed grid
 *
 *   public/videos/home/        → homepage video showcase (showreels)
 *   public/videos/weddings/    → wedding films
 *   public/videos/prewedding/  → pre-wedding teasers
 *   public/videos/engagement/  → engagement films
 *   public/videos/maternity/   → maternity films
 *   public/videos/babyshower/  → baby shower films
 *   public/videos/birthday/    → birthday films
 */
const img = (path: string) => `/images/${path}`;
const vid = (path: string) => `/videos/${path}`;

export const heroSlides = [
  { src: img("hero/hero-6.jpg"), alt: "Sreehitha — bridal portrait collage" },
  { src: img("hero/hero-7.jpg"), alt: "Sreehitha — traditional bridal editorial" },
  { src: img("hero/hero-8.jpg"), alt: "Mother and bride — pre-wedding moments" },
  { src: img("hero/hero-1.jpg"), alt: "Bride and groom in golden light" },
  { src: img("hero/hero-2.jpg"), alt: "Intimate portrait in soft daylight" },
  { src: img("hero/hero-3.jpg"), alt: "Destination wedding ceremony" },
  { src: img("hero/hero-4.jpg"), alt: "Candlelit wedding dinner" },
  { src: img("hero/hero-5.jpg"), alt: "Engagement shoot at dawn" },
];

export type VideoItem = {
  src: string;
  poster: string;
  title: string;
  caption?: string;
  duration?: string;
  category?: string;
};


export type PortfolioCategory = {
  slug: string;
  name: string;
  blurb: string;
  cover: string;
  images: string[];
  videos: VideoItem[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "weddings",
    name: "Wedding Photography",
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
    videos: [
      {
        src: vid("weddings/wedding-video-1.mp4"),
        poster: img("portfolio/wedding-2.jpg"),
        title: "Aanya & Rohan — Udaipur",
        caption: "A three-day wedding film",
      },
      {
        src: vid("weddings/wedding-video-2.mp4"),
        poster: img("portfolio/wedding-5.jpg"),
        title: "Sneha & Arjun — Goa",
        caption: "Beachside ceremony highlights",
      },
    ],
  },
  {
    slug: "pre-wedding",
    name: "Pre-Wedding Photography",
    blurb: "Romantic, story-led portraits before the big day.",
    cover: img("portfolio/prewedding-1.jpg"),
    images: [
      img("portfolio/prewedding-1.jpg"),
      img("portfolio/prewedding-2.jpg"),
      img("portfolio/prewedding-3.jpg"),
      img("portfolio/prewedding-4.jpg"),
    ],
    videos: [
      {
        src: vid("prewedding/prewedding-video-1.mp4"),
        poster: img("portfolio/prewedding-1.jpg"),
        title: "Ishita & Karan — Jaipur",
        caption: "A pre-wedding teaser",
      },
      {
        src: vid("prewedding/prewedding-video-2.mp4"),
        poster: img("portfolio/prewedding-3.jpg"),
        title: "Riya & Dev — Kerala",
        caption: "Backwaters love story",
      },
    ],
  },
  {
    slug: "engagement",
    name: "Engagement Photography",
    blurb: "Intimate frames celebrating the promise of forever.",
    cover: img("portfolio/engagement-1.jpg"),
    images: [
      img("portfolio/engagement-1.jpg"),
      img("portfolio/engagement-2.jpg"),
      img("portfolio/engagement-3.jpg"),
      img("portfolio/engagement-4.jpg"),
    ],
    videos: [
      {
        src: vid("engagement/engagement-video-1.mp4"),
        poster: img("portfolio/engagement-2.jpg"),
        title: "Tara & Vihaan — Mumbai",
        caption: "A rooftop proposal",
      },
    ],
  },
  {
    slug: "maternity",
    name: "Maternity Photography",
    blurb: "Soft, glowing portraits of the months before.",
    cover: img("portfolio/maternity-1.jpg"),
    images: [
      img("portfolio/maternity-1.jpg"),
      img("portfolio/maternity-2.jpg"),
      img("portfolio/maternity-3.jpg"),
      img("portfolio/maternity-4.jpg"),
    ],
    videos: [
      {
        src: vid("maternity/maternity-video-1.mp4"),
        poster: img("portfolio/maternity-2.jpg"),
        title: "The Mehra Family",
        caption: "A maternity portrait film",
      },
    ],
  },
  {
    slug: "baby-shower",
    name: "Baby Shower Photography",
    blurb: "Joyful celebrations and quiet first portraits.",
    cover: img("portfolio/babyshower-1.jpg"),
    images: [
      img("portfolio/babyshower-1.jpg"),
      img("portfolio/babyshower-2.jpg"),
      img("portfolio/babyshower-3.jpg"),
      img("portfolio/babyshower-4.jpg"),
    ],
    videos: [
      {
        src: vid("babyshower/babyshower-video-1.mp4"),
        poster: img("portfolio/babyshower-2.jpg"),
        title: "Anaya's Welcome",
        caption: "Baby shower highlights",
      },
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
    videos: [
      {
        src: vid("birthday/birthday-video-1.mp4"),
        poster: img("portfolio/birthday-3.jpg"),
        title: "Vir Turns One",
        caption: "A first birthday film",
      },
    ],
  },
];

/** Videos shown in the homepage Video Showcase section. */
export const showcaseVideos: VideoItem[] = [
  {
    src: vid("home/showreel-1.mp4"),
    poster: img("portfolio/wedding-1.jpg"),
    title: "The Wedding Reel",
    caption: "A cinematic highlight film",
    category: "Weddings",
    duration: "1:24",
  },
  {
    src: vid("home/showreel-2.mp4"),
    poster: img("portfolio/prewedding-2.jpg"),
    title: "Pre-Wedding Stories",
    caption: "Romantic teasers across India",
    category: "Pre-Wedding",
    duration: "0:58",
  },
  {
    src: vid("home/showreel-3.mp4"),
    poster: img("portfolio/maternity-1.jpg"),
    title: "Portraits in Motion",
    caption: "Maternity & family films",
    category: "Maternity",
    duration: "1:12",
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
    name: "Engagement Photography",
    price: "₹35,000",
    blurb: "Intimate frames celebrating the promise of forever.",
    items: [
      "3 hours of coverage",
      "Indoor or outdoor",
      "120+ edited images",
      "Quick 7-day delivery",
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
    bio: "Priya specialises in portraiture — maternity and intimate moments. Her work is rooted in soft natural light and the unhurried trust she builds with every client.",
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

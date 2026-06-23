import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elena Marsh — Wedding & Portrait Photography" },
      {
        name: "description",
        content:
          "Elena Marsh is a wedding and portrait photographer crafting timeless, editorial imagery for couples and families worldwide.",
      },
      { property: "og:title", content: "Elena Marsh — Wedding & Portrait Photography" },
      {
        property: "og:description",
        content:
          "Timeless wedding and portrait photography. Editorial, intimate, unforgettable.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80",
      },
    ],
  }),
  component: Index,
});

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const portfolio = [
  { src: U("photo-1519741497674-611481863552", 900), h: "tall", cat: "Wedding" },
  { src: U("photo-1606800052052-a08af7148866", 900), h: "short", cat: "Engagement" },
  { src: U("photo-1583939003579-730e3918a45a", 900), h: "mid", cat: "Portrait" },
  { src: U("photo-1511285560929-80b456fea0bc", 900), h: "tall", cat: "Destination" },
  { src: U("photo-1525258946800-98cfd641d0de", 900), h: "mid", cat: "Wedding" },
  { src: U("photo-1469371670807-013ccf25f16a", 900), h: "short", cat: "Family" },
  { src: U("photo-1537907510278-10acdb198d0f", 900), h: "tall", cat: "Engagement" },
  { src: U("photo-1604017011826-d3b4c23f8914", 900), h: "mid", cat: "Wedding" },
  { src: U("photo-1591604466107-ec97de577aff", 900), h: "short", cat: "Destination" },
];

const hClass: Record<string, string> = {
  tall: "row-span-2 aspect-[3/5]",
  mid: "aspect-[4/5]",
  short: "aspect-[4/3]",
};

const packages = [
  {
    name: "The Intimate",
    price: "$2,400",
    blurb: "Elopements & small ceremonies",
    items: ["4 hours coverage", "One photographer", "200+ edited images", "Private online gallery", "Print release"],
  },
  {
    name: "The Signature",
    price: "$4,800",
    blurb: "Full wedding day, beautifully told",
    items: ["8 hours coverage", "Two photographers", "500+ edited images", "Engagement session", "Heirloom album credit", "Private online gallery"],
    featured: true,
  },
  {
    name: "The Atelier",
    price: "$7,200",
    blurb: "Destination & multi-day weddings",
    items: ["Up to 3 days coverage", "Two photographers", "Unlimited edited images", "Engagement & rehearsal", "Fine art album", "Travel included worldwide"],
  },
];

const testimonials = [
  {
    quote:
      "Elena captured our wedding with such grace. Every image feels like a film still — we'll treasure them forever.",
    name: "Amelia & James",
    where: "Tuscany, Italy",
  },
  {
    quote:
      "The most calming presence on our wedding day. Her work is editorial, warm, and breathtakingly honest.",
    name: "Sophia & Liam",
    where: "Big Sur, California",
  },
  {
    quote:
      "Our family portraits hang in every room. Elena has a gift for making ordinary moments look extraordinary.",
    name: "The Whitmore Family",
    where: "Cotswolds, UK",
  },
];

const instagram = [
  U("photo-1529636798458-92182e662485", 600),
  U("photo-1465495976277-4387d4b0e4a6", 600),
  U("photo-1519225421980-715cb0215aed", 600),
  U("photo-1606216794074-735e91aa2c92", 600),
  U("photo-1507504031003-b417219a0fde", 600),
  U("photo-1519671482749-fd09be7ccebf", 600),
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Portfolio", "#portfolio"],
    ["Services", "#services"],
    ["Journal", "#instagram"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-7 md:px-12">
        <a href="#" className="font-serif text-2xl text-[var(--cream)] tracking-wide">
          Elena<span className="text-[var(--beige-deep)]"> Marsh</span>
        </a>
        <nav className="hidden gap-10 md:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="eyebrow text-[var(--cream)]/80 transition-colors hover:text-[var(--cream)]"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden eyebrow text-[var(--cream)] underline underline-offset-8 decoration-[var(--beige-deep)] md:inline">
          Enquire
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="text-[var(--cream)] md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full bg-charcoal/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-6 px-8 py-8">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="eyebrow text-[var(--cream)]">
                {l}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={U("photo-1519741497674-611481863552", 1920)}
        alt="Bride and groom embracing in golden light"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[var(--cream)]">
        <p className="eyebrow text-[var(--cream)]/80 animate-fade-in">
          Wedding & Portrait Photography
        </p>
        <h1 className="mt-8 max-w-4xl text-5xl leading-[1.05] md:text-7xl lg:text-8xl animate-fade-up">
          Capturing Timeless<br />
          <em className="italic font-light text-[var(--beige)]">Love Stories</em>
        </h1>
        <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[var(--cream)]/85 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Editorial imagery for couples and families who love quiet luxury,
          honest light, and moments that breathe.
        </p>
        <a href="#portfolio" className="btn-luxe-outline mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          View Portfolio
          <span aria-hidden>→</span>
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--cream)]/60">
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-[10px]">Scroll</span>
          <span className="block h-12 w-px bg-[var(--cream)]/40" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1300px] gap-16 md:grid-cols-2 md:gap-24 lg:items-center">
        <div className="relative">
          <img
            src={U("photo-1494790108377-be9c29b29330", 900)}
            alt="Portrait of Elena Marsh"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-[var(--beige-deep)] md:block" />
        </div>
        <div>
          <p className="eyebrow">
            <span className="hairline mr-3" />
            About the Artist
          </p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
            A quiet eye for the<br />
            <em className="italic text-[var(--beige-deep)]">unrepeatable moments.</em>
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I'm Elena — a wedding and portrait photographer based between
              London and the Italian coast. For the past decade I've travelled
              alongside couples and families across four continents, documenting
              the small, breathtaking instants that make a life.
            </p>
            <p>
              My work is rooted in editorial restraint and a love of natural
              light. I believe in fewer, finer images — photographs that feel as
              considered ten years from now as they do the morning after.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-8">
            <Stat n="120+" label="Weddings" />
            <Stat n="22" label="Countries" />
            <Stat n="14" label="Publications" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl">{n}</div>
      <div className="eyebrow mt-1">{label}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--cream)] px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">
              <span className="hairline mr-3" />
              Selected Work
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              The <em className="italic text-[var(--beige-deep)]">Portfolio</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {["Weddings", "Engagements", "Family", "Destinations"].map((c) => (
              <button key={c} className="eyebrow text-foreground/70 transition-colors hover:text-foreground">
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-3 md:gap-6">
          {portfolio.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden ${hClass[p.h]}`}
            >
              <img
                src={p.src}
                alt={p.cat}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="eyebrow text-[var(--cream)]">{p.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            Investment
            <span className="hairline ml-3" />
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">
            Collections crafted with <em className="italic text-[var(--beige-deep)]">care</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Three considered offerings, each tailored to the way you want your
            day remembered. Custom packages available upon request.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`group flex flex-col border p-10 transition-all duration-500 ${
                p.featured
                  ? "border-charcoal bg-charcoal text-[var(--cream)] md:-translate-y-4"
                  : "border-border bg-card hover:-translate-y-1 hover:border-[var(--beige-deep)]"
              }`}
            >
              <p className={`eyebrow ${p.featured ? "text-[var(--beige)]" : ""}`}>{p.blurb}</p>
              <h3 className={`mt-4 text-3xl ${p.featured ? "text-[var(--cream)]" : ""}`}>
                {p.name}
              </h3>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-serif text-5xl">{p.price}</span>
                <span className={`eyebrow ${p.featured ? "text-[var(--beige)]" : ""}`}>starting</span>
              </div>
              <ul className={`mt-10 space-y-3 text-sm ${p.featured ? "text-[var(--cream)]/85" : "text-muted-foreground"}`}>
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3 border-b border-current/15 pb-3 last:border-0">
                    <span className="text-[var(--beige-deep)]">—</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] ${
                  p.featured ? "text-[var(--cream)]" : "text-foreground"
                }`}
              >
                Enquire <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            Kind Words
            <span className="hairline ml-3" />
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">
            From the <em className="italic text-[var(--beige-deep)]">couples</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="flex flex-col">
              <span className="font-serif text-6xl leading-none text-[var(--beige-deep)]">"</span>
              <p className="mt-4 font-serif text-2xl leading-snug">{t.quote}</p>
              <footer className="mt-8">
                <div className="eyebrow text-foreground">{t.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{t.where}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section id="instagram" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">
              <span className="hairline mr-3" />
              The Journal
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Follow along <em className="italic text-[var(--beige-deep)]">@elenamarsh</em>
            </h2>
          </div>
          <a href="#" className="eyebrow text-foreground underline underline-offset-8 decoration-[var(--beige-deep)]">
            View Instagram →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-4">
          {instagram.map((src, i) => (
            <a key={i} href="#" className="group relative block aspect-square overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/30" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal px-6 py-28 text-[var(--cream)] md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1300px] gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="eyebrow text-[var(--beige)]">
            <span className="hairline mr-3 bg-[var(--beige-deep)]" />
            Let's Begin
          </p>
          <h2 className="mt-6 text-4xl text-[var(--cream)] md:text-5xl lg:text-6xl">
            Tell me about your<br />
            <em className="italic text-[var(--beige)]">love story.</em>
          </h2>
          <p className="mt-8 max-w-md text-[var(--cream)]/75">
            I take on a limited number of weddings each year. Share a few details
            and I'll be in touch within 48 hours with a tailored proposal.
          </p>

          <div className="mt-12 space-y-5 text-sm">
            <Detail label="Email" value="hello@elenamarsh.co" />
            <Detail label="Studio" value="14 Lansdowne Walk, London W11" />
            <Detail label="Available" value="Worldwide · 2026 — 2027 dates" />
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="Name" name="name" />
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <Field label="Event Date" name="date" type="date" />
          <Field label="Tell me about your day" name="message" textarea />
          <button type="submit" className="btn-luxe-outline w-full justify-center">
            Send Enquiry <span aria-hidden>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--cream)]/15 pb-4">
      <div className="eyebrow text-[var(--beige)]">{label}</div>
      <div className="mt-1 text-[var(--cream)]">{value}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full border-0 border-b border-[var(--cream)]/30 bg-transparent py-3 text-[var(--cream)] placeholder-[var(--cream)]/40 outline-none transition-colors focus:border-[var(--beige)] [color-scheme:dark]";
  return (
    <label className="block">
      <span className="eyebrow text-[var(--beige)]">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={`${cls} resize-none`} />
      ) : (
        <input type={type} name={name} className={cls} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal border-t border-[var(--cream)]/10 px-6 py-12 text-[var(--cream)] md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-serif text-xl">
          Elena<span className="text-[var(--beige-deep)]"> Marsh</span>
        </div>
        <div className="flex gap-6">
          {["Instagram", "Pinterest", "Vimeo"].map((s) => (
            <a key={s} href="#" className="eyebrow text-[var(--cream)]/70 hover:text-[var(--cream)]">
              {s}
            </a>
          ))}
        </div>
        <p className="eyebrow text-[var(--cream)]/50">
          © {new Date().getFullYear()} — Crafted with care
        </p>
      </div>
    </footer>
  );
}

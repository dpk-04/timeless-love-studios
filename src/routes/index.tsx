import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

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

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

const portfolio = [
  { src: U("photo-1519741497674-611481863552", 1200), h: "tall", cat: "Wedding", title: "Amelia & James" },
  { src: U("photo-1606800052052-a08af7148866", 1200), h: "short", cat: "Engagement", title: "Sussex Coast" },
  { src: U("photo-1583939003579-730e3918a45a", 1200), h: "mid", cat: "Portrait", title: "Sophia, in stillness" },
  { src: U("photo-1511285560929-80b456fea0bc", 1200), h: "tall", cat: "Destination", title: "Villa Cetinale" },
  { src: U("photo-1525258946800-98cfd641d0de", 1200), h: "mid", cat: "Wedding", title: "Olive grove vows" },
  { src: U("photo-1469371670807-013ccf25f16a", 1200), h: "short", cat: "Family", title: "The Whitmores" },
  { src: U("photo-1537907510278-10acdb198d0f", 1200), h: "tall", cat: "Engagement", title: "Dawn, Big Sur" },
  { src: U("photo-1604017011826-d3b4c23f8914", 1200), h: "mid", cat: "Wedding", title: "Candlelit dinner" },
  { src: U("photo-1591604466107-ec97de577aff", 1200), h: "short", cat: "Destination", title: "Cap Ferrat" },
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
    items: ["4 hours of quiet coverage", "One photographer", "200+ hand-edited images", "Private online gallery", "Print release"],
  },
  {
    name: "The Signature",
    price: "$4,800",
    blurb: "Full wedding day, beautifully told",
    items: ["8 hours of coverage", "Two photographers", "500+ hand-edited images", "Engagement session", "Heirloom album credit", "Private online gallery"],
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
      "Elena captured our wedding with such grace. Every image feels like a film still — we'll treasure them for the rest of our lives.",
    name: "Amelia & James",
    where: "Tuscany, Italy",
  },
  {
    quote:
      "The most calming presence on our wedding day. Her work is editorial, warm, and breathtakingly honest in a way photographs rarely are.",
    name: "Sophia & Liam",
    where: "Big Sur, California",
  },
  {
    quote:
      "Our family portraits hang in every room of our home. Elena has a rare gift for making ordinary moments look quietly extraordinary.",
    name: "The Whitmore Family",
    where: "Cotswolds, United Kingdom",
  },
];

const instagram = [
  U("photo-1529636798458-92182e662485", 800),
  U("photo-1465495976277-4387d4b0e4a6", 800),
  U("photo-1519225421980-715cb0215aed", 800),
  U("photo-1606216794074-735e91aa2c92", 800),
  U("photo-1507504031003-b417219a0fde", 800),
  U("photo-1519671482749-fd09be7ccebf", 800),
];

const features = ["Vogue Weddings", "Martha Stewart", "Magnolia Rouge", "Once Wed", "Junebug", "Brides", "Harper's Bazaar"];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "in-view" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Editorial />
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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"],
    ["Portfolio", "#portfolio"],
    ["Services", "#services"],
    ["Journal", "#instagram"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[var(--cream)]/95 backdrop-blur-md text-foreground py-4 shadow-[0_1px_0_var(--beige)]"
          : "bg-transparent text-[var(--cream)] py-7"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-16">
        <a href="#" className="font-serif text-2xl tracking-wide md:text-[26px]">
          Elena<span className="text-[var(--beige-deep)]"> Marsh</span>
        </a>
        <nav className="hidden gap-12 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="eyebrow opacity-80 transition-opacity hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden eyebrow underline underline-offset-8 decoration-[var(--beige-deep)] md:inline">
          Enquire
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full bg-charcoal/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-6 px-8 py-10">
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
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      <img
        src={U("photo-1519741497674-611481863552", 2000)}
        alt="Bride and groom embracing in golden light"
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[var(--cream)]">
        <p className="eyebrow text-[var(--cream)]/85 animate-fade-in">
          <span className="hairline mr-3 bg-[var(--cream)]/50" />
          Wedding & Portrait Photography
          <span className="hairline ml-3 bg-[var(--cream)]/50" />
        </p>
        <h1 className="mt-10 max-w-5xl text-[14vw] leading-[0.98] tracking-[-0.03em] md:text-[8.5vw] lg:text-[7.5rem] animate-fade-up">
          Capturing Timeless
          <br />
          <em className="italic font-light text-[var(--beige)]">Love Stories</em>
        </h1>
        <p
          className="mt-10 max-w-xl text-base font-light leading-loose text-[var(--cream)]/85 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Editorial imagery for couples and families who love quiet luxury,
          honest light, and moments that breathe.
        </p>
        <a
          href="#portfolio"
          className="btn-luxe-outline mt-14 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          View Portfolio
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[var(--cream)]/70 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-[10px]">Scroll</span>
          <span className="block h-14 w-px bg-[var(--cream)]/50" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...features, ...features];
  return (
    <div className="overflow-hidden border-y border-border bg-[var(--cream)] py-8">
      <div className="flex w-max gap-16 animate-[marquee_45s_linear_infinite]">
        {items.map((f, i) => (
          <span key={i} className="eyebrow whitespace-nowrap text-foreground/60">
            ✦ &nbsp; As featured in {f}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto grid max-w-[1400px] gap-20 md:grid-cols-12 md:gap-28 lg:items-center">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <img
              src={U("photo-1494790108377-be9c29b29330", 1200)}
              alt="Portrait of Elena Marsh"
              className="aspect-[4/5] w-full object-cover shadow-[0_30px_80px_-30px_rgba(40,30,20,0.35)]"
            />
            <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 border border-[var(--beige-deep)] md:block" />
            <div className="absolute -top-6 -left-6 hidden h-24 w-24 border border-[var(--beige-deep)]/60 md:block" />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-7">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            About the Artist
          </p>
          <h2 className="mt-8 text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
            A quiet eye for the
            <br />
            <em className="italic text-[var(--beige-deep)]">unrepeatable moments.</em>
          </h2>
          <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-muted-foreground md:max-w-xl">
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
          <div className="mt-14 flex flex-wrap items-center gap-x-14 gap-y-8 border-t border-border pt-10">
            <Stat n="120+" label="Weddings" />
            <Stat n="22" label="Countries" />
            <Stat n="14" label="Publications" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-5xl tracking-tight">{n}</div>
      <div className="eyebrow mt-2">{label}</div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--cream)] px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">
                <span className="hairline mr-3" />
                Selected Work
              </p>
              <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl">
                The <em className="italic text-[var(--beige-deep)]">Portfolio</em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {["Weddings", "Engagements", "Family", "Destinations"].map((c) => (
                <button key={c} className="eyebrow text-foreground/60 transition-colors hover:text-foreground">
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid auto-rows-[220px] grid-cols-2 gap-5 md:auto-rows-[320px] md:grid-cols-3 md:gap-8">
          {portfolio.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.12} className={hClass[p.h]}>
              <figure className="group relative h-full w-full overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-1 p-6 text-[var(--cream)] opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-[var(--beige)]">{p.cat}</span>
                  <span className="font-serif text-2xl italic">{p.title}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <a href="#contact" className="eyebrow inline-flex items-center gap-3 text-foreground underline underline-offset-8 decoration-[var(--beige-deep)]">
            Enquire about a full gallery <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <img
          src={U("photo-1511285560929-80b456fea0bc", 2000)}
          alt="Editorial wedding portrait"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 md:px-16">
          <Reveal className="max-w-2xl text-[var(--cream)]">
            <p className="eyebrow text-[var(--cream)]/80">
              <span className="hairline mr-3 bg-[var(--cream)]/50" />
              Philosophy
            </p>
            <p className="mt-8 font-serif text-3xl italic leading-[1.25] md:text-5xl lg:text-6xl">
              "I photograph the spaces between
              <br />
              the moments everyone remembers."
            </p>
            <p className="mt-10 max-w-md text-[var(--cream)]/80 leading-relaxed">
              — A decade spent learning that the quietest frames are almost
              always the ones you'll hang on the wall.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="text-center">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            Investment
            <span className="hairline ml-3" />
          </p>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl">
            Collections crafted with <em className="italic text-[var(--beige-deep)]">care</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.85] text-muted-foreground">
            Three considered offerings, each tailored to the way you want your
            day remembered. Custom packages available upon request.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-8 md:mt-28 md:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <article
                className={`group flex h-full flex-col border p-12 transition-all duration-700 ${
                  p.featured
                    ? "border-charcoal bg-charcoal text-[var(--cream)] md:-translate-y-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
                    : "border-border bg-card hover:-translate-y-2 hover:border-[var(--beige-deep)] hover:shadow-[0_30px_60px_-30px_rgba(40,30,20,0.25)]"
                }`}
              >
                <p className={`eyebrow ${p.featured ? "text-[var(--beige)]" : ""}`}>{p.blurb}</p>
                <h3 className={`mt-6 font-serif text-4xl ${p.featured ? "text-[var(--cream)]" : ""}`}>
                  {p.name}
                </h3>
                <div className="mt-10 flex items-baseline gap-3">
                  <span className="font-serif text-6xl tracking-tight">{p.price}</span>
                  <span className={`eyebrow ${p.featured ? "text-[var(--beige)]" : ""}`}>starting</span>
                </div>
                <ul className={`mt-12 space-y-4 text-[14px] leading-relaxed ${p.featured ? "text-[var(--cream)]/85" : "text-muted-foreground"}`}>
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-4 border-b border-current/15 pb-4 last:border-0">
                      <span className="text-[var(--beige-deep)]">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-12 inline-flex items-center gap-3 self-start text-[11px] font-medium uppercase tracking-[0.32em] transition-all hover:gap-5 ${
                    p.featured ? "text-[var(--cream)]" : "text-foreground"
                  }`}
                >
                  Enquire <span aria-hidden>→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="text-center">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            Kind Words
            <span className="hairline ml-3" />
          </p>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl">
            From the <em className="italic text-[var(--beige-deep)]">couples</em>
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-14 md:mt-28 md:grid-cols-3 md:gap-16">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <blockquote className="flex h-full flex-col">
                <span className="font-serif text-7xl leading-[0.5] text-[var(--beige-deep)]">"</span>
                <p className="mt-8 font-serif text-[26px] leading-[1.4] tracking-tight">{t.quote}</p>
                <footer className="mt-12 border-t border-border pt-6">
                  <div className="eyebrow text-foreground">{t.name}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{t.where}</div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section id="instagram" className="px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">
                <span className="hairline mr-3" />
                The Journal
              </p>
              <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl">
                Follow along <em className="italic text-[var(--beige-deep)]">@elenamarsh</em>
              </h2>
            </div>
            <a href="#" className="eyebrow text-foreground underline underline-offset-8 decoration-[var(--beige-deep)]">
              View Instagram →
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-6 md:gap-5">
          {instagram.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.08}>
              <a href="#" className="group relative block aspect-square overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/40" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal px-6 py-36 text-[var(--cream)] md:px-16 md:py-56">
      <div className="mx-auto grid max-w-[1400px] gap-20 md:grid-cols-2 md:gap-28">
        <Reveal>
          <p className="eyebrow text-[var(--beige)]">
            <span className="hairline mr-3 bg-[var(--beige-deep)]" />
            Let's Begin
          </p>
          <h2 className="mt-8 text-5xl text-[var(--cream)] md:text-6xl lg:text-7xl">
            Tell me about your
            <br />
            <em className="italic text-[var(--beige)]">love story.</em>
          </h2>
          <p className="mt-10 max-w-md leading-[1.85] text-[var(--cream)]/75">
            I take on a limited number of weddings each year. Share a few details
            and I'll be in touch within 48 hours with a tailored proposal.
          </p>

          <div className="mt-16 space-y-6 text-sm">
            <Detail label="Email" value="hello@elenamarsh.co" />
            <Detail label="Studio" value="14 Lansdowne Walk, London W11" />
            <Detail label="Available" value="Worldwide · 2026 — 2027 dates" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <Field label="Name" name="name" />
            <div className="grid gap-8 md:grid-cols-2">
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Event Date" name="date" type="date" />
            <Field label="Tell me about your day" name="message" textarea />
            <button type="submit" className="btn-luxe-outline w-full justify-center">
              Send Enquiry <span aria-hidden>→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--cream)]/15 pb-5">
      <div className="eyebrow text-[var(--beige)]">{label}</div>
      <div className="mt-2 text-[var(--cream)]">{value}</div>
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
    "w-full border-0 border-b border-[var(--cream)]/30 bg-transparent py-4 text-[var(--cream)] placeholder-[var(--cream)]/40 outline-none transition-colors focus:border-[var(--beige)] [color-scheme:dark]";
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
    <footer className="bg-charcoal border-t border-[var(--cream)]/10 px-6 py-16 text-[var(--cream)] md:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col items-center gap-8 border-b border-[var(--cream)]/10 pb-12 text-center">
          <div className="font-serif text-3xl">
            Elena<span className="text-[var(--beige-deep)]"> Marsh</span>
          </div>
          <p className="eyebrow text-[var(--cream)]/60">Wedding & Portrait Photography · London · Worldwide</p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-8">
            {["Instagram", "Pinterest", "Vimeo"].map((s) => (
              <a key={s} href="#" className="eyebrow text-[var(--cream)]/70 hover:text-[var(--cream)]">
                {s}
              </a>
            ))}
          </div>
          <p className="eyebrow text-[var(--cream)]/50">
            © {new Date().getFullYear()} Elena Marsh — Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}

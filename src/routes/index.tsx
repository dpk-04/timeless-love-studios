import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Instagram } from "@/components/site/Instagram";
import { Reveal } from "@/components/site/Reveal";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import {
  artists,
  portfolioCategories,
  services,
  testimonials,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CraftPhotography — Wedding & Portrait Photography in India" },
      {
        name: "description",
        content:
          "Boutique Indian wedding, pre-wedding, engagement, maternity, baby shower and birthday photography studio. Cinematic, heirloom imagery crafted with care.",
      },
      { property: "og:title", content: "CraftPhotography — Capturing Timeless Love Stories" },
      {
        property: "og:description",
        content:
          "Wedding, pre-wedding, engagement, maternity, baby shower and birthday photography across India.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/images/hero/hero-1.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CraftPhotography — Capturing Timeless Love Stories" },
      { name: "twitter:image", content: "/images/hero/hero-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  "Vogue India",
  "WedMeGood",
  "The Wedding Brigade",
  "ShaadiSaga",
  "Brides Today",
  "Wedding Sutra",
];

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <VideoShowcase />
      <PortfolioTeaser />
      <Editorial />
      <ServicesTeaser />
      <TestimonialsTeaser />
      <Instagram />
      <ContactCta />
    </>
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

function AboutTeaser() {
  return (
    <section className="px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto grid max-w-[1400px] gap-20 md:grid-cols-12 md:gap-28 lg:items-center">
        <Reveal direction="left" className="md:col-span-5">
          <div className="relative">
            <img
              src="/images/team/home-about.jpg"
              alt="The CraftPhotography team"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover shadow-[0_30px_80px_-30px_rgba(40,30,20,0.35)]"
            />
            <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 border border-[var(--beige-deep)] md:block" />
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.15} className="md:col-span-7">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            About CraftPhotography
          </p>
          <h2 className="mt-8 text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
            A quiet eye for the{" "}
            <em className="italic text-[var(--beige-deep)]">unrepeatable moments.</em>
          </h2>
          <div className="mt-10 space-y-6 text-[16px] leading-[1.85] text-muted-foreground md:max-w-xl">
            <p>
              CraftPhotography is a boutique studio led by two artists with over a
              decade of weddings, portraits and celebrations across India. We blend
              editorial restraint with the warmth and colour of Indian life.
            </p>
            <p>
              Our work is rooted in natural light and considered storytelling —
              photographs that feel as honest ten years from now as they do the
              morning after.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-14 gap-y-8 border-t border-border pt-10">
            <Stat n="200+" label="Celebrations" />
            <Stat n="35" label="Cities" />
            <Stat n="12" label="Years" />
          </div>
          <Link to="/about" className="btn-luxe mt-14">
            Read Our Story <span aria-hidden>→</span>
          </Link>
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

function PortfolioTeaser() {
  const cats = portfolioCategories.slice(0, 6);
  return (
    <section className="bg-[var(--cream)] px-6 py-36 md:px-16 md:py-56">
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
            <Link to="/portfolio" className="eyebrow underline underline-offset-8 decoration-[var(--beige-deep)]">
              View all categories →
            </Link>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-5 md:mt-24 md:grid-cols-3 md:gap-8">
          {cats.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.12} direction={i % 2 === 0 ? "up" : "zoom"}>
              <Link to="/portfolio" className="group block">
                <figure className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[var(--cream)]">
                    <span className="eyebrow text-[var(--beige)]">Collection</span>
                    <div className="mt-2 font-serif text-3xl italic">{c.name}</div>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <img
          src="/images/editorial/index-cta.jpg"
          alt="Editorial wedding portrait"
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 md:px-16">
          <Reveal direction="left" className="max-w-2xl text-[var(--cream)]">
            <p className="eyebrow text-[var(--cream)]/80">
              <span className="hairline mr-3 bg-[var(--cream)]/50" />
              Philosophy
            </p>
            <p className="mt-8 font-serif text-3xl italic leading-[1.25] md:text-5xl lg:text-6xl">
              "We photograph the spaces between the moments everyone remembers."
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

function ServicesTeaser() {
  const top = services.slice(0, 3);
  return (
    <section className="px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="text-center">
          <p className="eyebrow">
            <span className="hairline mr-3" />
            Investment
            <span className="hairline ml-3" />
          </p>
          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl">
            Collections crafted with{" "}
            <em className="italic text-[var(--beige-deep)]">care</em>
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-8 md:mt-28 md:grid-cols-3">
          {top.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} direction="up">
              <article className="group flex h-full flex-col border border-border bg-card p-12 transition-all duration-700 hover:-translate-y-2 hover:border-[var(--beige-deep)] hover:shadow-[0_30px_60px_-30px_rgba(40,30,20,0.25)]">
                <p className="eyebrow">{p.blurb}</p>
                <h3 className="mt-6 font-serif text-3xl">{p.name}</h3>
                <div className="mt-10 flex items-baseline gap-3">
                  <span className="font-serif text-5xl tracking-tight">{p.price}</span>
                  <span className="eyebrow">onwards</span>
                </div>
                <Link to="/services" className="mt-12 eyebrow underline underline-offset-8 decoration-[var(--beige-deep)] self-start">
                  Explore →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Link to="/services" className="btn-luxe">
            All Services <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialsTeaser() {
  const top = testimonials.slice(0, 3);
  return (
    <section className="bg-[var(--cream)] px-6 py-36 md:px-16 md:py-56">
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
          {top.map((t, i) => (
            <Reveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <blockquote className="flex h-full flex-col">
                <span className="font-serif text-7xl leading-[0.5] text-[var(--beige-deep)]">"</span>
                <p className="mt-8 font-serif text-[24px] leading-[1.4] tracking-tight">{t.quote}</p>
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

function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-36 text-[var(--cream)] md:px-16 md:py-56">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow text-[var(--beige)]">
            <span className="hairline mr-3 bg-[var(--beige-deep)]" />
            Let's Begin
            <span className="hairline ml-3 bg-[var(--beige-deep)]" />
          </p>
          <h2 className="mt-8 text-5xl md:text-7xl lg:text-[5.5rem] text-[var(--cream)]">
            Tell us about your{" "}
            <em className="italic text-[var(--beige)]">celebration.</em>
          </h2>
          <p className="mx-auto mt-10 max-w-xl leading-[1.85] text-[var(--cream)]/75">
            We take on a limited number of weddings and portrait sessions each
            year. Share a few details and we'll be in touch within 48 hours.
          </p>
          <Link to="/contact" className="btn-luxe-outline mt-14">
            Begin Your Enquiry <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

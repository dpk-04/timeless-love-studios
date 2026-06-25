import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

const SERVICES_COVER = "/images/editorial/services-cover.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — CraftPhotography" },
      {
        name: "description",
        content:
          "Wedding, pre-wedding, maternity, baby shower, birthday and family photography services with transparent pricing in INR.",
      },
      { property: "og:title", content: "Services — CraftPhotography" },
      {
        property: "og:description",
        content: "Bespoke photography collections crafted for Indian celebrations.",
      },
      { property: "og:image", content: SERVICES_COVER },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title="Collections crafted"
        italic="with care."
        subtitle="Transparent pricing in Indian Rupees. Every collection is a starting point — custom proposals available for destination weddings and multi-event coverage."
        image={SERVICES_COVER}
      />

      <section className="px-6 pb-32 md:px-16 md:pb-48">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((p, i) => (
              <Reveal
                key={p.name}
                delay={(i % 3) * 0.1}
                direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
              >
                <article
                  className={`group flex h-full flex-col border p-10 transition-all duration-700 lg:p-12 ${
                    p.featured
                      ? "border-charcoal bg-charcoal text-[var(--cream)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.4)]"
                      : "border-border bg-card hover:-translate-y-2 hover:border-[var(--beige-deep)] hover:shadow-[0_30px_60px_-30px_rgba(40,30,20,0.25)]"
                  }`}
                >
                  <p className={`eyebrow ${p.featured ? "text-[var(--beige)]" : ""}`}>
                    {p.blurb}
                  </p>
                  <h3
                    className={`mt-6 font-serif text-3xl lg:text-4xl ${
                      p.featured ? "text-[var(--cream)]" : ""
                    }`}
                  >
                    {p.name}
                  </h3>
                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="font-serif text-5xl tracking-tight lg:text-6xl">
                      {p.price}
                    </span>
                    <span className={`eyebrow ${p.featured ? "text-[var(--beige)]" : ""}`}>
                      onwards
                    </span>
                  </div>
                  <ul
                    className={`mt-10 space-y-4 text-[14px] leading-relaxed ${
                      p.featured ? "text-[var(--cream)]/85" : "text-muted-foreground"
                    }`}
                  >
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-4 border-b border-current/15 pb-4 last:border-0"
                      >
                        <span className="text-[var(--beige-deep)]">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-10 inline-flex items-center gap-3 self-start text-[11px] font-medium uppercase tracking-[0.32em] transition-all hover:gap-5 ${
                      p.featured ? "text-[var(--cream)]" : "text-foreground"
                    }`}
                  >
                    Enquire <span aria-hidden>→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center">
            <p className="mx-auto max-w-xl text-[15px] leading-[1.85] text-muted-foreground">
              Looking for destination weddings, multi-day events or corporate
              packages? We craft bespoke proposals for every brief.
            </p>
            <Link to="/contact" className="btn-luxe mt-10">
              Request a Custom Quote <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

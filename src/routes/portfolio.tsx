import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { portfolioCategories } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — CraftPhotography" },
      {
        name: "description",
        content:
          "Selected work: weddings, pre-wedding, engagement, maternity, baby shower, birthday, family and event photography.",
      },
      { property: "og:title", content: "Portfolio — CraftPhotography" },
      {
        property: "og:description",
        content: "Cinematic, editorial photography across India.",
      },
      { property: "og:image", content: portfolioCategories[0].cover },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<string>("all");
  const cats = portfolioCategories;
  const images =
    active === "all"
      ? cats.flatMap((c) => c.images.map((src) => ({ src, cat: c.name })))
      : cats
          .find((c) => c.slug === active)!
          .images.map((src) => ({ src, cat: cats.find((c) => c.slug === active)!.name }));

  return (
    <>
      <PageHeader
        eyebrow="The Portfolio"
        title="A decade of"
        italic="celebrations."
        subtitle="Browse our collections by category. Each gallery is a small archive of stories — patient, cinematic, and deeply Indian."
      />

      <section className="px-6 pb-32 md:px-16 md:pb-48">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-y border-border py-8">
              <button
                onClick={() => setActive("all")}
                className={`eyebrow transition-colors ${
                  active === "all" ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                All Work
              </button>
              {cats.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setActive(c.slug)}
                  className={`eyebrow transition-colors ${
                    active === c.slug
                      ? "text-foreground"
                      : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
            {images.map((img, i) => (
              <Reveal
                key={`${active}-${i}`}
                delay={(i % 6) * 0.08}
                direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}
                className={i % 5 === 0 ? "md:row-span-2" : ""}
              >
                <figure
                  className={`group relative h-full w-full overflow-hidden ${
                    i % 5 === 0 ? "aspect-[3/5]" : "aspect-[4/5]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.cat}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-[var(--cream)] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <span className="eyebrow text-[var(--beige)]">{img.cat}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center">
            <Link to="/contact" className="btn-luxe">
              Enquire about a full gallery <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

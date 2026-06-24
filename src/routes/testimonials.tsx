import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — CraftPhotography" },
      {
        name: "description",
        content:
          "Kind words from the couples and families CraftPhotography has had the honour of photographing.",
      },
      { property: "og:title", content: "Testimonials — CraftPhotography" },
      {
        property: "og:description",
        content: "Stories from the couples and families we've photographed.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kind Words"
        title="From the"
        italic="couples & families."
        subtitle="A few notes from the people who have trusted us with their most cherished moments."
      />

      <section className="px-6 pb-32 md:px-16 md:pb-48">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {testimonials.map((t, i) => (
              <Reveal
                key={i}
                delay={(i % 2) * 0.15}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <blockquote className="flex h-full flex-col border border-border bg-card p-10 md:p-14">
                  <span className="font-serif text-7xl leading-[0.5] text-[var(--beige-deep)]">
                    "
                  </span>
                  <p className="mt-8 font-serif text-[24px] leading-[1.45] tracking-tight md:text-[26px]">
                    {t.quote}
                  </p>
                  <footer className="mt-12 border-t border-border pt-6">
                    <div className="eyebrow text-foreground">{t.name}</div>
                    <div className="mt-2 text-xs text-muted-foreground">{t.where}</div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center">
            <Link to="/contact" className="btn-luxe">
              Begin Your Story <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

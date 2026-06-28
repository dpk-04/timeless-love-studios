import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { FeaturedVideoCard } from "@/components/site/VideoShowcase";
import {
  portfolioCategories,
  showcaseVideos,
  type VideoItem,
} from "@/lib/site-data";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title: "Films — CraftPhotography" },
      {
        name: "description",
        content:
          "Cinematic highlight films from weddings, pre-wedding, engagement, maternity, baby shower and birthday celebrations across India.",
      },
      { property: "og:title", content: "Films — CraftPhotography" },
      {
        property: "og:description",
        content: "Cinematic wedding and portrait films across India.",
      },
      { property: "og:image", content: showcaseVideos[0].poster },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: showcaseVideos[0].poster },
    ],
    links: [{ rel: "canonical", href: "/films" }],
  }),
  component: FilmsPage,
});

type FilmSection = {
  slug: string;
  name: string;
  label: string;
  blurb: string;
  videos: VideoItem[];
};

/**
 * Each section pulls its films from `portfolioCategories` in
 * `src/lib/site-data.ts`, which in turn points at files inside
 * `public/videos/<folder>/`. To add or replace films, just drop new
 * `.mp4` files into the matching `public/videos/` folder and update
 * the `videos: [...]` array for that category — no changes needed here.
 */
const SECTION_ORDER: { slug: string; label: string }[] = [
  { slug: "weddings", label: "Wedding Films" },
  { slug: "pre-wedding", label: "Pre-Wedding Films" },
  { slug: "engagement", label: "Engagement Films" },
  { slug: "maternity", label: "Maternity Films" },
  { slug: "baby-shower", label: "Baby Shower Films" },
  { slug: "birthday", label: "Birthday Films" },
];

function FilmsPage() {
  const sections = useMemo<FilmSection[]>(() => {
    const out: FilmSection[] = [];
    for (const { slug, label } of SECTION_ORDER) {
      const cat = portfolioCategories.find((c) => c.slug === slug);
      if (!cat || cat.videos.length === 0) continue;
      out.push({
        slug,
        name: cat.name,
        label,
        blurb: cat.blurb,
        videos: cat.videos.map((v) => ({ ...v, category: v.category ?? label })),
      });
    }
    return out;
  }, []);

  const [active, setActive] = useState<string>("all");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const visibleSections = useMemo(
    () => (active === "all" ? sections : sections.filter((s) => s.slug === active)),
    [active, sections],
  );

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [playing]);

  return (
    <>
      <PageHeader
        eyebrow="Cinematic Films"
        title="Stories in"
        italic="motion."
        subtitle="A curated collection of our highlight films — organised by occasion, from grand Indian weddings to the quietest portrait moments."
      />

      <section className="px-6 pb-12 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-y border-border py-7">
              <button
                onClick={() => setActive("all")}
                className={`eyebrow transition-colors ${
                  active === "all"
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                All Films
              </button>
              {sections.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setActive(s.slug)}
                  className={`eyebrow transition-colors ${
                    active === s.slug
                      ? "text-foreground"
                      : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pb-32 md:pb-48">
        {visibleSections.map((section, sIdx) => (
          <section
            key={section.slug}
            className={`px-6 md:px-16 ${sIdx === 0 ? "pt-6 md:pt-10" : "pt-24 md:pt-32"}`}
          >
            <div className="mx-auto max-w-[1500px]">
              <Reveal>
                <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="eyebrow text-foreground/60">
                      {String(sIdx + 1).padStart(2, "0")} — Collection
                    </p>
                    <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-5xl">
                      {section.label}
                    </h2>
                  </div>
                  <p className="max-w-md text-[15px] leading-[1.85] text-muted-foreground md:text-right">
                    {section.blurb}
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                {section.videos.map((v, i) => (
                  <Reveal
                    key={`${v.src}-${i}`}
                    delay={(i % 3) * 0.1}
                    direction={i % 2 === 0 ? "up" : "zoom"}
                  >
                    <FeaturedVideoCard video={v} onPlay={() => setPlaying(v)} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {visibleSections.length === 0 && (
          <Reveal className="px-6 pt-20 text-center md:px-16">
            <p className="mx-auto max-w-md text-[15px] leading-[1.85] text-muted-foreground">
              Films for this collection are coming soon.
            </p>
          </Reveal>
        )}
      </div>

      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={playing.title}
          onClick={() => setPlaying(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-16 backdrop-blur-md animate-fade-in sm:px-8 sm:py-20"
        >
          <button
            type="button"
            onClick={() => setPlaying(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--cream)]/40 bg-black/60 text-[var(--cream)] backdrop-blur-sm transition-all hover:bg-[var(--cream)] hover:text-[var(--charcoal)] sm:right-6 sm:top-6 md:right-10 md:top-10"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute inset-x-0 top-1/2 block h-px rotate-45 bg-current" />
              <span className="absolute inset-x-0 top-1/2 block h-px -rotate-45 bg-current" />
            </span>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl">
            <video
              src={playing.src}
              poster={playing.poster}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black"
            />
            <div className="mt-6 text-center">
              {playing.category && (
                <p className="eyebrow text-[var(--beige)]">{playing.category}</p>
              )}
              <p className="mt-3 font-serif text-xl italic text-[var(--cream)] sm:text-2xl md:text-3xl">
                {playing.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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

type FilmItem = VideoItem & { category: string };

function FilmsPage() {
  const allFilms = useMemo<FilmItem[]>(() => {
    const fromCategories = portfolioCategories.flatMap((c) =>
      c.videos.map((v) => ({ ...v, category: v.category ?? c.name })),
    );
    const showreels = showcaseVideos.map((v) => ({
      ...v,
      category: v.category ?? "Showreels",
    }));
    // showreels first, then category films
    return [...showreels, ...fromCategories];
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    allFilms.forEach((f) => set.add(f.category));
    return ["All", ...Array.from(set)];
  }, [allFilms]);

  const [active, setActive] = useState<string>("All");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const visible = useMemo(
    () => (active === "All" ? allFilms : allFilms.filter((f) => f.category === active)),
    [active, allFilms],
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
        subtitle="A complete collection of our highlight films — weddings, pre-weddings, engagements and quiet portrait moments."
      />

      <section className="px-6 pb-32 md:px-16 md:pb-48">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-y border-border py-7">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`eyebrow transition-colors ${
                    active === c
                      ? "text-foreground"
                      : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {visible.length ? (
            <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {visible.map((v, i) => (
                <Reveal
                  key={`${v.src}-${i}`}
                  delay={(i % 3) * 0.1}
                  direction={i % 2 === 0 ? "up" : "zoom"}
                >
                  <FeaturedVideoCard video={v} onPlay={() => setPlaying(v)} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mt-20 text-center">
              <p className="mx-auto max-w-md text-[15px] leading-[1.85] text-muted-foreground">
                Films for this collection are coming soon.
              </p>
            </Reveal>
          )}
        </div>
      </section>

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

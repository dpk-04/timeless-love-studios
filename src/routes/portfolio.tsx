import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { VideoCard } from "@/components/site/VideoShowcase";
import { portfolioCategories, type VideoItem } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — CraftPhotography" },
      {
        name: "description",
        content:
          "Selected work: weddings, pre-wedding, engagement, maternity, baby shower and birthday photography — image galleries and cinematic films.",
      },
      { property: "og:title", content: "Portfolio — CraftPhotography" },
      {
        property: "og:description",
        content: "Cinematic, editorial photography and films across India.",
      },
      { property: "og:image", content: portfolioCategories[0].cover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Portfolio — CraftPhotography" },
      { name: "twitter:image", content: portfolioCategories[0].cover },
    ],
  }),
  component: PortfolioPage,
});

type Media = "images" | "films";

function PortfolioPage() {
  const cats = portfolioCategories;
  const [active, setActive] = useState<string>("all");
  const [media, setMedia] = useState<Media>("images");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const current = useMemo(() => {
    if (active === "all") {
      return {
        name: "All Work",
        images: cats.flatMap((c) => c.images.map((src) => ({ src, cat: c.name }))),
        videos: cats.flatMap((c) => c.videos),
      };
    }
    const c = cats.find((c) => c.slug === active)!;
    return {
      name: c.name,
      images: c.images.map((src) => ({ src, cat: c.name })),
      videos: c.videos,
    };
  }, [active, cats]);

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
        eyebrow="The Portfolio"
        title="A decade of"
        italic="celebrations."
        subtitle="Browse our collections by category — image galleries and cinematic films, patient and deeply Indian."
      />

      <section className="px-6 pb-32 md:px-16 md:pb-48">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-y border-border py-7">
              <FilterButton active={active === "all"} onClick={() => setActive("all")}>
                All Work
              </FilterButton>
              {cats.map((c) => (
                <FilterButton
                  key={c.slug}
                  active={active === c.slug}
                  onClick={() => setActive(c.slug)}
                >
                  {c.name}
                </FilterButton>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex items-center justify-center gap-2">
              <MediaTab active={media === "images"} onClick={() => setMedia("images")}>
                Images <span className="ml-2 text-foreground/40">{current.images.length}</span>
              </MediaTab>
              <span className="text-foreground/30">·</span>
              <MediaTab active={media === "films"} onClick={() => setMedia("films")}>
                Films <span className="ml-2 text-foreground/40">{current.videos.length}</span>
              </MediaTab>
            </div>
          </Reveal>

          {media === "images" ? (
            <div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-3 md:gap-8">
              {current.images.map((img, i) => (
                <Reveal
                  key={`${active}-img-${i}`}
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
                      alt={`${img.cat} — CraftPhotography`}
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
          ) : current.videos.length ? (
            <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {current.videos.map((v, i) => (
                <Reveal
                  key={`${active}-vid-${i}`}
                  delay={(i % 3) * 0.1}
                  direction={i % 2 === 0 ? "up" : "zoom"}
                >
                  <VideoCard video={v} onPlay={() => setPlaying(v)} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mt-20 text-center">
              <p className="mx-auto max-w-md text-[15px] leading-[1.85] text-muted-foreground">
                Films for this collection are coming soon. In the meantime, the
                gallery above is a good place to start.
              </p>
            </Reveal>
          )}

          <Reveal className="mt-24 text-center">
            <Link to="/contact" className="btn-luxe">
              Enquire about a full gallery <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={playing.title}
          onClick={() => setPlaying(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-10 backdrop-blur-md animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setPlaying(null)}
            aria-label="Close video"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center text-[var(--cream)] transition-opacity hover:opacity-70 md:right-10 md:top-10"
          >
            <span className="relative block h-5 w-5">
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
              <p className="eyebrow text-[var(--beige)]">{playing.caption}</p>
              <p className="mt-3 font-serif text-2xl italic text-[var(--cream)] md:text-3xl">
                {playing.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`eyebrow transition-colors ${
        active ? "text-foreground" : "text-foreground/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function MediaTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 text-[11px] font-medium uppercase tracking-[0.32em] transition-all ${
        active
          ? "border-b border-[var(--beige-deep)] text-foreground"
          : "border-b border-transparent text-foreground/45 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

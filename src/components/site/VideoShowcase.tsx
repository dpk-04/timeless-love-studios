import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { showcaseVideos, type VideoItem } from "@/lib/site-data";

export function VideoShowcase() {
  const [active, setActive] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="bg-charcoal px-6 py-36 text-[var(--cream)] md:px-16 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="text-center">
          <p className="eyebrow text-[var(--beige)]">
            <span className="hairline mr-3 bg-[var(--beige-deep)]" />
            Cinematic Films
            <span className="hairline ml-3 bg-[var(--beige-deep)]" />
          </p>
          <h2 className="mt-8 text-5xl text-[var(--cream)] md:text-6xl lg:text-7xl">
            Stories in <em className="italic text-[var(--beige)]">motion</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl leading-[1.85] text-[var(--cream)]/75">
            A small selection of our cinematic highlight films — 30 to 60 seconds
            of the slow, considered moments we live for.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:mt-24 md:grid-cols-3 md:gap-8">
          {showcaseVideos.map((v, i) => (
            <Reveal
              key={v.src}
              delay={i * 0.12}
              direction={i % 2 === 0 ? "up" : "zoom"}
            >
              <VideoCard video={v} onPlay={() => setActive(v)} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export function VideoCard({
  video,
  onPlay,
}: {
  video: VideoItem;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play ${video.title}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden bg-black text-left"
    >
      <img
        src={video.poster}
        alt={video.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-[1800ms] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--cream)]/60 bg-[var(--cream)]/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--cream)] group-hover:bg-[var(--cream)]/20 md:h-24 md:w-24">
        <svg
          viewBox="0 0 24 24"
          className="ml-1 h-7 w-7 fill-[var(--cream)] md:h-8 md:w-8"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>

      <span className="absolute inset-x-0 bottom-0 p-6 text-[var(--cream)] md:p-8">
        <span className="eyebrow text-[var(--beige)]">{video.caption}</span>
        <span className="mt-2 block font-serif text-2xl italic md:text-3xl">
          {video.title}
        </span>
      </span>
    </button>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-16 backdrop-blur-md animate-fade-in sm:px-8 sm:py-20"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--cream)]/40 bg-black/60 text-[var(--cream)] backdrop-blur-sm transition-all hover:bg-[var(--cream)] hover:text-[var(--charcoal)] sm:right-6 sm:top-6 md:right-10 md:top-10"
      >
        <span className="relative block h-4 w-4">
          <span className="absolute inset-x-0 top-1/2 block h-px rotate-45 bg-current" />
          <span className="absolute inset-x-0 top-1/2 block h-px -rotate-45 bg-current" />
        </span>
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        <video
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black"
        />
        <div className="mt-6 text-center">
          <p className="eyebrow text-[var(--beige)]">{video.caption}</p>
          <p className="mt-3 font-serif text-xl italic text-[var(--cream)] sm:text-2xl md:text-3xl">
            {video.title}
          </p>
        </div>
      </div>
    </div>
  );
}

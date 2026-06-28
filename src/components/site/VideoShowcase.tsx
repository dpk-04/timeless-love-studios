import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { showcaseVideos, type VideoItem } from "@/lib/site-data";

export function VideoShowcase() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const featured = showcaseVideos.slice(0, 3);

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
            Featured Films
            <span className="hairline ml-3 bg-[var(--beige-deep)]" />
          </p>
          <h2 className="mt-8 text-5xl text-[var(--cream)] md:text-6xl lg:text-7xl">
            Stories in <em className="italic text-[var(--beige)]">motion</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl leading-[1.85] text-[var(--cream)]/75">
            Three of our latest cinematic highlight films — hover to preview,
            click to watch in full.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-8 md:mt-28 md:grid-cols-3 md:gap-10">
          {featured.map((v, i) => (
            <Reveal
              key={v.src}
              delay={i * 0.14}
              direction={i % 2 === 0 ? "up" : "zoom"}
            >
              <FeaturedVideoCard video={v} onPlay={() => setActive(v)} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center md:mt-28">
          <Link to="/films" className="btn-luxe-light group">
            View All Films
            <span
              aria-hidden
              className="ml-1 inline-block transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>

      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export function FeaturedVideoCard({
  video,
  onPlay,
}: {
  video: VideoItem;
  onPlay: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);

  const handleEnter = () => {
    setHovering(true);
    const el = videoRef.current;
    if (el) {
      el.currentTime = 0;
      el.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    setHovering(false);
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      onClick={onPlay}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      aria-label={`Play ${video.title}`}
      className="group relative block aspect-[4/5] w-full overflow-hidden bg-black text-left"
    >
      <img
        src={video.poster}
        alt={video.title}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
          hovering ? "scale-[1.06] opacity-0" : "scale-100 opacity-90"
        }`}
      />
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
          hovering ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/40 transition-opacity duration-700 group-hover:from-black/70" />

      {video.duration && (
        <span className="pointer-events-none absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-[var(--cream)]/30 bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--cream)] backdrop-blur-sm">
          <span className="block h-1 w-1 rounded-full bg-[var(--beige)]" />
          {video.duration}
        </span>
      )}

      <span
        className={`pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--cream)]/60 bg-[var(--cream)]/10 backdrop-blur-sm transition-all duration-700 md:h-24 md:w-24 ${
          hovering
            ? "scale-90 opacity-0"
            : "scale-100 opacity-100 group-hover:scale-110"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="ml-1 h-7 w-7 fill-[var(--cream)] md:h-8 md:w-8"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-[var(--cream)] md:p-9">
        {video.category && (
          <span className="eyebrow text-[var(--beige)]">{video.category}</span>
        )}
        <span className="mt-3 block font-serif text-2xl italic leading-tight md:text-3xl">
          {video.title}
        </span>
        {video.caption && (
          <span className="mt-2 block text-[13px] leading-relaxed text-[var(--cream)]/70">
            {video.caption}
          </span>
        )}
      </span>
    </button>
  );
}

// Backwards-compatible export used by Portfolio route
export const VideoCard = FeaturedVideoCard;

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
          {video.category && (
            <p className="eyebrow text-[var(--beige)]">{video.category}</p>
          )}
          <p className="mt-3 font-serif text-xl italic text-[var(--cream)] sm:text-2xl md:text-3xl">
            {video.title}
          </p>
        </div>
      </div>
    </div>
  );
}

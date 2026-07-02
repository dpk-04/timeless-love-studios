import { useEffect, useRef, useState } from "react";

export type LightboxImage = { src: string; cat?: string; alt?: string };

export function ImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;
  const current = images[index];

  const next = () => onIndexChange((index + 1) % total);
  const prev = () => onIndexChange((index - 1 + total) % total);

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total]);

  // preload neighbours
  useEffect(() => {
    [1, -1].forEach((d) => {
      const img = new Image();
      img.src = images[(index + d + total) % total].src;
    });
  }, [index, images, total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || "Image viewer"}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-16 backdrop-blur-md animate-fade-in sm:px-8 sm:py-20"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--cream)]/40 bg-black/60 text-[var(--cream)] backdrop-blur-sm transition-all hover:bg-[var(--cream)] hover:text-[var(--charcoal)] sm:right-6 sm:top-6 md:right-10 md:top-10"
      >
        <span className="relative block h-4 w-4">
          <span className="absolute inset-x-0 top-1/2 block h-px rotate-45 bg-current" />
          <span className="absolute inset-x-0 top-1/2 block h-px -rotate-45 bg-current" />
        </span>
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--cream)]/40 bg-black/50 text-[var(--cream)] backdrop-blur-sm transition-all hover:bg-[var(--cream)] hover:text-[var(--charcoal)] sm:left-6 md:left-10 md:h-14 md:w-14"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--cream)]/40 bg-black/50 text-[var(--cream)] backdrop-blur-sm transition-all hover:bg-[var(--cream)] hover:text-[var(--charcoal)] sm:right-6 md:right-10 md:h-14 md:w-14"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-full w-full max-w-6xl items-center justify-center"
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt || current.cat || "Portfolio image"}
          onLoad={() => setLoaded(true)}
          className={`max-h-full max-w-full object-contain transition-all duration-700 ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
          }`}
          style={{ maxHeight: "calc(100vh - 10rem)" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-center text-[var(--cream)] sm:bottom-8">
        {current.cat && (
          <p className="eyebrow text-[var(--beige)]">{current.cat}</p>
        )}
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--cream)]/70">
          {index + 1} / {total}
        </p>
      </div>
    </div>
  );
}

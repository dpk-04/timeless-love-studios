import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {heroSlides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === idx ? "opacity-100 animate-slow-zoom" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/80" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[var(--cream)]">
        <p className="eyebrow text-[var(--cream)]/85 animate-fade-in">
          <span className="hairline mr-3 bg-[var(--cream)]/50" />
          Wedding & Portrait Photography
          <span className="hairline ml-3 bg-[var(--cream)]/50" />
        </p>
        <h1 className="mt-10 max-w-5xl text-[14vw] leading-[0.98] tracking-[-0.03em] md:text-[8.5vw] lg:text-[7.5rem] animate-fade-up">
          Capturing Timeless
          <br />
          <em className="italic font-light text-[var(--beige)]">Love Stories</em>
        </h1>
        <p
          className="mt-10 max-w-xl text-base font-light leading-loose text-[var(--cream)]/85 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          A boutique Indian photography studio crafting cinematic imagery for
          weddings, portraits and life's most cherished celebrations.
        </p>
        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-5 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <Link to="/portfolio" className="btn-luxe-light">
            View Portfolio <span aria-hidden>→</span>
          </Link>
          <Link to="/contact" className="btn-luxe-outline">
            Enquire <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 text-[var(--cream)]/70 animate-fade-in md:block"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-[10px]">Scroll</span>
          <span className="block h-14 w-px bg-[var(--cream)]/50" />
        </div>
      </div>

      <div className="absolute bottom-10 right-8 z-10 hidden gap-2 md:flex">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-px w-10 transition-all duration-700 ${
              i === idx ? "bg-[var(--cream)]" : "bg-[var(--cream)]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

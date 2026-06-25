import { BRAND, instagramImages } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Instagram() {
  return (
    <section className="px-6 py-36 md:px-16 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">
                <span className="hairline mr-3" />
                The Journal
              </p>
              <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl">
                Follow along{" "}
                <em className="italic text-[var(--beige-deep)]">{BRAND.instagramHandle}</em>
              </h2>
            </div>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxe"
            >
              View on Instagram <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-6 md:gap-5">
          {instagramImages.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt="Instagram post"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/40" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

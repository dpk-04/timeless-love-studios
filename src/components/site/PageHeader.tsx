import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--cream)] pt-40 pb-24 md:pt-56 md:pb-32">
      {image && (
        <>
          <img
            src={image}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover opacity-30 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)]/40 via-[var(--cream)]/70 to-[var(--cream)]" />
        </>
      )}
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-16">
        <Reveal>
          <p className="eyebrow">
            <span className="hairline mr-3" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-8 text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
            {title}{" "}
            {italic && <em className="italic text-[var(--beige-deep)]">{italic}</em>}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-[16px] leading-[1.85] text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

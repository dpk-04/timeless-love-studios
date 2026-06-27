import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { artists } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CraftPhotography" },
      {
        name: "description",
        content:
          "Meet the artists behind CraftPhotography — a boutique Indian wedding and portrait studio crafting cinematic, heirloom imagery.",
      },
      { property: "og:title", content: "About CraftPhotography" },
      {
        property: "og:description",
        content:
          "Two artists, one studio, a decade of weddings and portraits across India.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: artists[0].image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About CraftPhotography" },
      { name: "twitter:image", content: artists[0].image },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="The artists behind"
        italic="CraftPhotography."
        subtitle="Two photographers, one studio, and a shared belief that the quietest frames are the ones you'll hang on the wall."
        image="/images/editorial/about-cover.jpg"
      />

      <section className="px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-[1300px] space-y-32 md:space-y-48">
          {artists.map((a, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={a.name}
                className={`grid gap-16 md:grid-cols-12 md:gap-24 lg:items-center ${
                  reverse ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <Reveal direction={reverse ? "right" : "left"} className="md:col-span-5">
                  <div className="relative">
                    <img
                      src={a.image}
                      alt={a.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover shadow-[0_30px_80px_-30px_rgba(40,30,20,0.35)] transition-transform duration-[1800ms] ease-out hover:scale-[1.02]"
                    />
                    <div
                      className={`absolute hidden h-40 w-40 border border-[var(--beige-deep)] md:block ${
                        reverse ? "-top-6 -left-6" : "-bottom-8 -right-8"
                      }`}
                    />
                  </div>
                </Reveal>
                <Reveal
                  direction={reverse ? "left" : "right"}
                  delay={0.15}
                  className="md:col-span-7"
                >
                  <p className="eyebrow">
                    <span className="hairline mr-3" />
                    {a.role}
                  </p>
                  <h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl">
                    <em className="italic text-[var(--beige-deep)]">{a.name}</em>
                  </h2>
                  <p className="mt-10 text-[16px] leading-[1.9] text-muted-foreground md:max-w-xl">
                    {a.bio}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--cream)] px-6 py-32 md:px-16 md:py-48">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="text-center">
            <p className="eyebrow">
              <span className="hairline mr-3" />
              Our Story
              <span className="hairline ml-3" />
            </p>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl">
              A studio built on{" "}
              <em className="italic text-[var(--beige-deep)]">passion & craft.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-16 max-w-2xl space-y-8 text-[17px] leading-[1.95] text-muted-foreground">
              <p>
                CraftPhotography began with a simple belief — that photographs
                are the closest thing we have to time travel. Founded over a
                decade ago, our studio has grown into a small, devoted team of
                two artists with a shared eye for warmth, light and honesty.
              </p>
              <p>
                We've documented weddings in havelis and on beaches, intimate
                maternity sessions at home, baby showers brimming with marigolds,
                engagement evenings on quiet rooftops, and milestone birthdays
                lit only by candlelight. Through it all, our approach has stayed
                the same — patient, unhurried, and deeply human.
              </p>
              <p>
                Every gallery we deliver is a small archive of feeling. That is
                the craft we have devoted ourselves to, and the promise we
                quietly make to every couple and family we work with.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-14 text-center">
            <Link to="/contact" className="btn-luxe">
              Work With Us <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

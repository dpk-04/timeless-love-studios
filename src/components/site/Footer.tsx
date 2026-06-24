import { Link } from "@tanstack/react-router";
import { BRAND, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-[var(--cream)]/10 px-6 py-20 text-[var(--cream)] md:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 border-b border-[var(--cream)]/10 pb-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl">
              Craft<span className="text-[var(--beige-deep)]">Photography</span>
            </div>
            <p className="eyebrow mt-4 text-[var(--cream)]/60">
              Wedding & Portrait Photography · India · Worldwide
            </p>
            <p className="mt-8 max-w-md leading-[1.85] text-[var(--cream)]/70">
              {BRAND.tagline}. A boutique studio crafting heirloom imagery
              for weddings, families and life's most cherished celebrations.
            </p>
          </div>
          <div>
            <div className="eyebrow text-[var(--beige)]">Explore</div>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[var(--cream)]/75 hover:text-[var(--cream)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow text-[var(--beige)]">Contact</div>
            <ul className="mt-6 space-y-3 text-[var(--cream)]/75">
              <li>{BRAND.email}</li>
              <li>{BRAND.phone}</li>
              <li>{BRAND.studio}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-8">
            <a href={BRAND.instagram} className="eyebrow text-[var(--cream)]/70 hover:text-[var(--cream)]">
              Instagram
            </a>
            <a href="#" className="eyebrow text-[var(--cream)]/70 hover:text-[var(--cream)]">
              Pinterest
            </a>
            <a href="#" className="eyebrow text-[var(--cream)]/70 hover:text-[var(--cream)]">
              YouTube
            </a>
          </div>
          <p className="eyebrow text-[var(--cream)]/50">
            © {new Date().getFullYear()} {BRAND.name} — Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
}

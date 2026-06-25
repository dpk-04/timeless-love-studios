import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRAND, navLinks } from "@/lib/site-data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        transparent
          ? "bg-transparent text-[var(--cream)] py-6 md:py-7"
          : "bg-[var(--cream)]/95 backdrop-blur-md text-foreground py-4 shadow-[0_1px_0_var(--beige)]"
      }`}
    >
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:flex md:max-w-[1500px] md:px-16">
        <Link
          to="/"
          className="font-serif text-[22px] tracking-wide md:text-[26px] min-w-0 truncate"
          aria-label="CraftPhotography — Home"
        >
          Craft<span className="text-[var(--beige-deep)]">Photography</span>
        </Link>
        <nav className="hidden gap-10 md:flex md:flex-1 md:justify-center">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow opacity-80 transition-opacity hover:opacity-100"
              activeProps={{
                className:
                  "eyebrow opacity-100 underline underline-offset-8 decoration-[var(--beige-deep)]",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden eyebrow underline underline-offset-8 decoration-[var(--beige-deep)] md:inline"
        >
          Enquire
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <div className="relative h-4 w-5">
              <span className="absolute inset-x-0 top-1/2 block h-px rotate-45 bg-current" />
              <span className="absolute inset-x-0 top-1/2 block h-px -rotate-45 bg-current" />
            </div>
          ) : (
            <div className="space-y-1.5">
              <span className="block h-px w-7 bg-current" />
              <span className="block h-px w-7 bg-current" />
            </div>
          )}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            backgroundColor: "var(--charcoal)",
          }}
        >
          <div className="flex h-full flex-col gap-8 px-8 pt-14 pb-16">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-serif text-3xl text-[var(--cream)]/85 transition-colors hover:text-[var(--cream)]"
                activeProps={{
                  className:
                    "font-serif text-3xl text-[var(--cream)] italic",
                }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-auto space-y-3 border-t border-[var(--cream)]/15 pt-8">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow block text-[var(--beige)]"
              >
                {BRAND.instagramHandle}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="block text-[var(--cream)]/80"
              >
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="block text-[var(--cream)]/80"
              >
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        transparent
          ? "bg-transparent text-[var(--cream)] py-7"
          : "bg-[var(--cream)]/95 backdrop-blur-md text-foreground py-4 shadow-[0_1px_0_var(--beige)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-16">
        <Link to="/" className="font-serif text-2xl tracking-wide md:text-[26px]">
          Craft<span className="text-[var(--beige-deep)]">Photography</span>
        </Link>
        <nav className="hidden gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow opacity-80 transition-opacity hover:opacity-100"
              activeProps={{ className: "eyebrow opacity-100 underline underline-offset-8 decoration-[var(--beige-deep)]" }}
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
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full bg-charcoal/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-6 px-8 py-10">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="eyebrow text-[var(--cream)]">
                {l.label}
              </Link>
            ))}
            <a href={BRAND.instagram} className="eyebrow text-[var(--beige)]">
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

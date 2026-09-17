"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Films" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-sm py-4 shadow-[0_1px_0_var(--color-line)]"
          : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1180px] px-8 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide">
          Stewart<span className="text-gold">Films</span>
        </Link>

        <nav
          className={`fixed md:static top-0 right-0 h-screen md:h-auto w-70 md:w-auto bg-bg-alt md:bg-transparent border-l md:border-l-0 border-line px-10 md:px-0 pt-28 md:pt-0 transition-transform duration-300 md:translate-x-0 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-7 md:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`font-ui text-[13px] tracking-[0.15em] uppercase relative pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                      isActive
                        ? "text-gold after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1.5"
        >
          <span className="w-6.5 h-px bg-ink" />
          <span className="w-6.5 h-px bg-ink" />
          <span className="w-6.5 h-px bg-ink" />
        </button>
      </div>
    </header>
  );
}

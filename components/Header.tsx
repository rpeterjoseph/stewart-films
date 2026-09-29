const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#media", label: "Media" },
  { href: "#packages", label: "Packages" },
];

export default function Header() {
  return (
    <header className="py-8 border-b border-line">
      <div className="mx-auto max-w-[1000px] px-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#home" className="font-display text-2xl">
          Stewart Films
        </a>
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 sm:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-ui text-xs tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

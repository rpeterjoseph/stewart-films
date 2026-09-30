const LEFT_LINKS = [
  { href: "#about", label: "About" },
  { href: "#media", label: "Media" },
  { href: "#reviews", label: "Reviews" },
];

const RIGHT_LINKS = [
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
  { href: "tel:+15555550142", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col md:flex-row items-center gap-5 md:gap-0">
        <nav className="order-2 md:order-1">
          <ul className="flex flex-wrap justify-center gap-7">
            {LEFT_LINKS.map((link) => (
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

        <a href="#home" className="order-1 md:order-2 md:mx-auto flex flex-col items-center shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent mb-1.5">
            <path d="M12 3l9 18H3z" strokeWidth="1.5" />
          </svg>
          <span className="font-display text-xl leading-none">Stewart Storytelling</span>
          <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-ink-muted mt-1">
            Wedding Videography
          </span>
        </a>

        <nav className="order-3">
          <ul className="flex flex-wrap justify-center gap-7">
            {RIGHT_LINKS.map((link) => (
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

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-8">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12">
          <div>
            <Link href="/" className="font-display text-2xl tracking-wide">
              Stewart<span className="text-gold">Films</span>
            </Link>
            <p className="mt-5 max-w-70 text-ink-muted">
              Cinematic wedding films for couples who want their day
              remembered, not just recorded.
            </p>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-[0.15em] uppercase text-gold mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-ink-muted">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-gold transition-colors">Films</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-[0.15em] uppercase text-gold mb-5">
              Studio
            </h4>
            <ul className="space-y-3 text-ink-muted">
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/about#packages" className="hover:text-gold transition-colors">Packages</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Availability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-ui text-xs tracking-[0.15em] uppercase text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-ink-muted">
              <li>
                <a href="mailto:hello@stewartfilms.com" className="hover:text-gold transition-colors">
                  hello@stewartfilms.com
                </a>
              </li>
              <li>
                <a href="tel:+15555550142" className="hover:text-gold transition-colors">
                  (555) 555-0142
                </a>
              </li>
              <li>Based in Charleston, SC</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3.5 pt-7 border-t border-line font-ui text-xs text-ink-muted">
          <span>&copy; {new Date().getFullYear()} Stewart Films. All rights reserved.</span>
          <span>Instagram &middot; Vimeo &middot; Pinterest</span>
        </div>
      </div>
    </footer>
  );
}

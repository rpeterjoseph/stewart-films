export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <div className="font-display text-2xl mb-3">Stewart Films</div>
        <p className="text-ink-muted">Greenville &amp; the Upstate of South Carolina</p>
        <p className="mt-2">
          <a href="tel:+15555550142" className="font-ui text-xs tracking-[0.15em] uppercase text-accent hover:text-ink transition-colors">
            Call or Text (555) 555-0142
          </a>
        </p>
        <p className="mt-8 font-ui text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} Stewart Films. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

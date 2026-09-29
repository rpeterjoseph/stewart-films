export default function Footer() {
  return (
    <footer>
      <div className="bg-ink text-bg py-24 text-center">
        <div className="mx-auto max-w-[640px] px-6">
          <span className="font-ui text-xs tracking-[0.3em] uppercase text-accent block mb-5">
            Let&rsquo;s Talk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-8">
            Ready to capture your day?
          </h2>
          <a
            href="tel:+15555550142"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-8 py-4 bg-accent text-white hover:bg-bg hover:text-ink transition-colors"
          >
            Call or Text (555) 555-0142
          </a>
        </div>
      </div>

      <div className="border-t border-line py-10">
        <div className="mx-auto max-w-[1160px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-display text-xl">Stewart Films</div>
          <p className="text-xs text-ink-muted">
            Greenville &amp; the Upstate of South Carolina
          </p>
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Stewart Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

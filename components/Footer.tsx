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
            href="tel:+18643265647"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-8 py-4 bg-accent text-white hover:bg-bg hover:text-ink transition-colors"
          >
            Call or Text (864) 326-5647
          </a>
          <p className="mt-5 text-sm text-bg/70">
            or email{" "}
            <a href="mailto:stewartramakuri@gmail.com" className="hover:text-accent transition-colors">
              stewartramakuri@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-line py-10">
        <div className="mx-auto max-w-[1160px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-display text-xl">Stewart Storytelling</div>
          <div className="text-xs text-ink-muted space-y-1.5">
            <p>Greenville &amp; the Upstate of South Carolina</p>
            <p>
              <a href="tel:+18643265647" className="hover:text-accent transition-colors">
                (864) 326-5647
              </a>
              {" "}&middot;{" "}
              <a href="mailto:stewartramakuri@gmail.com" className="hover:text-accent transition-colors">
                stewartramakuri@gmail.com
              </a>
            </p>
          </div>
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Stewart Storytelling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

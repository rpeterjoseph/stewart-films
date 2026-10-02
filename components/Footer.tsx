import { EMAIL, EMAIL_MAILTO, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

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
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-8 py-4 bg-accent text-white hover:bg-bg hover:text-ink transition-colors"
          >
            Call or Text {PHONE_DISPLAY}
          </a>
          <p className="mt-5 text-sm text-bg/70">
            or email{" "}
            <a href={EMAIL_MAILTO} className="hover:text-accent transition-colors">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-line py-10">
        <div className="mx-auto max-w-[1160px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-display text-xl">Stewart&rsquo;s Storytelling</div>
          <div className="text-xs text-ink-muted space-y-1.5">
            <p>Greenville &amp; the Upstate of South Carolina</p>
            <p>
              <a href={PHONE_TEL} className="hover:text-accent transition-colors">
                {PHONE_DISPLAY}
              </a>
              {" "}&middot;{" "}
              <a href={EMAIL_MAILTO} className="hover:text-accent transition-colors">
                {EMAIL}
              </a>
            </p>
          </div>
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Stewart&rsquo;s Storytelling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

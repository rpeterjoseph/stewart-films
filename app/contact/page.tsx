import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stewart Films to check availability and start planning your wedding film.",
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 7.5c-.1 2.2-1.6 5.2-4.6 9-3.1 4-5.7 6-7.8 6-1.3 0-2.4-1.2-3.3-3.6L4.6 12C4 9.6 3.3 8.4 2.6 8.4c-.2 0-.7.3-1.6.9L0 8.1c1-.9 2-1.8 2.9-2.7C4.3 4.1 5.3 3.4 6 3.3c1.5-.1 2.4 1 2.8 3.3.4 2.5.7 4 .9 4.6.5 2.2 1 3.3 1.6 3.3.5 0 1.1-.7 2-2.2.9-1.4 1.3-2.5 1.4-3.3.1-1.2-.4-1.9-1.5-1.9-.5 0-1.1.1-1.6.3 1.1-3.5 3.1-5.2 6.1-5.1 2.2.1 3.3 1.5 3.3 4.2z"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 19c1-3 1.7-5.4 2.2-7.3.3 1 1.4 1.8 2.6 1.8 2.2 0 3.7-2 3.7-4.6 0-2.2-1.9-4-4.5-4-3.2 0-4.9 2.2-4.9 4.5 0 1.1.6 2.4 1.4 3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section
        className="min-h-[46vh] flex items-center bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.92) 100%), url('https://picsum.photos/id/1080/1800/700')",
        }}
      >
        <div className="mx-auto max-w-[1180px] px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-5">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-tight">
              Let&rsquo;s talk about your day.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-5">
                Studio Info
              </span>
              <h2 className="font-display text-4xl font-medium mb-5">
                We&rsquo;d love to hear your story.
              </h2>
              <p className="text-ink-muted text-xl">
                Fill out the form and we&rsquo;ll follow up within 48 hours to
                schedule a discovery call. We take a limited number of
                weddings each year, so the earlier you reach out, the better.
              </p>

              <dl className="mt-10">
                <dt className="font-ui text-xs tracking-[0.15em] uppercase text-gold mt-6.5">Email</dt>
                <dd className="text-lg text-ink-muted mt-1.5">hello@stewartfilms.com</dd>

                <dt className="font-ui text-xs tracking-[0.15em] uppercase text-gold mt-6.5">Phone</dt>
                <dd className="text-lg text-ink-muted mt-1.5">(555) 555-0142</dd>

                <dt className="font-ui text-xs tracking-[0.15em] uppercase text-gold mt-6.5">Studio</dt>
                <dd className="text-lg text-ink-muted mt-1.5">Charleston, South Carolina</dd>

                <dt className="font-ui text-xs tracking-[0.15em] uppercase text-gold mt-6.5">Availability</dt>
                <dd className="text-lg text-ink-muted mt-1.5">Booking weddings for 2026 &amp; 2027</dd>
              </dl>

              <div className="flex gap-4.5 mt-9">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-line flex items-center justify-center transition-colors hover:border-gold hover:text-gold"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="mt-22 h-85 border border-line flex items-center justify-center bg-bg-alt font-ui text-[13px] tracking-[0.15em] uppercase text-ink-muted">
            Studio Location &middot; Charleston, SC
          </div>
        </div>
      </section>
    </>
  );
}

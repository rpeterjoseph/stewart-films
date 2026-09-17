import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    title: "Cinematic Craft",
    body: "Shot on professional cinema cameras with natural light and considered composition — every frame feels intentional.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Unobtrusive Presence",
    body: "You'll forget we're there. Our team moves quietly through your day so nothing feels staged or performed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-7-4.35-9.5-9C.8 8.2 3 4 7 4c2 0 3.6 1.2 5 3 1.4-1.8 3-3 5-3 4 0 6.2 4.2 4.5 8-2.5 4.65-9.5 9-9.5 9z" />
      </svg>
    ),
  },
  {
    title: "Full-Day Coverage",
    body: "From getting-ready light to the last dance, every meaningful beat of your day is captured, not just the highlights.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M4 10h16" />
      </svg>
    ),
  },
];

const FEATURED_FILMS = [
  { name: "Elena & Marco", place: "Amalfi Coast, Italy", image: "https://picsum.photos/id/1011/700/900" },
  { name: "Priya & Sam", place: "Hudson Valley, NY", image: "https://picsum.photos/id/1025/700/900" },
  { name: "Grace & Noah", place: "Big Sur, California", image: "https://picsum.photos/id/1035/700/900" },
];

export default function HomePage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center relative bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,12,12,0.35) 0%, rgba(12,12,12,0.85) 100%), url('https://picsum.photos/id/1015/1800/1200')",
        }}
      >
        <div className="mx-auto max-w-[1180px] px-8 w-full">
          <div className="max-w-2xl pt-24">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-5">
              Wedding Films &middot; Est. 2014
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-tight">
              Your love story, told like a film.
            </h1>
            <p className="mt-7 mb-10 text-xl sm:text-2xl text-ink-muted max-w-xl">
              We craft timeless, emotionally honest wedding films for couples
              across the country — the kind you&rsquo;ll still watch on your
              25th anniversary.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 font-ui text-[13px] tracking-[0.2em] uppercase px-8 py-4 bg-gold text-[#14120f] border border-gold hover:bg-transparent hover:text-ink transition-colors"
              >
                Watch Our Films
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 font-ui text-[13px] tracking-[0.2em] uppercase px-8 py-4 border border-gold hover:bg-gold hover:text-[#14120f] transition-colors"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-4.5">
              Why Stewart Films
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Cinema, not coverage.
            </h2>
            <p className="mt-5 text-xl text-ink-muted">
              We don&rsquo;t just film weddings — we direct attention toward
              the moments that matter, so your film feels like a story rather
              than a highlight reel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 rounded-full border border-gold text-gold flex items-center justify-center mx-auto mb-6.5">
                  {f.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{f.title}</h3>
                <p className="text-ink-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-bg-alt">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-4.5">
              Recent Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              A few of our favorite stories.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_FILMS.map((film) => (
              <Link
                key={film.name}
                href="/portfolio"
                className="group relative block overflow-hidden aspect-[4/5]"
              >
                <Image
                  src={film.image}
                  alt={`Wedding film still, ${film.place}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent to-transparent flex flex-col justify-end p-7">
                  <div className="w-13.5 h-13.5 rounded-full border border-gold text-gold flex items-center justify-center mb-4.5 opacity-0 translate-y-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="font-display text-xl">{film.name}</div>
                  <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-gold mt-1.5">
                    {film.place}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed">
              &ldquo;We didn&rsquo;t just get a wedding video — we got a piece
              of art that makes us cry happy tears every single time we watch
              it. Stewart Films understood us before we even had to explain.&rdquo;
            </blockquote>
            <cite className="block mt-7 font-ui not-italic text-xs tracking-[0.2em] uppercase text-gold">
              Elena &amp; Marco &middot; Married September 2025
            </cite>
          </div>
        </div>
      </section>

      <section
        className="text-center py-32 bg-center bg-cover bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,12,12,0.75), rgba(12,12,12,0.75)), url('https://picsum.photos/id/1039/1800/700')",
        }}
      >
        <div className="mx-auto max-w-[1180px] px-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Let&rsquo;s tell your story.
          </h2>
          <p className="text-xl text-ink-muted mb-11">
            We take a limited number of weddings each year to give every
            couple our full attention.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 font-ui text-[13px] tracking-[0.2em] uppercase px-8 py-4 bg-gold text-[#14120f] border border-gold hover:bg-transparent hover:text-ink transition-colors"
          >
            Inquire About Your Date
          </Link>
        </div>
      </section>
    </>
  );
}

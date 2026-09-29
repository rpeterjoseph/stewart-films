import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FilmTile from "@/components/FilmTile";

const BTN_PRIMARY =
  "inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-7 py-3.5 bg-accent text-white hover:bg-ink transition-colors";
const BTN_OUTLINE =
  "inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-7 py-3.5 border border-ink text-ink hover:bg-ink hover:text-bg transition-colors";
const BTN_OUTLINE_LIGHT =
  "inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase px-7 py-3.5 border border-bg text-bg hover:bg-bg hover:text-ink transition-colors";
const EYEBROW = "font-ui text-xs tracking-[0.3em] uppercase text-accent block";

const FILMS = [
  {
    title: "Joseph & Anna's Wedding",
    year: "2023",
    driveId: "1DOCu8oSeC79tIfV-GXwgeKjCVNIYbJZm",
    thumbnail: "/films/joseph-anna.webp",
  },
  { title: "The Stanley's Wedding", year: "2024", driveId: "1IOYXCJJG4jhdNKFzAz8fe0XeJKjLBmOQ" },
  { title: "Alex & Shiloh's Wedding", year: "2025", driveId: "1oYVi-xn4EQJaj8EWWZgFdYS2eqdeIMWG" },
];

const PACKAGES = [
  {
    name: "In-State Package",
    price: "$699",
    badge: "Save $800+ vs. market",
    body:
      "Full-day wedding video coverage anywhere in South Carolina — hours of coverage, ceremony and reception, and an edited highlight film.",
  },
  {
    name: "Out-of-State Package",
    price: "$999",
    badge: "Travel included",
    body: "Same great coverage for weddings outside South Carolina, travel included.",
  },
];

const FAQS = [
  {
    q: "How much does a wedding videographer cost in Greenville, SC?",
    a: "Rates in the Upstate typically run $1,500 or more. I offer full in-state coverage for $699, with flexible pricing available.",
  },
  {
    q: "Do you travel outside South Carolina?",
    a: "Yes — the out-of-state package is $999 and covers travel.",
  },
  {
    q: "What areas do you serve?",
    a: "Greenville, Spartanburg, Anderson, Easley, and the surrounding Upstate SC area, plus out-of-state weddings.",
  },
  {
    q: "How far in advance should I book?",
    a: "Honestly, it depends. The quicker the better! We can make something work.",
  },
];

const REVIEWS = [1, 2];

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative">
        <PhotoPlaceholder
          label="Hero Photo or Video — Add Your Best Wedding Still"
          className="h-[70vh] min-h-[420px]"
          dark
        />
        <a
          href="#intro"
          aria-label="Scroll down"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-bg/60 text-bg flex items-center justify-center animate-bounce"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      <section id="intro" className="py-24 border-b border-line text-center">
        <div className="mx-auto max-w-[720px] px-6">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent mx-auto mb-6">
            <path d="M12 3l9 18H3z" strokeWidth="1.5" />
          </svg>
          <span className={`${EYEBROW} mb-4`}>Wedding Videography &middot; Greenville, SC</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
            Capture Your Wedding{" "}
            <span className="text-accent italic">Without Breaking The Bank</span>
          </h1>
          <p className="mt-7 text-lg text-ink-muted max-w-lg mx-auto">
            Willing to work with the price! Call or text me.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#packages" className={BTN_PRIMARY}>See Packages</a>
            <a href="tel:+15555550142" className={BTN_OUTLINE}>Call or Text</a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <div className="border border-line px-8 py-5">
              <div className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted">
                In-State Package
              </div>
              <div className="font-display text-3xl mt-1.5">$699</div>
            </div>
            <div className="border border-line px-8 py-5">
              <div className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted">
                Out-of-State Package
              </div>
              <div className="font-display text-3xl mt-1.5">$999</div>
            </div>
          </div>

          <div className="mt-8 inline-flex items-baseline gap-4 bg-bg-alt py-4 px-8">
            <span className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted">
              Market Price <span className="line-through">$1500+</span>
            </span>
            <span className="font-display text-xl text-accent">Our Price $699</span>
          </div>
        </div>
      </section>

      <section id="media" className="py-24 border-b border-line bg-bg-alt">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="text-center mb-14">
            <span className={`${EYEBROW} mb-4`}>Stewart Films</span>
            <h2 className="font-display text-3xl sm:text-4xl">Films</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FILMS.map((film) => (
              <div key={film.title}>
                <FilmTile title={film.title} driveId={film.driveId} thumbnail={film.thumbnail} />
                <div className="mt-5">
                  <div className="font-display text-lg">{film.title}</div>
                  <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent mt-1">
                    {film.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a href="#packages" className={BTN_OUTLINE}>See Packages</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b border-line">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            <div className="relative">
              <PhotoPlaceholder label="Portrait — Add A Photo Of Stewart" className="aspect-[4/5]" />
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-2/3">
                <PhotoPlaceholder
                  label="Behind-the-Scenes"
                  className="aspect-video border-4 border-bg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-8 sm:mt-0">
              <span className={`${EYEBROW} mb-3`}>About</span>
              <h2 className="font-display text-3xl sm:text-4xl mb-7">Stewart Ramakuri</h2>

              <div className="space-y-5 text-lg text-ink-muted">
                <p>
                  Hey, I&rsquo;m Stewart Ramakuri, a wedding videographer based
                  in Greenville, SC. I grew up in Hyderabad, India, where I
                  got my start behind the camera doing anything but weddings —
                  recording my dad&rsquo;s sermons for YouTube, filming church
                  events, playing keys, and generally messing around with
                  every creative outlet I could find at home and in church.
                </p>
                <p>
                  That early, scrappy experience taught me something a lot of
                  videographers learn the expensive way: it&rsquo;s not about
                  the gear, it&rsquo;s about knowing what to look for and when
                  to press record. Somewhere along the way, capturing
                  once-in-a-lifetime moments became more than a skill — it
                  became something I genuinely care about.
                </p>
                <p>
                  Today I bring 15+ years of that experience to weddings
                  across Greenville and the Upstate of South Carolina, with
                  the same goal I&rsquo;ve always had: capture the moment the
                  way it actually felt.
                </p>
              </div>

              <div className="mt-10 border-l-2 border-accent pl-8">
                <h3 className="font-display text-2xl mb-4">Why Affordable?</h3>
                <div className="space-y-5 text-lg text-ink-muted">
                  <p>
                    I don&rsquo;t think wedding videography should cost as
                    much as a month&rsquo;s rent. Couples are routinely quoted
                    $1,500 and up for coverage that isn&rsquo;t meaningfully
                    different from what I offer at $699. So I built my
                    pricing around what I think is fair — without cutting
                    quality anywhere.
                  </p>
                  <p>
                    I&rsquo;m also willing to work with your budget. If cost
                    is the only thing standing between you and having your
                    day filmed, reach out. Call, text, or email — let&rsquo;s
                    figure it out together.
                  </p>
                </div>
              </div>

              <div className="mt-10 border-l-2 border-accent pl-8">
                <h3 className="font-display text-2xl mb-4">Why Do I Film With My Phone?</h3>
                <div className="space-y-5 text-lg text-ink-muted">
                  <p>
                    I&rsquo;ll say this with humility: people are consistently
                    surprised by what I capture. I&rsquo;ve always believed
                    it&rsquo;s not the camera in your hand, it&rsquo;s the
                    person behind it. Someone who knows what they&rsquo;re
                    doing can tell a story beautifully with almost any tool —
                    and I bring 15+ years of that knowledge to every wedding I
                    shoot.
                  </p>
                  <p>
                    Don&rsquo;t just take my word for it — watch a few of my
                    wedding films first. Then decide if the camera matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <PhotoPlaceholder label="Banner Photo" className="py-28" dark />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-xl px-6">
            <h2 className="font-display text-3xl sm:text-4xl text-bg mb-5">
              Every Wedding Is Different
            </h2>
            <p className="text-bg/80 text-lg mb-9">
              So is every budget. Call or text me directly and let&rsquo;s
              build a package that works for you.
            </p>
            <a href="tel:+15555550142" className={BTN_OUTLINE_LIGHT}>Call or Text</a>
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 border-b border-line">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="text-center mb-14">
            <span className={`${EYEBROW} mb-4`}>Pricing</span>
            <h2 className="font-display text-3xl sm:text-4xl">Packages</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="border border-line p-10 flex flex-col">
                <span className="font-ui text-[11px] tracking-[0.15em] uppercase text-accent mb-4">
                  {pkg.badge}
                </span>
                <h3 className="font-display text-2xl mb-2">{pkg.name}</h3>
                <div className="font-display text-4xl text-accent mb-5">{pkg.price}</div>
                <p className="text-ink-muted flex-1">{pkg.body}</p>
                <a href="tel:+15555550142" className={`${BTN_OUTLINE} mt-8 justify-center`}>
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg text-ink-muted text-center max-w-xl mx-auto">
            <span className="font-ui text-xs tracking-[0.15em] uppercase text-ink block mb-2">
              Flexible Pricing
            </span>
            Every wedding is different, and so is every budget. Call or text
            me directly and let&rsquo;s build a package that works for you.
          </p>

          <div id="faq" className="mt-20 pt-16 border-t border-line">
            <div className="text-center mb-12">
              <span className={`${EYEBROW} mb-4`}>Questions</span>
              <h2 className="font-display text-3xl sm:text-4xl">FAQs</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="border border-line p-7">
                  <h3 className="font-ui text-sm tracking-[0.08em] uppercase font-semibold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-ink-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-bg-alt">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="text-center mb-14">
            <span className={`${EYEBROW} mb-4`}>Client&rsquo;s</span>
            <h2 className="font-display text-3xl sm:text-4xl">Reviews</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {REVIEWS.map((i) => (
              <div key={i}>
                <div className="relative aspect-video">
                  <PhotoPlaceholder label="Review Video Placeholder" className="absolute inset-0" dark />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-bg text-bg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="font-display text-xl">Couple Name</div>
                  <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent mt-1 mb-3">
                    Venue, City
                  </div>
                  <p className="text-ink-muted italic">
                    Client review coming soon — add a couple&rsquo;s testimonial here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

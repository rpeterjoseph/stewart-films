import Image from "next/image";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FilmTile from "@/components/FilmTile";
import FaqAccordion from "@/components/FaqAccordion";

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
  {
    title: "The Stanley's Wedding",
    year: "2024",
    driveId: "1IOYXCJJG4jhdNKFzAz8fe0XeJKjLBmOQ",
    thumbnail: "/films/stanleys.webp",
  },
  {
    title: "Alex & Shiloh's Wedding",
    year: "2025",
    driveId: "1oYVi-xn4EQJaj8EWWZgFdYS2eqdeIMWG",
    thumbnail: "/films/alex-shiloh.webp",
  },
];

const PACKAGES = [
  {
    name: "In-State Package",
    price: "$699",
    badge: "Save $800+ vs. market",
    body:
      "Full-day wedding video coverage anywhere in South Carolina — including ceremony and reception coverage, an edited highlight film, and raw footage available upon request.",
  },
  {
    name: "Out-of-State Package",
    price: "$699 + Travel",
    badge: "Quoted upfront, no surprises",
    body: "Same great coverage for weddings outside South Carolina, plus travel — quoted upfront so there are no surprises.",
  },
];

const FAQS = [
  {
    q: "How much does a wedding videographer cost in Greenville, SC?",
    a: "Rates in the Upstate typically run $1,500 or more. I offer full in-state coverage for $699, with flexible pricing available.",
  },
  {
    q: "What's included in the $699 package?",
    a: "I'll be there for your ceremony and reception, capturing the moments that actually matter — vows, first dance, toasts, the laughter and little unscripted things you'll want to remember. Afterward, I edit everything into a polished highlight film set to music, so you get a video that feels like your day, not just a recording of it. If you'd also like the full, unedited raw footage, that's available too — just ask.",
  },
  {
    q: "How long until we get our highlight film?",
    a: "You'll have your edited highlight film in 2 weeks. If anything comes up that pushes the timeline, I'll let you know right away — you won't be left guessing or checking your inbox every day.",
  },
  {
    q: "Do you require a deposit? What's your cancellation policy?",
    a: "A $150 deposit holds your date, with the remaining balance due at least one week before your wedding. If your plans change before the wedding, there's no cancellation fee — your deposit and any payment made will be fully refunded. Once the wedding has taken place and the work is complete, refunds aren't available at that point, since the service has already been delivered.",
  },
  {
    q: "How far in advance should I book?",
    a: "Ideally, I'd love to hear from you 1–2 months out so your date is locked in early — but wedding planning doesn't always work on a schedule, and I often have openings even close to the date. If you're not sure whether I'm available, reach out anyway.",
  },
  {
    q: "Do we get the raw footage, or just the edited film?",
    a: "You'll get the fully edited highlight film as your main video. Raw footage is also included at no additional cost — just let me know if you'd like it, and I'll send it your way.",
  },
  {
    q: "What happens if something goes wrong with your equipment on the day?",
    a: "I always bring backup gear, so a technical issue never means missing a moment of your day.",
  },
  {
    q: "Do you work alongside our photographer?",
    a: "Yes — I coordinate with your photographer beforehand so we're never in each other's shots, and every key moment gets captured from the best angle.",
  },
  {
    q: "Do you travel outside South Carolina?",
    a: "Yes — out-of-state weddings are the same $699 rate, plus travel, quoted upfront with no surprises.",
  },
  {
    q: "What areas do you serve?",
    a: "Greenville, Spartanburg, Anderson, Easley, and the surrounding Upstate SC area, plus out-of-state weddings.",
  },
  {
    q: "How do we pay you?",
    a: "I accept Venmo. If that doesn't work for you, just let me know and I'm happy to find another way.",
  },
];

const REVIEWS = [
  {
    couple: "Joseph & Anna",
    quotes: [
      {
        text: "Hey, just watched it! Dude this is fantastic! We are so grateful brother",
        name: "Joseph",
      },
      {
        text: "WONDERFUL!!! Thanks so much Stewart! Thanks for capturing everything so beautifully!!!!",
        name: "Anna",
      },
    ],
  },
  {
    couple: "The Stanleys",
    quotes: [
      {
        text: "Wholeheartedly thankful for this day!!! Video credit goes out to Stewart, me and my wife are so grateful for the video clip and the time spent in piecing it together.",
        name: "D'Angelo",
      },
    ],
  },
  {
    couple: "Alex & Shiloh",
    quotes: [
      {
        text: "We finally watched the wedding video. We loved it!!!! Thank you sooo much for doing that for us Stewart!! It was really well done!",
        name: "Shiloh",
      },
      {
        text: "Ditto, it was amazing, you are very talented sir! Thank you so much for doing that, we can't appreciate you enough!",
        name: "Alex",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <section id="home" className="relative grid grid-cols-3 h-[55vh] sm:h-[70vh] min-h-[320px] sm:min-h-[420px]">
        <div className="relative">
          <Image
            src="/films/joseph-anna.webp"
            alt="Joseph & Anna's Wedding"
            fill
            sizes="34vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/films/stanleys.webp"
            alt="The Stanley's Wedding"
            fill
            sizes="34vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/films/alex-shiloh.webp"
            alt="Alex & Shiloh's Wedding"
            fill
            sizes="34vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent pointer-events-none" />
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
            <a href="tel:+18643265647" className={BTN_OUTLINE}>Call or Text</a>
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
              <div className="font-display text-3xl mt-1.5">$699 + Travel</div>
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
            <span className={`${EYEBROW} mb-4`}>Stewart Storytelling</span>
            <h2 className="font-display text-3xl sm:text-4xl">Films</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FILMS.map((film) => (
              <div key={film.title}>
                <FilmTile title={film.title} driveId={film.driveId} thumbnail={film.thumbnail} />
                <div className="mt-5">
                  <div className="font-display text-2xl">{film.title}</div>
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
              <div className="relative aspect-[4/5]">
                <Image
                  src="/photos/stewart.jpg"
                  alt="Stewart"
                  fill
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-2/3">
                <PhotoPlaceholder
                  label="Behind-the-Scenes"
                  className="aspect-video border-4 border-bg shadow-lg"
                />
              </div>
            </div>

            <div className="mt-8 sm:mt-0">
              <span className={`${EYEBROW} mb-3`}>About</span>
              <h2 className="font-display text-3xl sm:text-4xl mb-7">Stewart</h2>

              <div className="space-y-5 text-lg text-ink-muted">
                <p>
                  Hey, I&rsquo;m Stewart, a wedding videographer based
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
                    day filmed, reach out. Call or text{" "}
                    <a href="tel:+18643265647" className="text-accent hover:underline">
                      (864) 326-5647
                    </a>
                    , or email{" "}
                    <a href="mailto:stewartramakuri@gmail.com" className="text-accent hover:underline">
                      stewartramakuri@gmail.com
                    </a>
                    {" "}— let&rsquo;s figure it out together.
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
        <PhotoPlaceholder
          label="Banner Photo"
          className="min-h-[480px] sm:min-h-[560px]"
          dark
          showLabel={false}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-xl px-6">
            <h2 className="font-display text-3xl sm:text-4xl text-bg mb-5">
              Every Wedding Is Different
            </h2>
            <p className="text-bg/80 text-lg mb-9">
              So is every budget. Call or text me directly and let&rsquo;s
              build a package that works for you.
            </p>
            <a href="tel:+18643265647" className={BTN_OUTLINE_LIGHT}>Call or Text</a>
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
                <a href="tel:+18643265647" className={`${BTN_OUTLINE} mt-8 justify-center`}>
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
            <div className="max-w-[760px] mx-auto">
              <FaqAccordion items={FAQS} />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-bg-alt">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl">Client Reviews</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
            {REVIEWS.map((group) => (
              <div key={group.couple} className="py-10 sm:py-0 sm:px-10 sm:first:pl-0 sm:last:pr-0">
                <div className="font-display text-xl mb-5">{group.couple}</div>
                <div className="space-y-6">
                  {group.quotes.map((quote) => (
                    <div key={quote.name}>
                      <p className="text-ink-muted italic">&ldquo;{quote.text}&rdquo;</p>
                      <div className="font-ui text-[11px] tracking-[0.2em] uppercase text-accent mt-2.5">
                        {quote.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

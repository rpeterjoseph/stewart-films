const PACKAGES = [
  {
    name: "In-State Package",
    price: "$699",
    body:
      "Full-day wedding video coverage anywhere in South Carolina — hours of coverage, ceremony and reception, and an edited highlight film.",
  },
  {
    name: "Out-of-State Package",
    price: "$999",
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

export default function HomePage() {
  return (
    <>
      <section id="home" className="py-28 sm:py-36 text-center">
        <div className="mx-auto max-w-[720px] px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
            Capture Your Wedding Without Breaking The Bank
          </h1>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-10 sm:gap-16">
            <div>
              <div className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted">
                In-State Package
              </div>
              <div className="font-display text-3xl mt-1.5">$699</div>
            </div>
            <div>
              <div className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted">
                Out-of-State Package
              </div>
              <div className="font-display text-3xl mt-1.5">$999</div>
            </div>
          </div>

          <p className="mt-8 text-ink-muted">
            Willing to work with the price! Call or text me.
          </p>

          <div className="mt-12 inline-flex items-baseline gap-4 border-t border-b border-line py-5 px-8">
            <span className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted">
              Market Price <span className="line-through">$1500+</span>
            </span>
            <span className="font-display text-2xl text-accent">Our Price $699</span>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-t border-line">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="font-display text-3xl sm:text-4xl mb-8">About</h2>

          <div className="space-y-5 text-lg text-ink-muted">
            <p>
              Hey, I&rsquo;m Stewart Ramakuri, a wedding videographer based in
              Greenville, SC. I grew up in Hyderabad, India, where I got my
              start behind the camera doing anything but weddings —
              recording my dad&rsquo;s sermons for YouTube, filming church
              events, playing keys, and generally messing around with every
              creative outlet I could find at home and in church.
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
              Today I bring 15+ years of that experience to weddings across
              Greenville and the Upstate of South Carolina, with the same
              goal I&rsquo;ve always had: capture the moment the way it
              actually felt.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-line">
            <h3 className="font-display text-2xl mb-4">Why Affordable?</h3>
            <div className="space-y-5 text-lg text-ink-muted">
              <p>
                I don&rsquo;t think wedding videography should cost as much
                as a month&rsquo;s rent. Couples are routinely quoted $1,500
                and up for coverage that isn&rsquo;t meaningfully different
                from what I offer at $699. So I built my pricing around what
                I think is fair — without cutting quality anywhere.
              </p>
              <p>
                I&rsquo;m also willing to work with your budget. If cost is
                the only thing standing between you and having your day
                filmed, reach out. Call, text, or email — let&rsquo;s figure
                it out together.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-line">
            <h3 className="font-display text-2xl mb-4">Why Do I Film With My Phone?</h3>
            <div className="space-y-5 text-lg text-ink-muted">
              <p>
                I&rsquo;ll say this with humility: people are consistently
                surprised by what I capture. I&rsquo;ve always believed
                it&rsquo;s not the camera in your hand, it&rsquo;s the person
                behind it. Someone who knows what they&rsquo;re doing can
                tell a story beautifully with almost any tool — and I bring
                15+ years of that knowledge to every wedding I shoot.
              </p>
              <p>
                Don&rsquo;t just take my word for it — watch a few of my
                wedding films first. Then decide if the camera matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="media" className="py-24 border-t border-line bg-bg-alt">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="font-display text-3xl sm:text-4xl mb-8 text-center">
            Video Preview
          </h2>
          <div className="aspect-video border border-line flex items-center justify-center bg-bg">
            <div className="w-16 h-16 rounded-full border border-accent text-accent flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 border-t border-line">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="font-display text-3xl sm:text-4xl mb-10">Packages</h2>

          <div className="space-y-10">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="pb-10 border-b border-line">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{pkg.name}</h3>
                  <span className="font-display text-2xl text-accent">{pkg.price}</span>
                </div>
                <p className="mt-3 text-lg text-ink-muted">{pkg.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-ink-muted">
            <span className="font-ui text-xs tracking-[0.15em] uppercase text-ink block mb-2">
              Flexible Pricing
            </span>
            Every wedding is different, and so is every budget. Call or text
            me directly and let&rsquo;s build a package that works for you.
          </p>

          <div className="mt-16 pt-12 border-t border-line">
            <h2 className="font-display text-3xl sm:text-4xl mb-8">FAQs</h2>
            <div className="space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-ui text-sm tracking-wide font-medium mb-2">{faq.q}</h3>
                  <p className="text-lg text-ink-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Stewart Films and learn how we approach every wedding film — from first call to final cut.",
};

const STATS = [
  { num: "300+", label: "Weddings Filmed" },
  { num: "12", label: "Years in Business" },
  { num: "18", label: "Countries Traveled" },
  { num: "4.9", label: "Average Rating" },
];

const TIMELINE = [
  {
    step: "01",
    title: "Discovery Call",
    body: "We start with a relaxed conversation about your day, your love story, and what matters most to you both.",
  },
  {
    step: "02",
    title: "Planning & Prep",
    body: "We coordinate with your planner and other vendors, scout key moments, and build a shot list around your timeline.",
  },
  {
    step: "03",
    title: "Wedding Day",
    body: "Our team arrives early and blends into the background, capturing candid moments and key traditions all day long.",
  },
  {
    step: "04",
    title: "Edit & Delivery",
    body: "We hand-edit every film to your story's pace and mood, delivering your final films within 10-14 weeks.",
  },
];

const TEAM = [
  { name: "Rebecca Stewart", role: "Founder & Lead Director", image: "https://picsum.photos/id/64/500/500" },
  { name: "Daniel Cho", role: "Cinematographer", image: "https://picsum.photos/id/91/500/500" },
  { name: "Amara Okafor", role: "Editor & Colorist", image: "https://picsum.photos/id/177/500/500" },
];

const PACKAGES = [
  {
    name: "The Essential",
    price: "$3,200",
    features: ["6 hours of coverage", "One cinematographer", "3-5 minute highlight film", "Online private gallery"],
    featured: false,
  },
  {
    name: "The Signature",
    price: "$5,400",
    features: ["10 hours of coverage", "Two cinematographers", "5-7 minute highlight film", "Full ceremony & speeches", "Same-day teaser reel"],
    featured: true,
  },
  {
    name: "The Heirloom",
    price: "$7,800",
    features: ["Full-day coverage", "Two cinematographers + drone", "Feature film + highlight reel", "Rehearsal dinner coverage", "Custom keepsake box"],
    featured: false,
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="min-h-[56vh] flex items-center bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.92) 100%), url('https://picsum.photos/id/1074/1800/900')",
        }}
      >
        <div className="mx-auto max-w-[1180px] px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-5">
              About Us
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-tight">
              Storytellers first, filmmakers always.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-photo">
              <Image
                src="https://picsum.photos/id/1062/900/1100"
                alt="Stewart Films founder at a wedding"
                width={900}
                height={1100}
                className="w-full border border-line"
              />
            </div>
            <div>
              <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-5">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
                It started with one wedding, and a camera we could barely afford.
              </h2>
              <p className="text-ink-muted text-xl mb-5">
                Stewart Films began in 2014 when our founder, Rebecca, filmed
                her best friend&rsquo;s wedding as a favor. What was meant to
                be a one-time project turned into a calling — and twelve
                years later, we&rsquo;ve had the privilege of filming over
                300 weddings across 18 countries.
              </p>
              <p className="text-ink-muted text-xl">
                We believe a wedding film should feel like a memory, not a
                highlight reel — unscripted, honest, and true to who you are
                as a couple. That belief guides every film we make.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-18 border-t border-line pt-15">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-gold">{s.num}</div>
                <div className="font-ui text-xs tracking-[0.15em] uppercase text-ink-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-bg-alt">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-4.5">
              How It Works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              From first call to final film.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item) => (
              <div key={item.step} className="grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] gap-7 py-7 border-b border-line last:border-b-0">
                <div className="font-display text-2xl sm:text-3xl text-gold">{item.step}</div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-ink-muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-4.5">
              Meet The Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              The people behind the lens.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {TEAM.map((member) => (
              <div key={member.name}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover mb-5 grayscale-[30%]"
                />
                <div className="font-ui text-xs tracking-[0.15em] uppercase text-gold mb-2.5">
                  {member.role}
                </div>
                <h3 className="font-display text-xl font-semibold">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-28 bg-bg-alt scroll-mt-24">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-4.5">
              Investment
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Packages built around your day.
            </h2>
            <p className="mt-5 text-xl text-ink-muted">
              Every package is customizable. Reach out for a tailored quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`text-center p-11 border transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.featured
                    ? "border-gold bg-surface hover:border-gold"
                    : "border-line hover:border-gold"
                }`}
              >
                <div className="font-ui text-[13px] tracking-[0.2em] uppercase text-gold mb-4.5">
                  {pkg.name}
                </div>
                <div className="font-display text-4xl mb-6">{pkg.price}</div>
                <ul className="text-left text-ink-muted mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="py-2.5 border-b border-line last:border-b-0">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 font-ui text-[13px] tracking-[0.2em] uppercase px-7 py-3.5 border border-gold hover:bg-gold hover:text-[#14120f] transition-colors"
                >
                  Inquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

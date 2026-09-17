import type { Metadata } from "next";
import Link from "next/link";
import FilmGrid from "@/components/FilmGrid";

export const metadata: Metadata = {
  title: "Films",
  description:
    "Browse cinematic wedding films by Stewart Films, from intimate elopements to destination celebrations.",
};

export default function PortfolioPage() {
  return (
    <>
      <section
        className="min-h-[56vh] flex items-center bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.92) 100%), url('https://picsum.photos/id/1043/1800/900')",
        }}
      >
        <div className="mx-auto max-w-[1180px] px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-ui text-xs tracking-[0.35em] uppercase text-gold block mb-5">
              Our Films
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-tight">
              Stories worth watching twice.
            </h1>
            <p className="mt-7 text-xl sm:text-2xl text-ink-muted">
              A collection of full wedding films and highlight reels from the
              couples we&rsquo;ve had the honor of working with.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-[1180px] px-8">
          <FilmGrid />
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
            Ready to start your own film?
          </h2>
          <p className="text-xl text-ink-muted mb-11">
            Tell us about your wedding day and we&rsquo;ll get back to you
            within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 font-ui text-[13px] tracking-[0.2em] uppercase px-8 py-4 bg-gold text-[#14120f] border border-gold hover:bg-transparent hover:text-ink transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

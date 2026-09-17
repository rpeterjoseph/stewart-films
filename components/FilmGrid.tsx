"use client";

import Image from "next/image";
import { useState } from "react";

type Film = {
  name: string;
  place: string;
  image: string;
  category: "highlight" | "destination" | "documentary" | "elopement";
};

const FILMS: Film[] = [
  { name: "Elena & Marco", place: "Amalfi Coast, Italy", image: "https://picsum.photos/id/1011/700/900", category: "destination" },
  { name: "Priya & Sam", place: "Hudson Valley, NY", image: "https://picsum.photos/id/1025/700/900", category: "highlight" },
  { name: "Grace & Noah", place: "Big Sur, California", image: "https://picsum.photos/id/1035/700/900", category: "documentary" },
  { name: "Wren & Kai", place: "Sawtooth Mountains, ID", image: "https://picsum.photos/id/1041/700/900", category: "elopement" },
  { name: "Olivia & James", place: "Charleston, SC", image: "https://picsum.photos/id/1045/700/900", category: "highlight" },
  { name: "Camille & Theo", place: "Provence, France", image: "https://picsum.photos/id/1050/700/900", category: "destination" },
  { name: "Maya & Daniel", place: "Austin, Texas", image: "https://picsum.photos/id/106/700/900", category: "documentary" },
  { name: "Ines & Robert", place: "Lake Como, Italy", image: "https://picsum.photos/id/110/700/900", category: "elopement" },
  { name: "Harper & Leo", place: "Savannah, Georgia", image: "https://picsum.photos/id/117/700/900", category: "highlight" },
];

const FILTERS: { label: string; value: "all" | Film["category"] }[] = [
  { label: "All Films", value: "all" },
  { label: "Highlight Films", value: "highlight" },
  { label: "Destination", value: "destination" },
  { label: "Documentary", value: "documentary" },
  { label: "Elopements", value: "elopement" },
];

export default function FilmGrid() {
  const [active, setActive] = useState<"all" | Film["category"]>("all");

  const visible = FILMS.filter((f) => active === "all" || f.category === active);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3.5 mb-14">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActive(filter.value)}
            className={`font-ui text-xs tracking-[0.15em] uppercase border px-6 py-2.5 transition-colors ${
              active === filter.value
                ? "border-gold text-gold"
                : "border-line text-ink-muted hover:border-gold hover:text-gold"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((film) => (
          <a
            key={film.name}
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden aspect-[4/5]"
          >
            <Image
              src={film.image}
              alt={`${film.name} wedding film still`}
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
          </a>
        ))}
      </div>
    </>
  );
}

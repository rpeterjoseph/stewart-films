"use client";

import Image from "next/image";
import { useState } from "react";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function FilmTile({
  title,
  driveId,
  thumbnail,
}: {
  title: string;
  driveId: string | null;
  thumbnail?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing && driveId) {
    return (
      <div className="relative aspect-video">
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => driveId && setPlaying(true)}
      disabled={!driveId}
      aria-label={driveId ? `Play ${title}` : title}
      className="group relative aspect-video w-full block text-left disabled:cursor-default"
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
      ) : (
        <PhotoPlaceholder label="Video Placeholder" className="absolute inset-0" dark />
      )}
      {driveId && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/20 group-hover:bg-ink/35 transition-colors">
          <div className="w-14 h-14 rounded-full border border-bg text-bg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}

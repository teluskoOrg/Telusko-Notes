"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoProps {
  id: string;
  title?: string;
}

export default function Video({ id, title = "Video" }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;

  return (
    <div className="w-3xl mx-auto">
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
        {isPlaying ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="relative z-10 bg-black/60 rounded-full p-4 text-white text-2xl">
              ▶
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

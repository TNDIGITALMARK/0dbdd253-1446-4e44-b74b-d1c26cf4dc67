"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EpisodeCardProps {
  title: string;
  description: string;
  artist: string;
  duration: string;
  imageUrl: string;
  episodeNumber: string;
  href: string;
}

export function EpisodeCard({
  title,
  description,
  artist,
  duration,
  imageUrl,
  episodeNumber,
  href,
}: EpisodeCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:border-primary hover:shadow-lg">
      {/* Episode Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

        {/* Episode Number Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
            Episode {episodeNumber}
          </span>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            size="icon"
            className="h-16 w-16 rounded-full bg-primary shadow-xl hover:bg-accent"
          >
            <Play className="h-7 w-7 ml-1" />
          </Button>
        </div>
      </div>

      {/* Episode Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>

        <div className="flex-1">
          <Link href={href}>
            <h3 className="mb-2 line-clamp-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
          </Link>
          <p className="mb-2 text-sm font-medium text-primary">
            with {artist}
          </p>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <Link href={href}>
          <Button variant="outline" size="sm" className="w-full font-semibold">
            Listen Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

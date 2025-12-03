"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArtistCardProps {
  name: string;
  bio: string;
  imageUrl: string;
  genre?: string;
  href: string;
}

export function ArtistCard({ name, bio, imageUrl, genre, href }: ArtistCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:border-primary hover:shadow-lg">
      {/* Artist Photo */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Genre Badge */}
        {genre && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground border border-border">
              {genre}
            </span>
          </div>
        )}
      </div>

      {/* Artist Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Link href={href}>
          <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {name}
          </h3>
        </Link>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {bio}
        </p>

        <Link href={href} className="mt-auto">
          <Button variant="outline" size="sm" className="w-full font-semibold group/btn">
            <span>View Profile</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

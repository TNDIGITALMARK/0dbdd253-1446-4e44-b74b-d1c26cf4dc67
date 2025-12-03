"use client";

import Link from "next/link";
import { Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Mic2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight text-foreground">
              SD Unplugged
            </span>
            <span className="text-xs text-muted-foreground">Podcast</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/episodes"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Episodes
          </Link>
          <Link
            href="/artist"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Artist Spotlight
          </Link>
          <Link
            href="/store"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Support Store
          </Link>
        </nav>

        {/* Support CTA */}
        <Button size="sm" className="font-bold uppercase tracking-wide">
          Support Artists
        </Button>
      </div>
    </header>
  );
}

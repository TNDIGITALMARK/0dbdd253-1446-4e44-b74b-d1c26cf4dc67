"use client";

import { useState } from "react";
import Link from "next/link";
import { Mic2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-80"
          onClick={closeMobileMenu}
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary">
            <Mic2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold leading-none tracking-tight text-foreground">
              SD Unplugged
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">Podcast</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Support CTA */}
        <Button size="sm" className="hidden md:inline-flex font-bold uppercase tracking-wide">
          Support Artists
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg hover:bg-accent/10 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col py-4 space-y-3">
            <Link
              href="/episodes"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent/10"
              onClick={closeMobileMenu}
            >
              Episodes
            </Link>
            <Link
              href="/artist"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent/10"
              onClick={closeMobileMenu}
            >
              Artist Spotlight
            </Link>
            <Link
              href="/store"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-accent/10"
              onClick={closeMobileMenu}
            >
              Support Store
            </Link>
            <div className="pt-2">
              <Button
                size="default"
                className="w-full font-bold uppercase tracking-wide"
                onClick={closeMobileMenu}
              >
                Support Artists
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

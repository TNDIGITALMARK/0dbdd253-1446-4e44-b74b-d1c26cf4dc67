"use client";

import Link from "next/link";
import { Mic2, Instagram, Youtube, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Mic2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-foreground">
                  SD Unplugged
                </span>
                <span className="text-xs text-muted-foreground">Podcast</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Supporting unsigned San Diego artists through authentic storytelling and community connection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <Link href="/episodes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Browse Episodes
            </Link>
            <Link href="/artist" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Featured Artist
            </Link>
            <Link href="/store" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Support Store
            </Link>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <p className="text-sm text-muted-foreground">San Diego, California</p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@sdunplugged.com"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2025 SD Unplugged. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

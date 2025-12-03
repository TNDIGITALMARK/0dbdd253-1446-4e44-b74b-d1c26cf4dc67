export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";
import { Play, TrendingUp, Users, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EpisodeCard } from "@/components/episode-card";
import { ArtistCard } from "@/components/artist-card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-background">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-background.png"
            alt="San Diego sunset with podcast microphone"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Play className="h-4 w-4" />
              <span>New Episode Every Week</span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Unsigned Artists.
              <br />
              <span className="text-primary">Unfiltered Stories.</span>
            </h1>

            <p className="text-lg text-muted-foreground sm:text-xl">
              SD Unplugged showcases the real financial and creative struggles of San Diego's
              independent music scene. Discover authentic talent while directly supporting their journey.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="font-bold uppercase tracking-wide">
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Button>
              <Button size="lg" variant="outline">
                Support Artists
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">50+</h3>
              <p className="text-sm text-muted-foreground">Episodes Released</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">100+</h3>
              <p className="text-sm text-muted-foreground">Artists Featured</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">$50K+</h3>
              <p className="text-sm text-muted-foreground">Raised for Artists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="container py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Episodes</h2>
            <p className="mt-2 text-muted-foreground">
              Real conversations with unsigned San Diego artists
            </p>
          </div>
          <Link href="/episodes">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <EpisodeCard
            title="The Struggling Songwriter: Maria Santos' Journey from Busking to Recording"
            description="Maria shares her journey from busking downtown to recording her first EP, including the financial challenges of independent music production."
            artist="Maria Santos"
            duration="42 min"
            imageUrl="/generated/hero-background.png"
            episodeNumber="48"
            href="/episodes"
          />
          <EpisodeCard
            title="Indie Rock Band Budget Breakdown: The Real Cost of DIY Music"
            description="A San Diego indie rock band breaks down every expense from rehearsal space to pressing vinyl, revealing the true cost of staying independent."
            artist="The Coastliners"
            duration="38 min"
            imageUrl="/generated/hero-background.png"
            episodeNumber="47"
            href="/episodes"
          />
          <EpisodeCard
            title="Acoustic Session with James Rivera: Three Years of Coffee Shop Gigs"
            description="James performs his latest songs and discusses how playing coffee shops helped fund his debut album while working construction."
            artist="James Rivera"
            duration="45 min"
            imageUrl="/generated/hero-background.png"
            episodeNumber="46"
            href="/episodes"
          />
        </div>
      </section>

      {/* Current Artist Spotlight */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Current Artist Spotlight</h2>
            <p className="mt-2 text-muted-foreground">
              Supporting unsigned talent through authentic storytelling
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <ArtistCard
              name="Carlos Mendez"
              bio="Three years of playing coffee shops while working construction. Carlos has saved $2,000 for studio time and needs $3,000 more to record his debut EP. Follow his journey and support his dream."
              imageUrl="/generated/artist-carlos.png"
              genre="Acoustic/Singer-Songwriter"
              href="/artist"
            />
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="container py-16">
        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/20 via-accent/10 to-background">
          <div className="flex flex-col items-center gap-6 p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Support Independent Artists
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Every purchase in our store directly funds studio time, equipment, and opportunities
              for unsigned San Diego musicians. Help us build a thriving local music community.
            </p>
            <Link href="/store">
              <Button size="lg" className="font-bold uppercase tracking-wide">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Merchandise
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

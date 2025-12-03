export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";
import { MapPin, DollarSign, Target, Heart, Share2, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AudioPlayer } from "@/components/audio-player";

export default function ArtistSpotlightPage() {
  const fundingGoal = 5000;
  const fundingCurrent = 2000;
  const fundingProgress = (fundingCurrent / fundingGoal) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Artist Photo */}
      <section className="relative h-[400px] w-full overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/generated/artist-carlos.png"
            alt="Carlos Mendez performing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="container relative z-10 flex h-full items-end pb-12">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary">
              Featured Artist
            </div>
            <h1 className="mb-3 text-4xl font-extrabold sm:text-5xl">
              Carlos Mendez
            </h1>
            <p className="text-lg text-muted-foreground">
              Acoustic Singer-Songwriter
            </p>
          </div>
        </div>
      </section>

      {/* Artist Info & Funding */}
      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - Artist Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">The Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For the past three years, Carlos has been balancing his passion for music with the
                  reality of working full-time in construction. Every weekend, you'll find him playing
                  intimate acoustic sets at coffee shops and small venues across San Diego, slowly
                  building a dedicated following.
                </p>
                <p>
                  His songs blend heartfelt storytelling with melodic guitar work, drawing inspiration
                  from his experiences growing up in San Diego and the struggles of pursuing music
                  without industry backing. Each lyric reflects the authentic challenges of being an
                  independent artist trying to make their voice heard.
                </p>
                <p>
                  Carlos has been saving every dollar he can from gigs and construction work toward
                  his dream: recording a professional debut EP that truly captures his sound. He's
                  halfway to his goal, and with community support, he's closer than ever to stepping
                  into the studio.
                </p>
              </div>
            </div>

            {/* Financial Journey */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Financial Journey
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Coffee shop gigs (weekly)</span>
                  <span className="font-semibold text-foreground">$150-200</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Equipment maintenance</span>
                  <span className="font-semibold text-foreground">$50/month</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Studio time needed</span>
                  <span className="font-semibold text-primary">$5,000</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground">Saved so far</span>
                  <span className="font-bold text-foreground text-lg">${fundingCurrent.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Latest Performance */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Latest Performance</h2>
              <AudioPlayer
                title="Hometown Dreams (Live at SD Unplugged Studio)"
                artist="Carlos Mendez"
                duration="4:32"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Recorded live in our studio. This heartfelt original tells the story of chasing
                music dreams while working construction in San Diego.
              </p>
            </div>
          </div>

          {/* Sidebar - Support & Connect */}
          <div className="lg:col-span-1 space-y-6">
            {/* Funding Goal Card */}
            <div className="sticky top-20 rounded-lg border border-border bg-card p-6 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">Studio Fund</h3>
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Help Carlos record his debut EP
                </p>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    ${fundingCurrent.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    of ${fundingGoal.toLocaleString()}
                  </span>
                </div>
                <Progress value={fundingProgress} className="h-3 mb-2" />
                <p className="text-xs text-muted-foreground">
                  {fundingProgress.toFixed(0)}% funded
                </p>
              </div>

              {/* Support Actions */}
              <div className="space-y-3">
                <Link href="/store">
                  <Button size="lg" className="w-full font-bold uppercase tracking-wide">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Carlos
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share His Story
                </Button>
              </div>

              {/* Impact Message */}
              <div className="mt-6 rounded-md bg-primary/10 p-4 border border-primary/20">
                <p className="text-xs text-foreground leading-relaxed">
                  💡 Your purchase of any merchandise or donation directly funds Carlos's studio
                  time, helping him take the next step in his music journey.
                </p>
              </div>
            </div>

            {/* Connect Card */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Diego, CA</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Artists */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Previous Spotlights</h2>
            <p className="mt-2 text-muted-foreground">
              Artists we've helped along their journey
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                More featured artists coming soon as the community grows!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

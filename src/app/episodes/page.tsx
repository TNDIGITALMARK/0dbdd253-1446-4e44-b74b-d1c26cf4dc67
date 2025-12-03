export const dynamic = 'force-dynamic';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EpisodeCard } from "@/components/episode-card";
import { AudioPlayer } from "@/components/audio-player";

export default function EpisodesPage() {
  const episodes = [
    {
      id: 1,
      title: "The Struggling Songwriter: Maria Santos' Journey from Busking to Recording",
      description: "Maria shares her journey from busking downtown to recording her first EP, including the financial challenges of independent music production.",
      artist: "Maria Santos",
      duration: "42 min",
      episodeNumber: "48",
    },
    {
      id: 2,
      title: "Indie Rock Band Budget Breakdown: The Real Cost of DIY Music",
      description: "A San Diego indie rock band breaks down every expense from rehearsal space to pressing vinyl, revealing the true cost of staying independent.",
      artist: "The Coastliners",
      duration: "38 min",
      episodeNumber: "47",
    },
    {
      id: 3,
      title: "Acoustic Session with James Rivera: Three Years of Coffee Shop Gigs",
      description: "James performs his latest songs and discusses how playing coffee shops helped fund his debut album while working construction.",
      artist: "James Rivera",
      duration: "45 min",
      episodeNumber: "46",
    },
    {
      id: 4,
      title: "Hip-Hop Producer Talks Studio Investment: Building a Home Studio on a Budget",
      description: "Local hip-hop producer breaks down how he built a professional home studio for under $5,000 and started producing for other unsigned artists.",
      artist: "DJ Marco",
      duration: "51 min",
      episodeNumber: "45",
    },
    {
      id: 5,
      title: "Female Folk Artist on Streaming Economics: Making Pennies into Dollars",
      description: "A deep dive into streaming revenue reality, DIY marketing strategies, and building a sustainable music career without label support.",
      artist: "Emily Chen",
      duration: "39 min",
      episodeNumber: "44",
    },
    {
      id: 6,
      title: "Punk Band's Tour Diary: Van Life and Venue Struggles",
      description: "A San Diego punk band shares stories from their DIY West Coast tour, including van breakdowns, empty shows, and unexpected connections.",
      artist: "Static Youth",
      duration: "47 min",
      episodeNumber: "43",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
              All Episodes
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of conversations with San Diego's unsigned artists.
              Real stories, real struggles, real talent.
            </p>
          </div>
        </div>
      </section>

      {/* Featured/Latest Episode Player */}
      <section className="container py-12">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-foreground">Latest Episode</h2>
          <p className="text-sm text-muted-foreground">
            Just released this week
          </p>
        </div>
        <AudioPlayer
          title="The Struggling Songwriter: Maria Santos' Journey from Busking to Recording"
          artist="Maria Santos"
          duration="42:18"
          episodeNumber="48"
        />
      </section>

      {/* Search and Filters */}
      <section className="container pb-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search episodes by artist, topic, or keyword..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter by Genre</Button>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="container pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              title={episode.title}
              description={episode.description}
              artist={episode.artist}
              duration={episode.duration}
              imageUrl="/generated/hero-background.png"
              episodeNumber={episode.episodeNumber}
              href="/episodes"
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load More Episodes
          </Button>
        </div>
      </section>
    </div>
  );
}

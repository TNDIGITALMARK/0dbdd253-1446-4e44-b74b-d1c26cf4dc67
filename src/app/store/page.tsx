export const dynamic = 'force-dynamic';

import { Heart, TrendingUp } from "lucide-react";
import { MerchCard } from "@/components/merch-card";
import { Button } from "@/components/ui/button";

export default function StorePage() {
  const merchandise = [
    {
      id: 1,
      name: "SD Unplugged Logo T-Shirt",
      price: 25,
      imageUrl: "/generated/merch-tshirt.png",
      impactMessage: "Your purchase funds 2 hours of studio time for local artists",
      inStock: true,
    },
    {
      id: 2,
      name: "Carlos Mendez EP Pre-Sale",
      price: 15,
      imageUrl: "/generated/merch-ep-carlos.png",
      impactMessage: "Pre-order Carlos's debut EP and support his studio recording",
      inStock: true,
    },
    {
      id: 3,
      name: "Podcast Supporter Tote Bag",
      price: 18,
      imageUrl: "/generated/merch-tote.png",
      impactMessage: "Funds equipment for up-and-coming musicians",
      inStock: true,
    },
    {
      id: 4,
      name: "SD Unplugged Hoodie",
      price: 45,
      imageUrl: "/generated/merch-hoodie.png",
      impactMessage: "Your purchase funds 4 hours of professional studio time",
      inStock: true,
    },
    {
      id: 5,
      name: "Limited Edition Vinyl Series",
      price: 35,
      imageUrl: "/generated/merch-vinyl.png",
      impactMessage: "Supports vinyl pressing costs for featured artists",
      inStock: false,
    },
    {
      id: 6,
      name: "Artist Support Bundle",
      price: 60,
      imageUrl: "/generated/merch-bundle.png",
      impactMessage: "Complete support package: T-shirt + Tote + EP access",
      inStock: true,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="border-b border-border bg-secondary/30 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
              Support Store
            </h1>
            <p className="text-lg text-muted-foreground">
              Every purchase directly funds studio time, equipment, and opportunities for unsigned
              San Diego musicians. Wear your support proudly and help build a thriving local music community.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container py-12">
        <div className="grid gap-6 rounded-lg border border-border bg-card p-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">$50,000+</h3>
            <p className="text-sm text-muted-foreground">Raised for Artists</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">25 EPs</h3>
            <p className="text-sm text-muted-foreground">Funded to Completion</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">500+</h3>
            <p className="text-sm text-muted-foreground">Studio Hours Funded</p>
          </div>
        </div>
      </section>

      {/* Featured Item */}
      <section className="container pb-8">
        <div className="overflow-hidden rounded-lg border border-primary bg-gradient-to-br from-primary/20 via-accent/10 to-background p-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/20 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-primary">
              Featured This Month
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Carlos Mendez EP Pre-Sale
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Be among the first to own Carlos's debut EP. Your pre-order directly funds his
              studio recording sessions and helps bring his music to life.
            </p>
            <Button size="lg" className="font-bold uppercase tracking-wide">
              Pre-Order Now - $15
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container pb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4">
          <Button variant="default" size="sm">
            All Items
          </Button>
          <Button variant="outline" size="sm">
            Apparel
          </Button>
          <Button variant="outline" size="sm">
            Music
          </Button>
          <Button variant="outline" size="sm">
            Accessories
          </Button>
          <Button variant="outline" size="sm">
            Bundles
          </Button>
        </div>
      </section>

      {/* Merchandise Grid */}
      <section className="container pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {merchandise.map((item) => (
            <MerchCard
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              impactMessage={item.impactMessage}
              inStock={item.inStock}
            />
          ))}
        </div>
      </section>

      {/* Impact Statement */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Your Impact Matters
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Every item you purchase goes directly toward supporting unsigned San Diego artists.
                We track exactly where your money goes and share updates on the artists you help.
              </p>
              <p>
                100% of profits from merchandise sales are invested back into the local music
                community through studio time, equipment loans, and artist development programs.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline" size="lg">
                Learn More About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

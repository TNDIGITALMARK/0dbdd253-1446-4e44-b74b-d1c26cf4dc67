"use client";

import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MerchCardProps {
  name: string;
  price: number;
  imageUrl: string;
  impactMessage: string;
  inStock?: boolean;
}

export function MerchCard({ name, price, imageUrl, impactMessage, inStock = true }: MerchCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:border-primary hover:shadow-lg">
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full shadow-lg"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-md bg-destructive/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-destructive-foreground">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="flex-1 line-clamp-2 text-lg font-bold text-foreground">
            {name}
          </h3>
          <span className="text-xl font-bold text-primary">
            ${price}
          </span>
        </div>

        {/* Impact Message */}
        <div className="rounded-md bg-muted/50 px-3 py-2 border border-border/50">
          <p className="text-xs text-muted-foreground leading-relaxed">
            💡 {impactMessage}
          </p>
        </div>

        {/* Add to Cart Button */}
        <Button
          size="sm"
          className="w-full font-semibold uppercase tracking-wide"
          disabled={!inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  );
}

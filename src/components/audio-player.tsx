"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface AudioPlayerProps {
  title: string;
  artist: string;
  duration: string;
  episodeNumber?: string;
}

export function AudioPlayer({ title, artist, duration, episodeNumber }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-md">
      {/* Episode Info */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {episodeNumber && (
            <span className="inline-block mb-1 text-xs font-semibold text-primary uppercase tracking-wide">
              Episode {episodeNumber}
            </span>
          )}
          <h3 className="text-lg font-bold text-foreground truncate">{title}</h3>
          <p className="text-sm text-muted-foreground">{artist}</p>
        </div>
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          {duration}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Slider
          value={[progress]}
          max={100}
          step={1}
          className="w-full"
          onValueChange={(value) => setProgress(value[0])}
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>0:00</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <Button
          size="icon"
          variant="default"
          className="h-12 w-12 rounded-full"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </Button>

        {/* Volume Control */}
        <div className="flex items-center gap-2 flex-1">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={100}
            step={1}
            className="w-24"
            onValueChange={(value) => {
              setVolume(value[0]);
              if (value[0] > 0) setIsMuted(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

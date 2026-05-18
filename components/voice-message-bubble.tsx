"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceMessageBubbleProps {
  text: string;
  className?: string;
}

export default function VoiceMessageBubble({
  text,
  className,
}: VoiceMessageBubbleProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const utteranceRef = React.useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const words = text.split(" ").length;
  const duration = (words / 150) * 60; // seconds

  const speak = () => {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    setIsPlaying(true);

    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 200);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setProgress(0);

    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const togglePlay = () => {
    if (isPlaying) stop();
    else speak();
  };

  const [barCount, setBarCount] = React.useState(90);

  React.useEffect(() => {
    const updateBars = () => {
      if (window.innerWidth >= 1024) {
        setBarCount(150);
      } else {
        setBarCount(60);
      }
    };

    updateBars(); // run on mount
    window.addEventListener("resize", updateBars);

    return () => window.removeEventListener("resize", updateBars);
  }, []);

  const bars = React.useMemo(() => {
    return Array.from({ length: barCount }).map(() => 4 + Math.random() * 12);
  }, [barCount]);
  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-1 rounded-full bg-neutral-100 p-1 shadow-sm dark:bg-neutral-800",
        className,
      )}
    >
      {/* Play/Pause */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={togglePlay} className="rounded-full p-2.5!">
            {isPlaying ? <Pause /> : <Play />}
          </Button>
        </TooltipTrigger>

        <TooltipContent className="z-50">
          <p>{isPlaying ? "Pause" : "Play"}</p>
        </TooltipContent>
      </Tooltip>

      {/* Wave + Progress */}
      <div className="relative flex h-8 flex-1 items-center justify-between px-1">
        {bars.map((height, idx) => (
          <div
            key={idx}
            className="w-0.5 rounded-sm bg-neutral-900 dark:bg-neutral-100"
            style={{ height: `${height}px` }}
          />
        ))}

        <div
          className="absolute top-0 left-0 h-full rounded bg-neutral-400/30"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

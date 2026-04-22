"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // ✅ Estimate duration (words per minute)
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

    // ✅ Fake progress updater
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

  // stable waveform
  const bars = React.useMemo(() => {
    return Array.from({ length: 30 }).map(() => 4 + Math.random() * 12);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl bg-neutral-100 p-3 shadow-sm dark:bg-neutral-800",
        className,
      )}
    >
      {/* Play/Pause */}
      <Button onClick={togglePlay} className="rounded-full p-2">
        {isPlaying ? <Pause /> : <Play />}
      </Button>

      {/* Wave + Progress */}
      <div className="relative flex h-6 flex-1 items-center justify-between px-1">
        {bars.map((height, idx) => (
          <div
            key={idx}
            className="w-0.5 rounded-sm bg-neutral-900 dark:bg-neutral-100"
            style={{ height: `${height}px` }}
          />
        ))}

        {/* ✅ Progress overlay */}
        <div
          className="absolute top-0 left-0 h-full rounded bg-neutral-400/10"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

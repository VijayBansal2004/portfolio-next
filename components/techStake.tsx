"use client";

import { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import {
  CSS,
  HTML5,
  JavaScript,
  Nextjs,
  ShadcnUI,
  TailwindCSS,
  React,
  TypeScript,
  GitHub,
  Bootstrap,
} from "./icons";
import Image from "next/image";
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function TechStake({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full items-center justify-center overflow-hidden sm:p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between sm:gap-10">
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={div1Ref}>
            <HTML5 />
          </Circle>
          <Circle ref={div2Ref}>
            <CSS />
          </Circle>
          <Circle ref={div3Ref}>
            <JavaScript />
          </Circle>
          <Circle ref={div4Ref}>
            <TypeScript />
          </Circle>
          <Circle ref={div5Ref}>
            <TailwindCSS />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-32 p-0">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={150}
              height={150}
              className="rounded-full"
            />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={div7Ref}>
            <React />
          </Circle>
          <Circle ref={div8Ref}>
            <Nextjs />
          </Circle>
          <Circle ref={div9Ref}>
            <ShadcnUI />
          </Circle>
          <Circle ref={div10Ref}>
            <GitHub />
          </Circle>
          <Circle ref={div11Ref}>
            <Bootstrap />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        endYOffset={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        endYOffset={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        endYOffset={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        endYOffset={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        curvature={130}
        endYOffset={5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div8Ref}
        reverse
        endYOffset={5}
        curvature={65}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div9Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div10Ref}
        reverse
        curvature={-65}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div11Ref}
        reverse
        curvature={-130}
        endYOffset={5}
      />
    </div>
  );
}

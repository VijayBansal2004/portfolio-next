"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { Para } from "./para";
import { AvatarGroup } from "./ui/avatar-group";
import { motion } from "motion/react";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  websiteURL: string;
  img: string;
  title: string;
  description: React.ReactNode;
  techStack: { icon: React.ReactNode; name: string }[];
}

export const ProjectCard = ({
  index,
  img,
  title,
  websiteURL,
  description,
  techStack,
}: ProjectCardProps) => {
  return (
    <Link href={websiteURL} target="_blank">
      <motion.div
        className="h-full cursor-pointer list-none"
        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          delay: index * 0.1,
          duration: 0.3,
        }}
      >
        <div className="group relative h-full rounded-lg border border-transparent transition-all duration-200 hover:border-inherit md:rounded-xl md:p-0">
          <GlowingEffect
            blur={0}
            borderWidth={2}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-md">
            <div className="relative flex flex-col gap-3">
              <div className="h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-3 pb-3 transition-all duration-300 ease-in-out group-hover:px-3">
                <h3 className="text-vj-primary dark:text-vj-primary-dark text-base leading-5 font-medium tracking-tight">
                  {title}
                </h3>
                <Para className="w-11/12 tracking-tight sm:w-full md:w-56">
                  {description}
                </Para>
                <AvatarGroup
                  className="mt-4 select-none"
                  avatarUrls={techStack}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

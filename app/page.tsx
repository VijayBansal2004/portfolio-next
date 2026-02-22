import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import {
  CSS,
  HTML5,
  JavaScript,
  Nextjs,
  React,
  ShadcnUI,
  TailwindCSS,
} from "@/components/icons";
import { Para } from "@/components/para";
import { SectionHeading } from "@/components/section-heading";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Home() {
  const technologiesUsed = [
    {
      icon: <HTML5 />,
      name: "HTML5",
    },
    {
      icon: <CSS />,
      name: "CSS",
    },
    {
      icon: <JavaScript />,
      name: "JavaScript",
    },
    {
      icon: <React />,
      name: "React",
    },
    {
      icon: <Nextjs />,
      name: "Nextjs",
    },
    {
      icon: <TailwindCSS />,
      name: "Tailwind CSS",
    },
    {
      icon: <ShadcnUI />,
      name: "Shadcn UI",
    },
  ];
  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <div className="flex items-center gap-2">
          <Heading>Vijay Bansal</Heading>
          <LayoutTextFlip
            words={[
              "Front-end Developer",
              "HTML, CSS, JavaScript, TypeScript",
              "ReactJS, NextJS",
              "Tailwind CSS, Shadcn UI",
              "Framer Motion",
              "Git/Github",
            ]}
          />
        </div>
        <Para className="max-w-lg pt-4 text-sm md:text-base">
          I&apos;m a front-end developer with an eye for design. I&apos;m
          passionate about building beautiful, user-friendly interfaces that are
          both functional and aesthetically pleasing.
        </Para>
      </Block>
      <Block>
        <SectionHeading>I love building things</SectionHeading>
        <div className="mt-4">
          <AvatarGroup className="select-none" avatarUrls={technologiesUsed} />
        </div>
      </Block>
    </div>
  );
}

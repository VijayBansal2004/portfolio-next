import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const HomeHeroSection = () => {
  return (
    <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
      <div className="flex flex-col-reverse gap-2 md:flex-row md:items-center">
        <Heading>Vijay Bansal</Heading>
        <LayoutTextFlip
          words={[
            "Front-end Developer",
            "HTML, CSS, JS, TS",
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
  );
};

export default HomeHeroSection;

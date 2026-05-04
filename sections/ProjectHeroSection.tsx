import { Para } from "@/components/para";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";

const ProjectHeroSection = () => {
  return (
    <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
      <Heading>Projects</Heading>
      <Para className="max-w-lg pt-4 text-sm md:text-base">
        Here are some of the projects I have worked on.
      </Para>
    </Block>
  );
};

export default ProjectHeroSection;

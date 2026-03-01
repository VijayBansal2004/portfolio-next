import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS_DATA } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading>Projects</Heading>
        <Para className="max-w-lg pt-4 text-sm md:text-base">
          Here are some of the projects I have worked on.
        </Para>
      </Block>
      <Block>
        <SectionHeading className="mb-6">I love building things</SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
          {PROJECTS_DATA.map((item, index) => (
            <ProjectCard
              key={index}
              index={index}
              websiteURL={item.websiteURL}
              img={item.imagePath}
              title={item.title}
              description={item.discription}
              techStack={item.techStack}
            />
          ))}
        </div>
      </Block>
    </div>
  );
};

export default ProjectsPage;

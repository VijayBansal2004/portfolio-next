import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { SectionHeading } from "@/components/section-heading";
import { CallToAction } from "@/components/ui/cta";
import WorkCard from "@/components/word-card";
import { WORK_COMPANIES } from "@/data/work-experiences";

const AboutPage = () => {
  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading>About Me</Heading>
        <Para className="max-w-lg pt-4 text-sm md:text-base">
          Hi, I am a Front-End Developer who builds modern, high-performance web
          applications with attention to detail and smooth user experiences.
        </Para>
      </Block>
      <Block>
        <SectionHeading className="mb-6">Worked at reputed firm</SectionHeading>
        <div className="flex flex-col gap-6">
          {WORK_COMPANIES.map((company) => (
            <WorkCard key={company.companyName} {...company} />
          ))}
        </div>
      </Block>
      <CallToAction />
    </div>
  );
};

export default AboutPage;

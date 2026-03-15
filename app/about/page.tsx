import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { SectionHeading } from "@/components/section-heading";
import { TechStake } from "@/components/techStake";
import { CallToAction } from "@/components/ui/cta";
import { Ripple } from "@/components/ui/ripple";
import WorkCard from "@/components/word-card";
import { WORK_COMPANIES } from "@/data/work-experiences";
import Image from "next/image";

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
      <Block className="hidden">
        <div className="relative flex h-[650px] w-full flex-col items-center justify-center">
          <div className="flex size-45 items-center justify-center overflow-hidden rounded-full">
            <Image src="/logo.jpg" alt="logo" width={500} height={500} />
          </div>
          <Ripple />
        </div>
      </Block>
      <Block className="hidden">
        <SectionHeading className="mx-auto mb-6">
          Tech Stack I use
        </SectionHeading>

        <TechStake />
      </Block>
      <Block>
        <SectionHeading className="mb-6">Worked at reputed firm</SectionHeading>
        <div className="flex flex-col gap-6">
          {WORK_COMPANIES.map((company) => (
            <WorkCard key={company.companyName} {...company} />
          ))}
        </div>
      </Block>
      <Block>
        <CallToAction />
      </Block>
    </div>
  );
};

export default AboutPage;

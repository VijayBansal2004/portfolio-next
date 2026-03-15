import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { SectionHeading } from "@/components/section-heading";
import { TechStake } from "@/components/techStake";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/ui/cta";
import { NativeMagnetic } from "@/components/ui/native-magnetic-shadcnui";
import { Ripple } from "@/components/ui/ripple";
import WorkCard from "@/components/word-card";
import { WORK_COMPANIES } from "@/data/work-experiences";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

const AboutPage = () => {
  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <Heading>About Me</Heading>
            <Para className="max-w-lg pt-4 text-sm md:text-base">
              {/* Hi, I am a Front-End Developer who builds modern, high-performance
              web applications with attention to detail and smooth user
              experiences. */}
              Hi, I&apos;m Vijay Bansal — a Frontend Developer specializing in
              React and Next.js. I build modern, high-performance web
              applications with a strong focus on clean UI, performance, and
              seamless user experiences. I enjoy transforming complex problems
              into intuitive digital solutions.
            </Para>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
              <Link href={"/contact"} className="flex items-center gap-2">
                <NativeMagnetic className="w-full sm:w-fit">
                  <Button className="w-full">
                    Start a Conversation{" "}
                    <ArrowRightIcon data-icon="inline-end" />
                  </Button>
                </NativeMagnetic>
              </Link>
              <NativeMagnetic className="w-full sm:w-fit">
                <Button variant={"outline"} className="w-full">
                  Download CV
                  <HiDownload />
                </Button>
              </NativeMagnetic>
            </div>
          </div>
          <div className="relative mt-5 flex h-full min-h-[330px] w-full flex-col items-center justify-center overflow-hidden md:mt-0 md:min-h-[350px]">
            <div className="relative z-2 flex size-25 items-center justify-center overflow-hidden rounded-full">
              <Image src="/logo.jpg" alt="logo" width={500} height={500} />
            </div>
            <Ripple />
          </div>
        </div>
      </Block>
      <Block>
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

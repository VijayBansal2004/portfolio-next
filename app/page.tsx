import { Block } from "@/components/block";
import BlogCard from "@/components/blog-card";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import TestimonialSection from "@/components/testimonials-section";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import WorkCard from "@/components/word-card";
import { BLOG_CARDS } from "@/data/blogs";
import { PROJECTS_DATA } from "@/data/projects";
import { WORK_COMPANIES } from "@/data/work-experiences";
import { Button } from "@/components/ui/button";
import { ImagesBadge } from "@/components/ui/images-badge";
import Link from "next/link";
import { CallToAction } from "@/components/ui/cta";

export default function Home() {
  return (
    <div>
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
      <Block>
        <SectionHeading className="mb-6">I love building things</SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
          {PROJECTS_DATA.slice(0, 3).map((item, index) => (
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
        <div className="mx-auto mt-10 sm:w-fit">
          <Button variant={"link"}>
            <Link href="/projects">
              <ImagesBadge
                hoverImageSize={{ width: 80, height: 50 }}
                hoverTranslateY={-60}
                text="View all Projects"
                images={[
                  "/projects/finsaix-full.webp",
                  "/projects/everest-remit-full.webp",
                  "/projects/bitnetx-full.webp",
                ]}
              />
            </Link>
          </Button>
        </div>
      </Block>
      <Block>
        <SectionHeading className="mb-6">
          Sharing knowledge as I learn
        </SectionHeading>
        <div className="flex flex-col gap-6">
          {BLOG_CARDS.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
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
        <SectionHeading className="mb-12">People love my work</SectionHeading>
        <TestimonialSection />
      </Block>
      <Block>
        <CallToAction />
      </Block>
    </div>
  );
}

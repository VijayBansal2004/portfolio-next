import { Block } from "@/components/block";
import BlogCard from "@/components/blog-card";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import TestimonialSection from "@/components/testimonials-section";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import WorkCard from "@/components/word-card";
import { tradingContent } from "@/data/projects";
import { BlogCardProps, WorkedCompanies } from "@/types/types";

export default function Home() {
  const WorkedCompanies: WorkedCompanies[] = [
    {
      companyName: "Webcom Systems Pvt. Ltd.",
      companyLogo: "/companies/webcom-logo.png",
      companyUrl: "https://webcomsystems.com.au/",
      role: "Front-end Developer",
      duration: "June 2024 - Present",
      description:
        "I work on the front-end of the company's main product, which is a web-based ERP system for schools. I work on new features, bug fixes, and improvements to the existing codebase.",
    },
  ];

  const BlogCards: BlogCardProps[] = [
    {
      title: "Advanced CSS Techniques for Modern Web Development",
      discription:
        "Explore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modern layout patterns that will take your web development skills to the next level.",
      datePosted: "Thursday, Feb 15, 2024",
    },
  ];
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
          {tradingContent.slice(0, 3).map((item, index) => (
            <ProjectCard
              key={index}
              index={index}
              img={item.imagePath}
              title={item.title}
              description={item.discription}
              techStack={item.techStack}
            />
          ))}
        </div>
      </Block>
      <Block>
        <SectionHeading className="mb-6">
          Sharing knowledge as I learn
        </SectionHeading>
        <div className="flex flex-col gap-6">
          {BlogCards.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </Block>
      <Block>
        <SectionHeading className="mb-6">Worked at reputed firm</SectionHeading>
        <div className="flex flex-col gap-6">
          {WorkedCompanies.map((company) => (
            <WorkCard key={company.companyName} {...company} />
          ))}
        </div>
      </Block>
      <Block>
        <SectionHeading className="mb-6">People love my work</SectionHeading>
        <TestimonialSection />
      </Block>
    </div>
  );
}

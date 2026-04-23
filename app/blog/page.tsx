import { Para } from "@/components/para";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import Blogs from "@/components/blogs";

export default function BlogPage() {
  return (
    <>
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <div>
          <Heading>Blogs</Heading>
          <Para className="max-w-lg pt-4 text-sm md:text-base">
            A collection of blogs on coding, design, and development. Built to
            help you learn faster and build better.
          </Para>
        </div>
      </Block>
      <Block>
        <Blogs />
      </Block>
    </>
  );
}

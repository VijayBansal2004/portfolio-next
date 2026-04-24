import { Para } from "@/components/para";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { BlogGridCard } from "@/components/blogCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const POSTS = getAllPosts();

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
        {/* <Blogs /> */}
        <div className="relative z-10 grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {POSTS.map((post, idx) => (
            <BlogGridCard key={post.slug} {...post} index={idx} />
          ))}
        </div>
      </Block>
    </>
  );
}

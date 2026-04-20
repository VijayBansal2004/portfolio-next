import { getAllPosts } from "@/lib/posts";
import { Para } from "@/components/para";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import BlogCard from "@/components/blog-card";

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
        {POSTS.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </Block>
    </>
  );
}

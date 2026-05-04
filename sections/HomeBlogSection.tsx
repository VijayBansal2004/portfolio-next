import { getAllPosts } from "@/lib/posts";
import { Block } from "@/components/block";
import BlogCard from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";

const HomeBlogSection = () => {
  const POSTS = getAllPosts();

  return (
    <Block>
      <SectionHeading className="mb-6">
        Sharing knowledge as I learn
      </SectionHeading>
      <div className="flex flex-col gap-6">
        {POSTS.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </Block>
  );
};

export default HomeBlogSection;

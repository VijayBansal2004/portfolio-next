import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { getPost } from "@/lib/posts";
import { cn } from "@/lib/utils";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <Block className="mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <Heading className="flex min-h-64 items-center justify-center text-center">
          Post not found
        </Heading>
      </Block>
    );
  }

  return (
    <div>
      <Block className="blog-page-block mt-0 border-0 pt-0 shadow-[none] dark:shadow-[none]">
        <div
          className={cn(
            "text-vj-secondary dark:text-vj-secondary-dark text-sm",
            "pt-4 text-sm md:text-base",
            "prose prose-lg dark:prose-invert max-w-none",
          )}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Block>
    </div>
  );
}

import { getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

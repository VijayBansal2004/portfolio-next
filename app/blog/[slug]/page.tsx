import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { getPost } from "@/lib/posts";
import { cn } from "@/lib/utils";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
        <Heading className="mb-2 text-2xl font-bold md:text-3xl">
          {post?.title}
        </Heading>

        <Para className="mb-4 text-xs">{post?.date}</Para>

        <div className="mb-4 flex flex-wrap gap-2">
          {post?.tags?.map((tag) => (
            <SectionHeading
              key={tag}
              className="text-vj-secondary! dark:text-vj-secondary-dark! m-0! cursor-pointer text-sm! font-normal! hover:text-neutral-500! hover:dark:text-neutral-300!"
            >
              #{tag}
            </SectionHeading>
          ))}
        </div>
        <div>
          <VoiceMessageBubble text={stripHtml(post.content || "")} />
        </div>
        <BlogSummary content={stripHtml(post.content || "")} />
        <div
          className={cn(
            "text-vj-secondary dark:text-vj-secondary-dark text-sm",
            "pt-4 text-sm md:text-base",
            "prose prose-lg dark:prose-invert max-w-none",
          )}
          dangerouslySetInnerHTML={{ __html: post?.content || "" }}
        />
      </Block>
    </div>
  );
}

import { getAllPosts } from "@/lib/posts";
import { Para } from "@/components/para";
import { SectionHeading } from "@/components/section-heading";
import VoiceMessageBubble from "@/components/voice-message-bubble";
import BlogSummary from "@/components/blogSummary";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

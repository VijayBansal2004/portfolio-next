import { Para } from "./para";
import { BlogCardProps } from "@/types/blog-type";

const BlogCard = ({ title, discription, datePosted }: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <div className="flex-4">
        <h3 className="text-vj-primary dark:text-vj-primary-dark mb-2 font-semibold tracking-tight">
          {title}
        </h3>
        <Para>{discription}</Para>
      </div>
      <div className="flex-1">
        <Para className="text-xs sm:text-sm">{datePosted}</Para>
      </div>
    </div>
  );
};

export default BlogCard;

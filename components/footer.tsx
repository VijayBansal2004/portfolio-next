import { GitHub, LinkedIn, X } from "./icons";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  return (
    <div className="px-4">
      <div className="text-vj-secondary dark:text-vj-secondary-dark flex items-center justify-between gap-2 text-xs">
        <p>
          Built with love by{" "}
          <span className="text-vj-primary dark:text-vj-primary-dark">
            Vijay Bansal
          </span>
        </p>
        <div className="flex items-center gap-2">
          <X />
          <LinkedIn />
          <GitHub />
        </div>
      </div>
      <div className="w-full">
        <TextHoverEffect text="VIJAY" />
      </div>
    </div>
  );
};

export default Footer;

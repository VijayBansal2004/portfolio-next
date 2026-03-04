import { Block } from "./block";
import { GitHub, LinkedIn, X } from "./icons";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  return (
    <Block>
      <div className="text-vj-secondary dark:text-vj-secondary-dark flex items-center justify-between gap-2 text-xs">
        <p>
          Built with love by{" "}
          <span className="text-vj-primary dark:text-vj-primary-dark font-medium">
            Vijay Bansal
          </span>
        </p>
        <div className="flex items-center gap-2">
          <X />
          <LinkedIn />
          <GitHub />
        </div>
      </div>
      <div className="hidden max-h-[220px] w-full overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] sm:block">
        <TextHoverEffect text="VIJAY" />
      </div>
    </Block>
  );
};

export default Footer;

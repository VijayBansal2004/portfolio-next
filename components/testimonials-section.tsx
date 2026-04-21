import { testimonials } from "@/data/testimonials";
import { Testimonials } from "./ui/testimonials";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialSection = () => {
  return (
    <div className="flex max-h-100 justify-center gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
      <Testimonials testimonials={firstColumn} duration={23} />
      <Testimonials
        testimonials={secondColumn}
        className="hidden md:block"
        duration={27}
      />
      <Testimonials
        testimonials={thirdColumn}
        className="hidden lg:block"
        duration={25}
      />
    </div>
  );
};

export default TestimonialSection;

import { cn } from "@/lib/utils";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-vj-primary dark:text-vj-primary-dark text-2xl font-bold tracking-tighter drop-shadow-lg md:text-4xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

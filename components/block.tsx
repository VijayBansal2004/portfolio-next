import { cn } from "@/lib/utils";

export const Block = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

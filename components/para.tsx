import { cn } from "@/lib/utils";

export const Para = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-vj-secondary dark:text-vj-secondary-dark text-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};

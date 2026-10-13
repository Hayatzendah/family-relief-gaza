import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
  ...aria
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...aria}
    >
      {children}
    </Tag>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-transparent shadow-sm",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:bg-accent-soft",
  ghost:
    "bg-transparent text-accent hover:bg-accent-soft border border-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;

    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as NativeButtonProps;
  void _href;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

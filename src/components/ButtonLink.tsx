import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonLinkProps = LinkProps &
  PropsWithChildren &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel" | "aria-label"> & {
    variant?: ButtonVariant;
    className?: string;
  };

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  const classes = ["button", variant, className].filter(Boolean).join(" ");

  return (
    <Link {...props} className={classes}>
      {children}
    </Link>
  );
}


import type { ComponentProps, ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import styles from "@/styles/ui/button-link.module.css";

type ButtonLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
};

/**
 * Shared localized navigation button.
 *
 * The visual design is controlled through a CSS Module.
 * This component must be used for navigation, not form submission.
 */
export function ButtonLink({
  href,
  children,
  className,
}: ButtonLinkProps) {
  const classes = [styles.button, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

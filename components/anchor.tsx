"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
  isNested?: true;
  nestedTitle?: string;
}

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  isNested,
  nestedTitle,
  ...props
}: AnchorProps) {
  // checking the current parh using the usePathname hook and href if are same
  const path = usePathname();
  let isMatch = absolute
    ? props.href.toString().split("/")[1] == path.split("/")[1]
    : path === props.href;

  // if isNested then check if path name includes the title
   if (isNested) {
    path.includes(nestedTitle!.toLowerCase()) && (isMatch = true);
   }

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  );
}

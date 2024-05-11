"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.min.css';
import { usePathname } from "next/navigation";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname();
  React.useLayoutEffect(() => {
    hljs.highlightAll();
  }, [pathname])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

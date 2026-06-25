"use client";

import type { ReactNode } from "react";

/** Client boundary on the page slot; transitions are handled in the layout. */
export default function LocaleTemplate({ children }: { children: ReactNode }) {
  return children;
}

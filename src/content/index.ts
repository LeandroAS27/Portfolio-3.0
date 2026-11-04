import { enContent } from "./en";
import { ptContent } from "./pt";
import type { Locale } from "./types";

export const getContent = (locale: Locale) =>
  locale === "en" ? enContent : ptContent;

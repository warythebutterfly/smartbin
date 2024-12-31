import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function formatDate(isoString?: string) {
  if (!isoString) return "";
  const date = new Date(isoString);

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}

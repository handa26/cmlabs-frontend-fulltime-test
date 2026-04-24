import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function strToUnderscored(str: string) {
  return str.toLowerCase().trim().replace(/\s+/g, '_');
}

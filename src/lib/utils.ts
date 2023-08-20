import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// This maybe is usseless
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

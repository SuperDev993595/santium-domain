import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge and deduplicate class names, resolving Tailwind conflicts.
 * Usage: :class="cn('p-2', isActive && 'bg-blue-500', customClass)"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

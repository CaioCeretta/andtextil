import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeString(string: string) {
  if (string.length === 0) {
    return string
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatProductName(productName: string) {
  const formattedName = productName.replace(/-/g, ' ')

  return formattedName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

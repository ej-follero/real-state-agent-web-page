/**
 * Image Helper Utilities
 * 
 * Helper functions for working with images in the application
 */

/**
 * Get image path - useful for dynamic image loading
 * @param imageName - Name of the image file
 * @param folder - Optional subfolder within assets/images
 * @returns Full path to the image
 */
export function getImagePath(imageName: string, folder?: string): string {
  const basePath = folder ? `@/assets/images/${folder}/${imageName}` : `@/assets/images/${imageName}`;
  return basePath;
}

/**
 * Example usage:
 * 
 * import { getImagePath } from '@/utils/imageHelper';
 * 
 * const imagePath = getImagePath('hero-bg.jpg', 'hero');
 * // Returns: '@/assets/images/hero/hero-bg.jpg'
 */

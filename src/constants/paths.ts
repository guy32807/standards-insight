/**
 * Path to the public directory for assets
 */
const PUBLIC_PATH = process.env.PUBLIC_URL || '';

/**
 * Helper to get the path to static images
 * @param imagePath Path to the image relative to the public directory
 * @returns Full path to the image
 */
export const getImagePath = (imagePath: string): string => {
  // If the path already starts with http or https, it's an external URL
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For local images, prepend the public URL
  return `${process.env.PUBLIC_URL}/${imagePath}`;
};

/**
 * Get the API URL, allowing for environment-specific variations
 */
export const API_URL = process.env.REACT_APP_API_URL || 'https://api.standardsinsight.com';
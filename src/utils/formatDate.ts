/**
 * Formats a date in a friendly, readable format
 * @param date - The date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

/**
 * Formats a date in a short format (MM/DD/YYYY)
 * @param date - The date to format
 * @returns Formatted date string
 */
export const formatShortDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(date);
};

/**
 * Returns a relative time string (e.g., "2 days ago")
 * @param date - The date to format
 * @returns Relative time string
 */
export const getRelativeTimeString = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSecs < 60) {
    return 'just now';
  }
  
  if (diffInMins < 60) {
    return `${diffInMins} minute${diffInMins === 1 ? '' : 's'} ago`;
  }
  
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }
  
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }
  
  // For older dates, return the formatted date
  return formatDate(date);
};
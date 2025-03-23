
/**
 * Utility functions for tracking and managing image paste statistics
 */

// Key used for storing stats in localStorage
const STATS_KEY = 'snappaste_stats';

// Stats interface
interface Stats {
  totalImagesPasted: number;
  firstPasteDate: string;
  lastPasteDate: string;
}

// Get stats from localStorage or create default stats
export const getStats = (): Stats => {
  const storedStats = localStorage.getItem(STATS_KEY);
  if (storedStats) {
    return JSON.parse(storedStats);
  }
  
  // Default stats object
  return {
    totalImagesPasted: 0,
    firstPasteDate: '',
    lastPasteDate: ''
  };
};

// Increment image paste count
export const recordImagePaste = (): void => {
  const stats = getStats();
  const currentDate = new Date().toISOString();
  
  stats.totalImagesPasted += 1;
  
  // Set first paste date if not set yet
  if (!stats.firstPasteDate) {
    stats.firstPasteDate = currentDate;
  }
  
  // Always update last paste date
  stats.lastPasteDate = currentDate;
  
  // Save updated stats
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};

// Format date to display in a readable format
export const formatDate = (isoDate: string): string => {
  if (!isoDate) return 'Never';
  
  const date = new Date(isoDate);
  return date.toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

import { AffiliateParams } from '../types';

/**
 * Constants for affiliate links and social media URLs
 */

// Base URL for CJ affiliate links
const AFFILIATE_BASE_URL = 'https://www.anrdoezrs.net/click-9083409-11089436';

// Secondary CJ tracking domains that might be used
const CJ_TRACKING_DOMAINS = {
  dpbolvw: 'https://www.dpbolvw.net/click-9083409-',
  jdoqocy: 'https://www.jdoqocy.com/click-9083409-',
  kqzyfj: 'https://www.kqzyfj.com/click-9083409-',
  tkqlhce: 'https://www.tkqlhce.com/click-9083409-'
};

// Mapping of product IDs to CJ merchant offer IDs
const PRODUCT_OFFER_IDS: Record<string, string> = {
  'iso9001': '11089436',
  'iso14001': '11089436',
  'iso45001': '11089436',
  'nec2023': '13297437',
  'nfpa70e': '13297437',
  'nfpa101': '13297437',
  'osha1910': '14120098',
  'explore_standards': '11089436', // Default for general links
  'general': '11089436' // Default for general links
};

// Mapping of product IDs to specific destination URLs (if needed)
const PRODUCT_DEST_URLS: Record<string, string> = {
  'iso9001': 'https://webstore.ansi.org/Standards/ISO/ISO90012015',
  'iso14001': 'https://webstore.ansi.org/Standards/ISO/ISO140012015',
  'iso45001': 'https://webstore.ansi.org/Standards/ISO/ISO450012018',
  'nec2023': 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70',
  'nfpa70e': 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70E',
  'nfpa101': 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=101',
  'osha1910': 'https://webstore.ansi.org/Standards/OSHA/CFR292019191001910',
};

/**
 * Generate a properly formatted CJ affiliate link
 * @param source - Source of the click (e.g., 'blog', 'product_page')
 * @param productId - ID of the product being linked
 * @param actionType - Type of action (e.g., 'view', 'download')
 * @returns The full CJ affiliate link
 */
export const getAffiliateLink = (
  source: string, 
  productId: string = 'general',
  actionType: string = 'view'
): string => {
  // Get the offer ID for this product, or use default
  const offerId = PRODUCT_OFFER_IDS[productId] || PRODUCT_OFFER_IDS.general;
  
  // Construct the base affiliate link
  let affiliateLink = `${AFFILIATE_BASE_URL}`;
  
  // If there's a specific destination URL for this product, append it
  if (PRODUCT_DEST_URLS[productId]) {
    // For CJ links, you need to add a proper URL param (often ?url= or ?u=)
    affiliateLink += `?url=${encodeURIComponent(PRODUCT_DEST_URLS[productId])}`;
  }
  
  // Add tracking parameters for your own analytics
  affiliateLink += (affiliateLink.includes('?') ? '&' : '?') + 
    `utm_source=standards_insight&utm_medium=${source}&utm_campaign=${productId}_${actionType}`;
  
  return affiliateLink;
};

/**
 * Get link to a specific standards category
 * @param category - Standards category (e.g., 'iso', 'astm', 'ansi')
 * @param source - Source of the click for tracking
 * @returns Full link to category page with tracking
 */
export const getCategoryLink = (category: string, source: string): string => {
  const categoryUrl = `https://webstore.ansi.org/search/standards?q=${encodeURIComponent(category)}`;
  
  // Use the CJ tracking link with the destination URL as a parameter
  return `${AFFILIATE_BASE_URL}?url=${encodeURIComponent(categoryUrl)}&utm_source=standards_insight&utm_medium=${source}&utm_campaign=category_${category}`;
};

/**
 * Social media and external site links
 */
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/standardsinfo',
  facebook: 'https://facebook.com/standardsinsight',
  linkedin: 'https://linkedin.com/company/standards-insight',
  youtube: 'https://youtube.com/c/standardsinsight',
  instagram: 'https://instagram.com/standards_insight'
};

/**
 * Standard anchor links for navigation within the site
 */
export const ANCHOR_LINKS = {
  popularStandards: '#popular-standards',
  featuredCategories: '#featured-categories',
  recentPosts: '#recent-posts',
  benefits: '#benefits'
};

/**
 * External resources links
 */
export const RESOURCE_LINKS = {
  ansiWebstore: 'https://webstore.ansi.org/',
  isoOrg: 'https://www.iso.org/',
  astmOrg: 'https://www.astm.org/',
  nfpaOrg: 'https://www.nfpa.org/',
  ieeeOrg: 'https://www.ieee.org/'
};
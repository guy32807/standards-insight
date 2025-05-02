import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  // Added properties to match what BlogPost is sending
  imageUrl?: string;
  imageAlt?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage,
  ogType = 'website',
  // Handle the additional props correctly
  imageUrl,
  imageAlt,
  type,
  publishedTime,
  modifiedTime,
  tags
}) => {
  const siteUrl = 'https://standards-insight.com'; // Replace with your actual site URL
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  
  // Use imageUrl as ogImage if ogImage isn't provided
  const finalOgImage = ogImage || imageUrl;
  // Use type as ogType if provided
  const finalOgType = type || ogType;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      {finalOgImage && <meta property="og:image" content={`${siteUrl}/${finalOgImage}`} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      
      {/* Article specific metadata */}
      {finalOgType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {finalOgType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {finalOgType === 'article' && tags && tags.map((tag, index) => (
        <meta property="article:tag" content={tag} key={index} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {finalOgImage && <meta name="twitter:image" content={`${siteUrl}/${finalOgImage}`} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
    </Helmet>
  );
};

export default SEO;
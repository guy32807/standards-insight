import { Standard } from '../types';

// Let's update our interface temporarily to make the transition easier
interface StandardWithPopularity extends Standard {
  popularityScore?: number;
}

export const standards: StandardWithPopularity[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    code: 'ISO 9001:2015', // Add required 'code' property
    description: 'Quality management systems — Requirements',
    imageUrl: 'images/iso9001.jpg',
    imageAlt: 'ISO 9001 Quality Management Systems certification document',
    category: 'Quality Management',
    featured: true,
    price: 138.00, // Add required 'price' property
    discountPrice: 124.20,
    productId: 'iso9001', // Add required 'productId' property
    popularityScore: 95 // Keep for sorting, but not exposed in public type
  },
  {
    id: 'iso14001',
    name: 'ISO 14001:2015',
    code: 'ISO 14001:2015',
    description: 'Environmental management systems — Requirements with guidance for use',
    imageUrl: 'images/iso14001.jpg',
    imageAlt: 'ISO 14001 Environmental Management Systems documentation',
    category: 'Environmental Management',
    featured: true,
    price: 138.00,
    discountPrice: 124.20,
    productId: 'iso14001',
    popularityScore: 88
  },
  {
    id: 'iso45001',
    name: 'ISO 45001:2018',
    code: 'ISO 45001:2018',
    description: 'Occupational health and safety management systems — Requirements with guidance for use',
    imageUrl: 'images/iso45001.jpg',
    imageAlt: 'ISO 45001 Occupational Health and Safety Management Systems documentation',
    category: 'Health and Safety',
    featured: true,
    price: 129.00,
    productId: 'iso45001',
    popularityScore: 86
  },
  {
    id: 'nec2023',
    name: 'NFPA 70: National Electrical Code (NEC) 2023',
    code: 'NFPA 70:2023',
    description: 'The benchmark for safe electrical design, installation, and inspection',
    imageUrl: 'images/nec2023.jpg',
    imageAlt: 'National Electrical Code 2023 handbook',
    category: 'Electrical',
    featured: true,
    price: 114.50,
    discountPrice: 102.99,
    productId: 'nec2023',
    popularityScore: 94
  },
  {
    id: 'nfpa70e',
    name: 'NFPA 70E: Standard for Electrical Safety in the Workplace',
    code: 'NFPA 70E',
    description: 'Requirements for safe work practices to protect personnel from electrical hazards',
    imageUrl: 'images/nfpa70e.jpg',
    imageAlt: 'NFPA 70E Electrical Safety standard book',
    category: 'Electrical Safety',
    featured: false,
    price: 77.50,
    productId: 'nfpa70e',
    popularityScore: 82
  },
  {
    id: 'asme',
    name: 'ASME B31.3: Process Piping',
    code: 'ASME B31.3',
    description: 'Requirements for materials, design, fabrication, assembly, inspection, and testing of piping',
    imageUrl: 'images/asmeb31.jpg',
    imageAlt: 'ASME B31.3 Process Piping standard documentation',
    category: 'Construction',
    featured: false,
    price: 195.00,
    productId: 'asmeb31',
    popularityScore: 78
  },
  {
    id: 'astm',
    name: 'ASTM E1527: Standard Practice for Environmental Site Assessments',
    code: 'ASTM E1527',
    description: 'Guidelines for conducting Phase I Environmental Site Assessments',
    imageUrl: 'images/astme1527.jpg',
    imageAlt: 'ASTM Environmental Site Assessments standard',
    category: 'Environmental',
    featured: false,
    price: 65.00,
    productId: 'astme1527',
    popularityScore: 76
  },
  {
    id: 'nfpa101',
    name: 'NFPA 101: Life Safety Code',
    code: 'NFPA 101',
    description: 'Safety standards to protect people from fire and related hazards',
    imageUrl: 'images/nfpa101.jpg',
    imageAlt: 'NFPA 101 Life Safety Code handbook',
    category: 'Safety',
    featured: true,
    price: 110.50,
    productId: 'nfpa101',
    popularityScore: 87
  },
  {
    id: 'osha',
    name: 'OSHA 29 CFR 1910',
    code: '29 CFR 1910',
    description: 'Occupational Safety and Health Standards for General Industry',
    imageUrl: 'images/osha1910.jpg',
    imageAlt: 'OSHA Standards for General Industry documentation',
    category: 'Workplace Safety',
    featured: true,
    price: 89.99,
    productId: 'osha1910',
    popularityScore: 92
  }
];

export const featuredStandards: Standard[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    code: 'ISO 9001:2015',
    description: 'Quality management systems — Requirements',
    imageUrl: 'images/iso9001.jpg',
    imageAlt: 'ISO 9001 Quality Management Systems certification document',
    category: 'Quality Management',
    featured: true,
    price: 138.00,
    discountPrice: 124.20,
    productId: 'iso9001'
  },
  {
    id: 'nfpa70',
    name: 'National Electrical Code (NEC)',
    code: 'NFPA 70',
    description: 'The benchmark for safe electrical design, installation, and inspection',
    imageUrl: 'images/nec.jpg',
    imageAlt: 'National Electrical Code book',
    category: 'Electrical',
    featured: true,
    price: 114.50,
    discountPrice: 102.99,
    productId: 'nfpa70'
  },
  {
    id: 'iso14001',
    name: 'ISO 14001:2015',
    code: 'ISO 14001:2015',
    description: 'Environmental management systems — Requirements with guidance for use',
    imageUrl: 'images/iso14001.jpg',
    imageAlt: 'ISO 14001 Environmental Management Systems certificate',
    category: 'Environmental',
    featured: true,
    price: 138.00,
    discountPrice: 124.20,
    productId: 'iso14001'
  },
  {
    id: 'osha1910',
    name: 'OSHA 1910',
    code: '29 CFR 1910',
    description: 'Occupational Safety and Health Standards for General Industry',
    imageUrl: 'images/osha.jpg',
    imageAlt: 'OSHA Safety Standards manual',
    category: 'Workplace Safety',
    featured: true,
    price: 89.99,
    productId: 'osha1910'
  },
  {
    id: 'iec60601',
    name: 'IEC 60601-1:2005',
    code: 'IEC 60601-1',
    description: 'Medical electrical equipment - General requirements for basic safety and essential performance',
    imageUrl: 'images/iec60601.jpg',
    imageAlt: 'Medical equipment safety testing',
    category: 'Medical',
    featured: true,
    price: 249.00,
    discountPrice: 224.10,
    productId: 'iec60601'
  },
  {
    id: 'astmf2413',
    name: 'ASTM F2413-18',
    code: 'ASTM F2413',
    description: 'Standard Specification for Performance Requirements for Protective (Safety) Toe Cap Footwear',
    imageUrl: 'images/astm-footwear.jpg',
    imageAlt: 'Safety footwear being tested for compliance',
    category: 'Personal Protective Equipment',
    featured: true,
    price: 56.00,
    productId: 'astmf2413'
  }
];

export const popularStandardCategories = [
  {
    id: 'quality',
    name: 'Quality Management',
    description: 'Standards for quality assurance and management systems',
    imageUrl: 'images/quality-standards.jpg',
    imageAlt: 'Team reviewing quality management documentation',
    count: 42
  },
  {
    id: 'safety',
    name: 'Workplace Safety',
    description: 'Standards for ensuring safe working environments',
    imageUrl: 'images/workplace-safety.jpg',
    imageAlt: 'Workers with proper safety equipment at construction site',
    count: 78
  },
  {
    id: 'electrical',
    name: 'Electrical Standards',
    description: 'Standards for electrical systems and safety',
    imageUrl: 'images/electrical-standards.jpg',
    imageAlt: 'Electrical panel being installed according to code',
    count: 56
  },
  {
    id: 'environmental',
    name: 'Environmental Management',
    description: 'Standards for environmental practices and sustainability',
    imageUrl: 'images/environmental-standards.jpg',
    imageAlt: 'Green business practices in manufacturing',
    count: 31
  },
  {
    id: 'construction',
    name: 'Construction Standards',
    description: 'Standards for building materials and construction practices',
    imageUrl: 'images/construction-standard.jpg',
    imageAlt: 'Construction workers reviewing building plans',
    count: 104
  },
  {
    id: 'medical',
    name: 'Medical Device Standards',
    description: 'Standards for medical equipment and healthcare',
    imageUrl: 'images/medical-standards.jpg',
    imageAlt: 'Medical device testing and certification',
    count: 63
  }
];

// Helper function to get featured standards
/**
 * Get featured standards
 * @param limit Maximum number of standards to return (optional)
 * @returns Array of featured standards
 */
export const getFeaturedStandards = (limit?: number): Standard[] => {
  // First try to get from the pre-defined featuredStandards array
  let result = [...featuredStandards];
  
  // If we don't have enough, get featured standards from the main standards array
  if (!result.length || (limit && result.length < limit)) {
    const filteredFromMain = standards
      .filter(standard => standard.featured)
      .map(({ popularityScore, ...rest }) => rest); // Remove popularityScore prop
      
    // Add any standards not already in result
    const existingIds = new Set(result.map(s => s.id));
    for (const standard of filteredFromMain) {
      if (!existingIds.has(standard.id)) {
        result.push(standard);
        existingIds.add(standard.id);
      }
    }
  }
  
  // Apply limit if provided
  if (limit && result.length > limit) {
    result = result.slice(0, limit);
  }
  
  return result;
};

// Helper function to get standards by category
export const getStandardsByCategory = (category: string): Standard[] => {
  return featuredStandards.filter(
    standard => standard.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to get most popular standards
export const getPopularStandards = (limit: number = 5): Standard[] => {
  // Type assertion is safe here because we know our internal data structure
  return [...standards]
    .sort((a, b) => {
      const scoreA = (a as StandardWithPopularity).popularityScore || 0;
      const scoreB = (b as StandardWithPopularity).popularityScore || 0;
      return scoreB - scoreA;
    })
    .slice(0, limit);
};

// Get all standards (combined featured and others)
export const getAllStandards = (): Standard[] => {
  // In a real application, this would likely fetch from an API
  return featuredStandards;
};

// Get standard by ID
export const getStandardById = (id: string): Standard | undefined => {
  return featuredStandards.find(standard => standard.id === id);
};

// Get related standards based on a standard
export const getRelatedStandards = (standardId: string, limit: number = 3): Standard[] => {
  const standard = getStandardById(standardId);
  
  if (!standard) {
    return [];
  }
  
  // Get standards in the same category, excluding the current one
  const relatedByCategory = featuredStandards.filter(
    s => s.category === standard.category && s.id !== standardId
  );
  
  // If we have enough in the same category, return those
  if (relatedByCategory.length >= limit) {
    return relatedByCategory.slice(0, limit);
  }
  
  // Otherwise, add some featured standards to fill the gap
  const additionalStandards = featuredStandards.filter(
    s => s.id !== standardId && !relatedByCategory.some(r => r.id === s.id)
  );
  
  return [...relatedByCategory, ...additionalStandards].slice(0, limit);
};
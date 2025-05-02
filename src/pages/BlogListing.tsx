import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { BlogPost } from '../types';
import { blogPosts } from '../data/BlogPosts';
import { getImagePath } from '../constants/paths';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const BlogHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #fff;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const PostImage = styled.div`
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${PostCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const PostExcerpt = styled.p`
  color: #666;
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.9rem;
`;

const PostDate = styled.span``;

const TagsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f0f8ff;
  color: var(--primary-color);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.$active ? 'var(--primary-color)' : '#f0f8ff'};
  color: ${props => props.$active ? 'white' : 'var(--primary-color)'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.$active ? 'var(--primary-color)' : '#e1f0ff'};
  }
`;

const BlogListing: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags with proper typing
  const allTags: string[] = Array.from(new Set(
    blogPosts.flatMap((post: BlogPost) => post.tags)
  )).sort();
  
  // Filter posts based on selected tag
  const filteredPosts = selectedTag 
    ? blogPosts.filter((post: BlogPost) => post.tags.includes(selectedTag))
    : blogPosts;
  
  // Sort posts by publish date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a: BlogPost, b: BlogPost) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );
  
  return (
    <>
      <SEO 
        title="Standards Insight Blog | Industry Standards Resources and Guides"
        description="Explore in-depth articles, guides, and resources about ANSI, ISO, ASTM, and other industry standards to help your organization stay compliant."
      />
      
      <BlogContainer>
        <BlogHeader>
          <Title>Standards Insight Blog</Title>
          <Subtitle>
            Expert guides and resources to help you navigate the complex world of industry standards
          </Subtitle>
        </BlogHeader>
        
        <FilterContainer>
          <FilterButton 
            $active={selectedTag === null} 
            onClick={() => setSelectedTag(null)}
          >
            All Posts
          </FilterButton>
          
          {allTags.map((tag: string) => (
            <FilterButton 
              key={tag}
              $active={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <PostsContainer>
          {sortedPosts.map((post: BlogPost) => {
            // Format date
            const formattedDate = new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }).format(post.publishedAt);
            
            return (
              <PostCard key={post.id}>
                <PostImage>
                  <OptimizedImage 
                    src={getImagePath(post.imageUrl)} 
                    alt={post.imageAlt} 
                  />
                </PostImage>
                <PostContent>
                  <PostTitle>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </PostTitle>
                  <PostExcerpt>{post.excerpt}</PostExcerpt>
                  <PostMeta>
                    <PostDate>{formattedDate}</PostDate>
                  </PostMeta>
                  <TagsContainer>
                    {post.tags.slice(0, 3).map((tag: string, index: number) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                  <ReadMore to={`/blog/${post.slug}`}>
                    Read Article →
                  </ReadMore>
                </PostContent>
              </PostCard>
            );
          })}
        </PostsContainer>
      </BlogContainer>
    </>
  );
};

export default BlogListing;
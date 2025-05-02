import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getLatestBlogPosts } from '../data/BlogPosts';
import { getImagePath } from '../constants/paths';

const SectionContainer = styled.div`
  padding: 4rem 1.5rem;
  background-color: #f9f9f9;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const PostImage = styled.div`
  height: 180px;
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

const PostTitle = styled.h3`
  font-size: 1.2rem;
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
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 3rem auto 0;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
    color: white;
  }
`;

const BlogSection: React.FC = () => {
  const latestPosts = getLatestBlogPosts(3);
  
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Latest Articles</SectionTitle>
        <SectionSubtitle>
          Expert guides and resources for understanding industry standards
        </SectionSubtitle>
      </SectionHeader>
      
      <PostsContainer>
        {latestPosts.map(post => (
          <PostCard key={post.id}>
            <PostImage>
              <img src={getImagePath(post.imageUrl)} alt={post.imageAlt} />
            </PostImage>
            <PostContent>
              <PostTitle>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <ReadMore to={`/blog/${post.slug}`}>Read More →</ReadMore>
            </PostContent>
          </PostCard>
        ))}
      </PostsContainer>
      
      <ViewAllButton to="/blog">
        Browse All Articles
      </ViewAllButton>
    </SectionContainer>
  );
};

export default BlogSection;
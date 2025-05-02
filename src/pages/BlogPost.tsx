import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { getBlogPostBySlug, getRelatedPosts } from '../data/BlogPosts';
import { formatDate } from '../utils/formatDate';
import { getImagePath } from '../constants/paths';
import OptimizedImage from '../components/OptimizedImage';
import { BlogPost as BlogPostType } from '../types'; // Import the BlogPost type

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const PostHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const PostDate = styled.div`
  margin-right: 1rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: #f0f8ff;
  color: var(--primary-color);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const FeaturedImage = styled.div`
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const PostContent = styled.div`
  line-height: 1.8;
  color: #333;
  font-size: 1.1rem;
  
  p, ul, ol {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.4rem;
    margin: 1.8rem 0 0.8rem;
  }
  
  ul, ol {
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 1rem;
    margin-left: 0;
    color: #555;
    font-style: italic;
  }
  
  code {
    background-color: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: monospace;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    border-radius: 5px;
    margin: 1.5rem 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
    
    th, td {
      border: 1px solid #ddd;
      padding: 0.5rem;
    }
    
    th {
      background-color: #f5f5f5;
      text-align: left;
    }
    
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  }
`;

const RelatedPostsSection = styled.div`
  margin-top: 4rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
`;

const RelatedPostsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const RelatedPostCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const RelatedPostImage = styled.div`
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    ${RelatedPostCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const RelatedPostContent = styled.div`
  padding: 1rem;
`;

const RelatedPostTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const RelatedPostDate = styled.div`
  color: #666;
  font-size: 0.8rem;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 0.5rem;
    color: #666;
  }
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');
  
  if (!post) {
    return (
      <PostContainer>
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog">Back to Blog</Link>
      </PostContainer>
    );
  }
  
  const formattedDate = formatDate(post.publishedAt);
  const relatedPosts = getRelatedPosts(post.id, 3);
  
  return (
    <>
      <SEO 
        title={`${post.title} | Standards Insight Blog`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.imageUrl}
        ogType="article"
      />
      
      <PostContainer>
        <Breadcrumbs>
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/blog">Blog</Link>
          <span>›</span>
          {post.title}
        </Breadcrumbs>
        
        <PostHeader>
          <Title>{post.title}</Title>
          <PostMeta>
            <PostDate>{formattedDate}</PostDate>
          </PostMeta>
          <TagsContainer>
            {post.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </PostHeader>
        
        <FeaturedImage>
          <OptimizedImage 
            src={getImagePath(post.imageUrl)} 
            alt={post.imageAlt} 
          />
        </FeaturedImage>
        
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        
        {relatedPosts.length > 0 && (
          <RelatedPostsSection>
            <RelatedPostsTitle>Related Posts</RelatedPostsTitle>
            <RelatedPostsGrid>
              {relatedPosts.map((relatedPost: BlogPostType) => { // Use BlogPostType here
                const relatedPostDate = formatDate(relatedPost.publishedAt);
                
                return (
                  <RelatedPostCard key={relatedPost.id}>
                    <RelatedPostImage>
                      <img 
                        src={getImagePath(relatedPost.imageUrl)} 
                        alt={relatedPost.imageAlt} 
                      />
                    </RelatedPostImage>
                    <RelatedPostContent>
                      <RelatedPostTitle>
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </RelatedPostTitle>
                      <RelatedPostDate>{relatedPostDate}</RelatedPostDate>
                    </RelatedPostContent>
                  </RelatedPostCard>
                );
              })}
            </RelatedPostsGrid>
          </RelatedPostsSection>
        )}
      </PostContainer>
    </>
  );
};

export default BlogPost;
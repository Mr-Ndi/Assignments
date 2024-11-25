import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Blog() {
  // Mock blog posts data
  const blogPosts = [
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' },
    { id: 3, title: 'Third Blog Post' }
  ];

  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <div className="blog-layout">
        <div className="blog-list">
          <h2>Recent Posts</h2>
          {blogPosts.map(post => (
            <div key={post.id} className="blog-preview">
              <Link to={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="blog-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Blog; 
import React from 'react';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page of our React application.</p>
      <div className="featured-section">
        <h2>Featured Content</h2>
        <div className="featured-items">
          <div className="feature">
            <h3>Products</h3>
            <p>Check out our latest products</p>
          </div>
          <div className="feature">
            <h3>Blog</h3>
            <p>Read our latest articles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 
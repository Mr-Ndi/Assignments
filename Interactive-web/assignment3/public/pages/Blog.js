import { Link, Outlet } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Second Blog Post" },
    { id: 3, title: "Third Blog Post" },
  ];
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog section! Choose a post to read: </p>
      <ul>
        {posts.map((post) => (
          <div>
            <Link to={`/blog/${post.id}`}>{post.title} </Link>
            <br />
          </div>
        ))}
      </ul>
      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
}

export default Blog;

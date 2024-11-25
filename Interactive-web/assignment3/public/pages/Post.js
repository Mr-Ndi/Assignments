import { useParams } from "react-router-dom";

const postDetails = {
  1: "This is the content of the first blog post.",
  2: "This is the content of the second blog post.",
  3: "This is the content of the third blog post.",
};
function Post() {
  const { postID } = useParams();
  const postContent = postDetails[postID];
  if (!postContent) {
    return <p>Post not found.</p>;
  }
  return (
    <div>
      <h2>Blog Post {postID}</h2>
      <p>{postContent}</p>
    </div>
  );
}

export default Post;

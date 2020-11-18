import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Listing Posts-{posts.length}</h1>

      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <h1>Title - {post.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Posts;

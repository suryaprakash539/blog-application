// import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);
  const posts = useSelector((state) => state.posts);
  //console.log(posts);
  return (
    <div>
      {posts ? (
        <div>
          <h1>Listing Posts-{posts.length}</h1>

          {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <h1>Title - {post.title}</h1>
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Posts;

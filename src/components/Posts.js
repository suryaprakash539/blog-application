import { useState, useEffect } from "react";
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
  const [pageNumber, setPageNumber] = useState(1);

  const postsPerPage = 10;
  const currentPage = pageNumber;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    //console.log(event.target.id);
    setPageNumber(event.target.id);
  };

  return (
    <div>
      {posts ? (
        <div>
          <h1>Listing Posts-{posts.length}</h1>
          {currentPosts.map((post) => {
            return (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <h1>Title - {post.title}</h1>
              </Link>
            );
          })}

          {pageNumbers.map((number) => {
            return (
              <button key={number} id={number} onClick={handleClick}>
                {number}
              </button>
            );
          })}
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

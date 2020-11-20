import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import ListGroup from "react-bootstrap/ListGroup";

const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);

  const posts = useSelector((state) => state.posts);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClick = (event) => {
    setPageNumber(event.target.id);
  };

  const postsPerPage = 10;
  const currentPage = pageNumber;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  let active = pageNumber;
  let items = [];

  for (
    let number = 1;
    number <= Math.ceil(posts.length / postsPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        active={active === number}
        key={number}
        id={number}
        onClick={handleClick}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      {posts ? (
        <div class="mainpost-list">
          <h1>Listing Posts-{posts.length}</h1>
          <ListGroup>
            {currentPosts.map((post) => {
              return (
                <Link key={post.id} to={`/posts/${post.id}`}>
                  <ListGroup.Item variant="warning">
                    <h6>Title - {post.title}</h6>
                  </ListGroup.Item>
                </Link>
              );
            })}
          </ListGroup>
          <div class="page-bar">
            <Pagination>{items}</Pagination>
          </div>
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

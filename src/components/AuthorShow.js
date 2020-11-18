// import { useState, useEffect } from "react";
// import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthorShow = () => {
  // const [author, setAuthor] = useState("");
  // const [posts, setPosts] = useState([]);

  const id = Number(useParams().id);
  const posts = useSelector((state) => state.posts);
  const authors = useSelector((state) => state.authors);
  const author = authors.find((author) => author.id === id);
  const postsToDisplay = posts.filter((post) => post.userId === id);

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((response) => {
  //       setAuthor(response.data);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  //     .then((response) => {
  //       setPosts(response.data);
  //     });
  // }, [id]);

  //console.log(author);
  return (
    <div>
      {author ? (
        <div>
          <div className="author-show">
            <h1>Name- {author.name}</h1>
            <h2>Email- {author.email}</h2>
            <h3>
              Address- {author.address.street},{author.address.city}
            </h3>
          </div>
          <div className="post-show">
            <h3>Listing posts written</h3>
            <ul className="post-list">
              {postsToDisplay.map((post) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={post.body}
                  to={`/posts/${post.id}`}
                >
                  <li>
                    <p>{post.title}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AuthorShow;

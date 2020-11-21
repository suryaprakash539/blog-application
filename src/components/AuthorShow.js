// import { useState, useEffect } from "react";
// import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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
        <div className="author-card">
          <Card
            border="danger"
            bg="dark"
            style={{ width: "25rem" }}
            className="mb-2"
          >
            <Card.Header>
              {" "}
              Name-<h2>{author.name}</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>Email- {author.email} </Card.Title>
              <Card.Text>
                Address- {author.address.street},{author.address.city}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="post-list">
            <h2>Listing posts written</h2>
            <ListGroup>
              {postsToDisplay.map((post) => (
                <Link key={post.body} to={`/posts/${post.id}`}>
                  <ListGroup.Item variant="warning">
                    {post.title}
                  </ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AuthorShow;

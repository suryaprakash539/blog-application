// import {useEffect,useState} from 'react'
// import axios from 'axios'
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CommentShow = ({ comment }) => {
  return (
    <div>
      <p>{comment.body}</p>
    </div>
  );
};

const PostShow = () => {
  // const [post, setPost] = useState("");
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const id = Number(useParams().id);
  const post = posts.find((post) => post.id === id);
  const commentsToDisplay = comments.filter(
    (comment) => comment.postId === post.id
  );

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }, [id]);

  return (
    <div>
      {post ? (
        <div className="comments">
          <Card border="success" style={{ width: "25rem" }} className="mb-2">
            <Card.Header>
              {" "}
              <h2>Post-{post.id}</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title> Title- {post.title} </Card.Title>
              <Card.Text>Body- {post.body}</Card.Text>
            </Card.Body>
          </Card>
          <div class="comment-list">
            <h3>Comments on Post</h3>
            <ListGroup>
              {commentsToDisplay.map((comment) => {
                return (
                  <ListGroup.Item variant="warning">
                    <CommentShow key={comment.id} comment={comment} />
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <Link to="/posts">Back</Link>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default PostShow;

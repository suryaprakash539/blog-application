// import {useEffect,useState} from 'react'
// import axios from 'axios'
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

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
        <div class="mainpost-show">
          <h1>Post-{post.id}</h1>
          <h2>
            Title- {post.title}
            <br />
            Body- {post.body}
          </h2>
          <h3 id="comments">Comments</h3>
          {commentsToDisplay.map((comment) => {
            return <CommentShow key={comment.id} comment={comment} />;
          })}
          <Link to="/posts">
            <p>Back</p>
          </Link>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default PostShow;

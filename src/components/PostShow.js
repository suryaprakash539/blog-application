// import {useEffect,useState} from 'react'
// import axios from 'axios'
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const PostShow = () => {
  // const [post, setPost] = useState("");
  const posts = useSelector((state) => state);
  const id = Number(useParams().id);
  const post = posts.find((post) => post.id === id);
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
        <div>
          <h1>Post-{post.id}</h1>
          <h2>
            Title- {post.title}
            <br />
            Body- {post.body}
          </h2>
          <Link to="/posts">Back</Link>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default PostShow;

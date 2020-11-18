import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Authors from "./components/Authors";
import AuthorShow from "./components/AuthorShow";
import Posts from "./components/Posts";
import PostShow from "./components/PostShow";

import { initializeAuthors } from "./reducers/authorReducer";
import { initializePosts } from "./reducers/postReducer";

const App = () => {
  // const posts = useSelector((state) => state.posts);
  // const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePosts());
  }, [dispatch]);
  // console.log(posts, "posts");

  useEffect(() => {
    dispatch(initializeAuthors());
  }, [dispatch]);
  //console.log(authors);

  return (
    <Router>
      <div>
        <h1>Blog Application</h1>
        <Link to="/authors">authors</Link>
        <Link to="/posts">Posts</Link>
        <Switch>
          <Route path="/authors/:id">
            <AuthorShow />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/posts/:id">
            <PostShow />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Authors from "./components/Authors";
import AuthorShow from "./components/AuthorShow";
import Posts from "./components/Posts";
import PostShow from "./components/PostShow";

import { initializeAuthors } from "./reducers/authorReducer";
import { initializeComments } from "./reducers/commentReducer";
import { initializePosts } from "./reducers/postReducer";
import Nav from "react-bootstrap/Nav";

const App = () => {
  const posts = useSelector((state) => state.posts);
  const authors = useSelector((state) => state.authors);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) dispatch(initializePosts());
  }, [dispatch]);
  // console.log(posts, "posts");

  useEffect(() => {
    if (authors.length === 0) dispatch(initializeAuthors());
  }, [dispatch]);
  //console.log(authors);

  useEffect(() => {
    if (comments.length === 0) dispatch(initializeComments());
  }, [dispatch]);
  // console.log(comments);

  return (
    <Router>
      <div>
        <header>
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link id="logo" href="/">
                Blog Application
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/authors">authors</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/posts">posts</Nav.Link>
            </Nav.Item>
          </Nav>
        </header>
        {/* <h1></h1>
        <Link to="/authors">authors</Link>
        <Link to="/posts">posts</Link> */}

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

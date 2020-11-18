import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Authors from "./components/Authors";
import AuthorShow from "./components/AuthorShow";
import Posts from "./components/Posts";
import PostShow from "./components/PostShow";

const App = () => {
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

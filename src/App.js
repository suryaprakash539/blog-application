import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Authors from "./components/Authors";
import AuthorShow from "./components/AuthorShow";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Blog Application</h1>
        <Link to="/authors">authors</Link>
        <Switch>
          <Route path="/authors/:id">
            <AuthorShow />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

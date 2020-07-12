import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import User from "./pages/user";
import AddArticle from "./pages/addArticle";
import Feed from "./pages/feed";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={User} />
      <Route path="/addArticle" component={AddArticle} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </Router>
);

export default App;

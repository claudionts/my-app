import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import User from "./pages/user";
import AddArticle from "./pages/addAticle";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={User} />
      <Route path="/addArticle" component={AddArticle} />
    </Switch>
  </Router>
);

export default App;

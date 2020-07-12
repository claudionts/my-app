import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import User from './pages/user';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={User} />
    </Switch>
  </Router>
);

export default App;

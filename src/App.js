import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

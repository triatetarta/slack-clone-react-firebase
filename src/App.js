import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
};

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;

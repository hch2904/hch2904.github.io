import React from 'react';
import { HashRouter as Router, Route, Switch }  from 'react-router-dom';

import HomeScreen from './screens/home';
import ProjectScreen from './screens/project';

import './app.scss';

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/project/:id' component={ProjectScreen} />
        <Route path='/' component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;

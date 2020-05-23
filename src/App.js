import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';

import HomeScreen from './screens/home';

import './app.scss';

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;

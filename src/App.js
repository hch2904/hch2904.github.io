import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/home';
import ProjectScreen from './screens/project';
import Projects from './screens/projects';

import './app.scss';
import About from './screens/about';
import ScrollToTop from './components/scrollToTop';

const someProps = {
  stack: ['Node', 'Java', 'Springboot', 'Microservices'],
  roles: ['Backend Developer'],
  heading: 'Retail Assistant',
  subHeading: 'A Shopping assitant for a modern shopper',
  description: 'A retail assistant which had its presence on Facebook messenger, Messaging app, Google Assistant. The retail assistant was used to organize and manage purchases across multiple retailers.'
};

function App () {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/projects' component={Projects} />
          <Route
            path='/project/:id'
            component={routerProps =>
              <ProjectScreen
                {...routerProps}
                details={someProps}
              />
            }
          />
          <Route path='/about' component={About} />
          <Route path='/' component={HomeScreen} />
          <Route path="*" component={HomeScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

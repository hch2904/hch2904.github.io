import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import HomeScreen from './screens/home';
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


const routes = [
  { path: '/', name: 'Home', Component: HomeScreen },
  { path: '/about', name: 'About', Component: About },
  { path: '/projects', name: 'Project', Component: Projects },
];


function App () {

  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="screen-container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="screen"
                  unmountOnExit
                >
                  <div className="screen">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
        {/* <Switch>
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
        </Switch> */}
      </Router>
    </>
  );
}

export default App;

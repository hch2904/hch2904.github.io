import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomeScreen from './screens/home';
import Projects from './screens/projects';
import ProjectScreen from './screens/project';

import './app.scss';
import About from './screens/about';
import ScrollToTop from './components/scrollToTop';
import projectsDb from './db/projects.json';
import NotFound from './screens/notFound';
import NavigationBar from './components/navbar';

const routes = [
  { path: '/about', name: 'About', Component: About },
  { path: '/projects', name: 'Projects', Component: Projects },
  {
    // eslint-disable-next-line react/display-name
    path: '/project/:id', name: 'Project', Component: (routerProps) => {
      const { pathname } = routerProps.location; 
      const hash = pathname.substr(9);
      return (<ProjectScreen
        {...routerProps}
        details={projectsDb.filter(project => project.slug === hash)[0]}
      />);
    }
  },
  { path: '/', name: 'Home', Component: HomeScreen },
  { path: '/*', name: 'Not Found', Component: NotFound }
];

const AppRoutes = () => {
  return (
    <>
      <NavigationBar />
      <Route render={(props) => {
        const { pathname } = props.location;
        return (
          <TransitionGroup>
            <CSSTransition
              timeout={900}
              classNames='screen'
              key={pathname}
              unmountOnExit
            >
              <Switch location={props.location}>
                {routes.map(({ path, Component }) => (
                  <Route exact key={path} path={path}>
                    <div className="screen">
                      <Component {...props} />
                    </div>
                  </Route>
                ))}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }} />
    </>);
};

function App () {
  return (
    <>
      <Router>
        <Route path="/" component={AppRoutes} />
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;

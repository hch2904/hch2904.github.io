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
      console.log(routerProps);
      return (<ProjectScreen
        {...routerProps}
        details={projectsDb.filter(project => project.slug === routerProps.match.params.id)[0]}
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
      <Route render={({location}) => {
        const { pathname } = location;
        return (
          <TransitionGroup>
            <CSSTransition
              timeout={900}
              classNames='screen'
              key={pathname}
            >
              <Switch location={location}>
                {routes.map(({ path, Component }) => (
                  <Route exact key={path} path={path}>
                    <div className="screen">
                      <Component />
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
        <ScrollToTop />
        <Route path="/" component={AppRoutes} />
      </Router>
    </>
  );
}

export default App;

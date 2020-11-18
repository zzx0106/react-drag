import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, RouteProps } from 'react-router-dom';
import { RoutesConfig, Routes } from './config';
const RouterView = (routes: RoutesConfig[]) => {
  console.log('routes', routes);
  return (
    <>
      {routes.map((route, index) => {
        if (!route.path) return <Route>404</Route>;
        return (
          <Route
            exact
            strict
            key={index}
            path={route.path}
            render={(props) => {
              if (route.component) {
                if (route.children) {
                  return <route.component {...props} {...route.children} />;
                } else {
                  return <route.component {...props} />;
                }
              } else {
                return null;
              }
            }}
          />
        );
      })}
    </>
  );

  // if (!route.path) return <Route>404</Route>;
  // console.log('----', route);
  // return <Route exact strict path={route.path} render={(props) => {
  //   if(route.children) {
  //     return <route.component {...props}
  //   }
  //   route.redirce ? (
  //     <Redirect push to={route.redirce} from={route.path}></Redirect>
  //   ) : (
  //     route.component && <route.component {...props} />
  //   )
  // }} />;
};

const RouterRoot = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <NavLink to="/bus">eventbus测试</NavLink>
            </li>
            <li>
              <NavLink to="/transfer">transfer测试</NavLink>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading....</div>}>
          {/* <RouterView props={Routes} /> */}
          {RouterView(Routes)}
          {/* {Routes.map((route, i) => (
            <RouterView key={i} {...route} />
          ))} */}
        </Suspense>
      </Router>
    </div>
  );
};

export default RouterRoot;

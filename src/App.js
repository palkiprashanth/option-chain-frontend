import React from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import './scss/style.scss';
import AuthMiddleware from './Routes/AuthMiddleware';
import { authRoutes, nonAuthRoutes } from './Routes/routes';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/Login/Login'));

const App = () => {

      const NonAuthMiddleware = ({
        component: Component,
      }) => (
        <Route
          render = {props => {
            return (
                <Component {...props} />
            );
          }}
        />
      );

    return (
      <BrowserRouter>
          <Switch>
              {nonAuthRoutes.map((route, idx) => (
                <NonAuthMiddleware
                  path={route.path}
                  component={route.component}
                  key={idx}
                />
              ))}

              {authRoutes.map((route, idx) => (
                <AuthMiddleware
                  path={route.path}
                  component={route.component}
                  key={idx}
                />
              ))}
          </Switch>
      </BrowserRouter>
    );
}

export default App;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'common/Authentication';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authContext } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authContext.authToken ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export const NoUserRoute = ({ component: Component, ...rest }) => {
  const { authContext } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authContext.authToken ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
};

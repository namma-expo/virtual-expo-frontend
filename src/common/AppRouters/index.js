import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'common/Authentication';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'components/HomePage';
import DashboardPage from 'components/Dashboard';
import { ProtectedRoute } from 'common/AppRouters';
import { AuthProvider } from 'common/Authentication';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/login"
              exact
              render={() => <HomePage isLoginOpen={true} />}
            />
            <ProtectedRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from 'components/HomePage';
import DashboardPage from 'components/ExhibitorDashboard';
import { ProtectedRoute, NoUserRoute } from 'common/AppRouters';
import { AuthProvider } from 'common/Authentication';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <NoUserRoute path="/" exact component={HomePage} />
            <ProtectedRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

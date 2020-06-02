import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'components/HomePage';
import DashboardPage from 'components/Dashboard';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>

          {/* Home page should always be at the bottom */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

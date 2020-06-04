import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'components/HomePage';
import ExhibitorDashboardPage from 'components/ExhibitorDashboard';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/exhibitor-dashboard">
            <ExhibitorDashboardPage />
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

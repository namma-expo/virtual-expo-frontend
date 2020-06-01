import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashboardPage from './components/Dashboard';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

import _ from 'lodash';
import React, { useContext } from 'react';
import NavBar from './NavBar';
import { ExhibitorDashboardWrapper } from 'common/Style/global-style';
import { NAVIGATION_ITEMS, ROUTE_ITEMS } from './navItems';
import { Button } from '@material-ui/core';
import { AuthContext } from 'common/Authentication';
import {
  ExhibitionProvider,
  ExhibitionContext,
} from 'components/ExhibitorDashboard/context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function DashboardRouter() {
  const { authUserSignOut } = useContext(AuthContext);
  const { exhibitionDetails } = useContext(ExhibitionContext);
  return (
    <Router>
      <ExhibitorDashboardWrapper>
        <NavBar items={NAVIGATION_ITEMS} />
        <Switch>
          {ROUTE_ITEMS.map((item, i) => {
            if (item.id === 'profile') {
              return (
                <Route
                  path={item.path}
                  render={(props) => <item.component {...props} />}
                />
              );
            } else {
              return (
                <Route
                  path={item.path}
                  render={(props) =>
                    _.isEmpty(exhibitionDetails) ? (
                      <Redirect to="/dashboard/profile" />
                    ) : (
                      <item.component {...props} />
                    )
                  }
                />
              );
            }
          })}
        </Switch>
        <Button onClick={() => authUserSignOut()}>Logout</Button>
      </ExhibitorDashboardWrapper>
    </Router>
  );
}
export default function DashboardPage() {
  return (
    <ExhibitionProvider>
      <DashboardRouter />
    </ExhibitionProvider>
  );
}

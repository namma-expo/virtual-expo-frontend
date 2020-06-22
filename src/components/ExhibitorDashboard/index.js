import React, { useContext } from 'react';
import NavBar from './NavBar';
import { ExhibitorDashboardWrapper } from 'common/Style/global-style';
import { NAVIGATION_ITEMS } from './navItems';
import { Button } from '@material-ui/core';
import { AuthContext } from 'common/Authentication';

export const NavContext = React.createContext();

export default function DashboardPage() {
  const [currentComponent, setCurrentComponent] = React.useState(
    NAVIGATION_ITEMS[6],
  );
  const { authUserSignOut } = useContext(AuthContext);
  return (
    <NavContext.Provider value={{ setCurrentComponent }}>
      <ExhibitorDashboardWrapper>
        <NavBar items={NAVIGATION_ITEMS} />
        {currentComponent.component && (
          <currentComponent.component {...currentComponent} />
        )}
        <Button onClick={() => authUserSignOut()}>Logout</Button>
      </ExhibitorDashboardWrapper>
    </NavContext.Provider>
  );
}

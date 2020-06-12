import React from 'react';
import NavBar from './NavBar';
import { ExhibitorDashboardWrapper } from 'common/Style/global-style';
import { NAVIGATION_ITEMS } from './navItems';

export const NavContext = React.createContext();

export default function DashboardPage() {
  const [currentComponent, setCurrentComponent] = React.useState(
    NAVIGATION_ITEMS[2],
  );
  return (
    <NavContext.Provider value={{ setCurrentComponent }}>
      <ExhibitorDashboardWrapper>
        <NavBar items={NAVIGATION_ITEMS} />
        {currentComponent.component && (
          <currentComponent.component {...currentComponent} />
        )}
      </ExhibitorDashboardWrapper>
    </NavContext.Provider>
  );
}

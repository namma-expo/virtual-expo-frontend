import React from 'react';
import NavBar from './navBar';
import { ExhibitorDashboardWrapper } from 'common/Style/global-style';
import { NAVIGATION_ITEMS } from './navItems';

export default function DashboardPage() {
  const [currentComponent, setCurrentComponent] = React.useState();
  return (
    <ExhibitorDashboardWrapper>
      <NavBar
        items={NAVIGATION_ITEMS}
        onMenuClick={(item) => {
          setCurrentComponent(item);
        }}
      />
      {currentComponent && <currentComponent.component {...currentComponent} />}
    </ExhibitorDashboardWrapper>
  );
}

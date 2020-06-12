import React from 'react';
import { Hidden } from '@material-ui/core';
import DesktopNavBar from './Desktop';
import MobileNavBar from './Mobile';

export default function NavBar({ items = [] }) {
  return (
    <React.Fragment>
      {/* Mobile NavBar */}
      <Hidden smUp>
        <MobileNavBar items={items} onMenuClick={() => {}} />
      </Hidden>

      {/* Desktop NavBar */}
      <Hidden xsDown>
        <DesktopNavBar items={items} />
      </Hidden>
    </React.Fragment>
  );
}

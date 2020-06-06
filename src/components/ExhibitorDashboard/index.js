import React from 'react';
import NavBar from './dashboardNavBar';
import { ExhibitorDashboardWrapper } from 'common/Style/global-style';
import ExhibitorContacts from '../ExhibitorContacts';

export default function DashboardPage() {
  return (
    <ExhibitorDashboardWrapper>
      <NavBar />
      <ExhibitorContacts />
    </ExhibitorDashboardWrapper>
  );
}

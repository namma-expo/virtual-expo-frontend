import React from 'react';
import NavBar from './dashboardNavBar';
import { DashboardWrapper, DashboardContentWrapper } from './style';

export default function DashboardPage() {
  return (
    <DashboardWrapper>
      <NavBar />
      <DashboardContentWrapper>data</DashboardContentWrapper>
    </DashboardWrapper>
  );
}

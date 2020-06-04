import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {
  primaryLightColor,
  secondarySectionBackground,
} from 'common/Style/global-color';
import { snBreakpoint, breakPointSm } from 'common/Style/global-utilities';

const FlexAlignJustifyCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin: 0px;
  padding: 0px 0px 0px 65px;
  background-color: ${secondarySectionBackground};
`;

export const DashboardContentWrapper = styled.div`
  padding: 20px 50px 40px;
`;

export const HamburgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 59px;
  width: 100%;
  padding: 8px 10px;
  margin: 0px;
  background-color: #04244a;
  button,
  a {
    margin-right: 7px;
    color: ${primaryLightColor};
  }
  @media (max-width: ${snBreakpoint(breakPointSm)}) {
    width: auto;
    height: 56px;
    margin: 0px;
    padding: 0px;
  }
`;

export const ProfileDetails = styled.div`
  text-align: center;
  color: ${primaryLightColor};
  margin: 15px 0px;
  h6 {
    font-size: 15px;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
  }
`;

const MobileNavDrawer = 280;
const drawerWidth = 245;
export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    position: 'fixed',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: '0 2px 20px 0 rgba(0, 0, 20, 0.15)',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '65px',
  },
  desktopDrawerWrapper: {
    overflow: 'hidden',
    zIndex: '2200',
    backgroundColor: '#154073',
  },
  navItemStyle: {
    color: primaryLightColor,
    padding: '11px 16px',
    '& svg': {
      width: '22px',
      height: '22px',
      margin: '0px 22px 0px 4px',
    },
    '& span': {
      fontSize: '14px',
    },
  },
  nestedListWrapper: {
    backgroundColor: '#0c376b',
  },
  nestedListItems: {
    padding: '8px 10px 8px 64px',
    color: primaryLightColor,
    '& span': {
      fontSize: '14px',
    },
  },
}));

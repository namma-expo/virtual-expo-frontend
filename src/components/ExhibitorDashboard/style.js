import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import {
  primaryLightText,
  primaryLightColor,
  primaryBorderColor,
  primarySectionBackground,
  secondarySectionBackground,
  primaryIconColor,
} from 'common/Style/global-color';
import { snBreakpoint, breakPointMuiSm } from 'common/Style/global-utilities';

const FlexAlignJustifyCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerMenuWrapper = styled.div`
  margin: 0px;
  background-color: ${secondarySectionBackground};
  button {
    margin: 0px;
    padding: 15px;
    color: ${primaryIconColor};
  }

  @media (min-width: ${snBreakpoint(breakPointMuiSm)}) {
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
      padding: 12px;
      color: ${primaryLightText};
    }
  }
`;

export const ProfileDetails = styled.div`
  text-align: center;
  color: ${primaryLightText};
  margin: 15px 0px;
  h6 {
    font-size: 15px;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
  }
`;

export const HorizontalNavLinkWrapper = styled.div`
  flex: 1;
`;

export const MobileNavDrawerHeader = styled.div`
  min-height: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0px 16px 0px 18px;
  justify-content: space-between;
  background-color: ${primarySectionBackground};
  border-bottom: 1px solid ${primaryBorderColor};
`;

export const MobileNavDrawerItemsWrapper = styled.div`
  height: calc(100% - 55px);
  max-height: 100%;
  overflow-x: auto;
`;

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
      margin: '0px 0px 0px 5px',
    },
    '& >div': {
      margin: '0px 4px 0px 22px',
    },
    '& span': {
      fontSize: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      color: primaryIconColor,
      '& svg': {
        width: '20px',
        height: '20px',
        margin: '0px',
      },
    },
  },
  nestedListWrapper: {
    backgroundColor: '#0c376b',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: primaryLightText,
    },
  },
  nestedListItems: {
    padding: '8px 10px 8px 64px',
    color: primaryLightColor,
    '& span': {
      fontSize: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      color: primaryIconColor,
    },
  },
  mobileAppBar: {
    height: '55px',
    top: 'auto',
    bottom: '0px',
    padding: '0px',
    margin: '0px',
    position: 'fixed',
    backgroundColor: secondarySectionBackground,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow:
      '0 -2px 4px -1px rgba(0, 0, 0, 0.07), 0 -1px 10px 0 rgba(0, 0,0, 0.08)',
  },
  mobileDrawerPaper: {
    width: '100%',
    maxHeight: '450px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    backgroundColor: secondarySectionBackground,
  },

  closeBtn: {
    padding: '0px',
  },
}));

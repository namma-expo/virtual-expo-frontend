import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Hidden,
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import {
  useStyles,
  HamburgerMenuWrapper,
  ProfileDetails,
  HorizontalNavLinkWrapper,
  MobileNavDrawerHeader,
  MobileNavDrawerItemsWrapper,
} from './style';

export default function DashboardNavBar(props) {
  const classes = useStyles();
  const [isDesktopDrawerOpen, setDesktopDrawerOpen] = React.useState(false);
  const [openNestedNav, setNestedNavOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDesktopDrawerToggle() {
    setDesktopDrawerOpen(!isDesktopDrawerOpen);
  }

  const handleNestedNavItemsClick = () => {
    setNestedNavOpen(!openNestedNav);
  };

  function handleMobileDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <React.Fragment>
      {/* Mobile NavBar */}
      <Hidden smUp>
        <AppBar position="fixed" className={classes.mobileAppBar}>
          {/* Mobile horizontal bottom menu bar */}
          <HorizontalNavLinkWrapper></HorizontalNavLinkWrapper>
          <HamburgerMenuWrapper>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleMobileDrawerToggle}
              className={classes.mobileHamburgerButton}
            >
              <MenuIcon />
            </IconButton>
          </HamburgerMenuWrapper>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor="bottom"
          open={mobileOpen}
          onClose={handleMobileDrawerToggle}
          classes={{
            paper: classes.mobileDrawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <MobileNavDrawerHeader>
            <NavLink to={'/home'}>Logo</NavLink>
            <IconButton
              aria-label="close"
              onClick={handleMobileDrawerToggle}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>
          </MobileNavDrawerHeader>
          <MobileNavDrawerItemsWrapper>
            <List disablePadding>
              <ListItem
                button
                onClick={handleNestedNavItemsClick}
                className={classes.navItemStyle}
              >
                <DashboardOutlinedIcon />
                <ListItemText primary="Page Layouts" />
                {openNestedNav ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openNestedNav} timeout="auto" unmountOnExit>
                <List component="div" className={classes.nestedListWrapper}>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Hero Section" />
                  </ListItem>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Section 1" />
                  </ListItem>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Section 2" />
                  </ListItem>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Section 3" />
                  </ListItem>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Section 4" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button className={classes.navItemStyle}>
                <GroupAddOutlinedIcon />
                <ListItemText primary="Contacts" />
              </ListItem>
              <ListItem button className={classes.navItemStyle}>
                <TextsmsOutlinedIcon />
                <ListItemText primary="Chat" />
              </ListItem>
              <ListItem button className={classes.navItemStyle}>
                <AttachMoneyIcon />
                <ListItemText primary="Pricing" />
              </ListItem>
              <ListItem button className={classes.navItemStyle}>
                <FormatListBulletedOutlinedIcon />
                <ListItemText primary="Event Agenda" />
              </ListItem>
              <ListItem button className={classes.navItemStyle}>
                <BarChartOutlinedIcon />
                <ListItemText primary="Analytics" />
              </ListItem>
              <ListItem
                button
                onClick={handleNestedNavItemsClick}
                className={classes.navItemStyle}
              >
                <AccountBoxOutlinedIcon />
                <ListItemText primary="Profile" />
                {openNestedNav ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openNestedNav} timeout="auto" unmountOnExit>
                <List component="div" className={classes.nestedListWrapper}>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Account" />
                  </ListItem>
                  <ListItem button className={classes.nestedListItems}>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </MobileNavDrawerItemsWrapper>
        </Drawer>
      </Hidden>

      {/* Desktop NavBar */}
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: isDesktopDrawerOpen,
            [classes.drawerClose]: !isDesktopDrawerOpen,
          })}
          classes={{
            paper: clsx(
              {
                [classes.drawerOpen]: isDesktopDrawerOpen,
                [classes.drawerClose]: !isDesktopDrawerOpen,
              },
              classes.desktopDrawerWrapper,
            ),
          }}
          open={isDesktopDrawerOpen}
        >
          <HamburgerMenuWrapper>
            <div>
              <IconButton
                aria-label={
                  isDesktopDrawerOpen ? 'close drawer' : 'open drawer'
                }
                onClick={handleDesktopDrawerToggle}
                className={classes.menuButtonDesktop}
              >
                {isDesktopDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <NavLink to={'/home'}>Logo</NavLink>
            </div>
            {isDesktopDrawerOpen && (
              <ProfileDetails>
                <Typography variant="h6">Madhukar</Typography>
                <Typography variant="body1" noWrap>
                  madhukar@gmail.com
                </Typography>
              </ProfileDetails>
            )}
          </HamburgerMenuWrapper>
          <List disablePadding>
            <ListItem
              button
              onClick={handleNestedNavItemsClick}
              className={classes.navItemStyle}
            >
              <DashboardOutlinedIcon />
              <ListItemText primary="Page Layouts" />
              {openNestedNav ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openNestedNav} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nestedListWrapper}>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Hero Section" />
                </ListItem>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Section 1" />
                </ListItem>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Section 2" />
                </ListItem>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Section 3" />
                </ListItem>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Section 4" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.navItemStyle}>
              <GroupAddOutlinedIcon />
              <ListItemText primary="Contacts" />
            </ListItem>
            <ListItem button className={classes.navItemStyle}>
              <TextsmsOutlinedIcon />
              <ListItemText primary="Chat" />
            </ListItem>
            <ListItem button className={classes.navItemStyle}>
              <AttachMoneyIcon />
              <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem button className={classes.navItemStyle}>
              <FormatListBulletedOutlinedIcon />
              <ListItemText primary="Event Agenda" />
            </ListItem>
            <ListItem button className={classes.navItemStyle}>
              <BarChartOutlinedIcon />
              <ListItemText primary="Analytics" />
            </ListItem>
            <ListItem
              button
              onClick={handleNestedNavItemsClick}
              className={classes.navItemStyle}
            >
              <AccountBoxOutlinedIcon />
              <ListItemText primary="Profile" />
              {openNestedNav ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openNestedNav} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nestedListWrapper}>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Account" />
                </ListItem>
                <ListItem button className={classes.nestedListItems}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}

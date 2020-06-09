import React from 'react';
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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  useStyles,
  HamburgerMenuWrapper,
  ProfileDetails,
  HorizontalNavLinkWrapper,
  MobileNavDrawerHeader,
  MobileNavDrawerItemsWrapper,
} from './style';

export default function NavBar({ items = [], onMenuClick = () => {} }) {
  const classes = useStyles();
  const [isDesktopDrawerOpen, setDesktopDrawerOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [nestedNavState, setNestedNavState] = React.useState(false);

  const handleDesktopDrawerToggle = () => {
    setDesktopDrawerOpen(!isDesktopDrawerOpen);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNestedNavClick = () => {
    setDesktopDrawerOpen(true);
    setNestedNavState(!nestedNavState);
  };

  const handleMenuItemClick = (item) => {
    setDesktopDrawerOpen(true);
    onMenuClick(item);
  };

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
              {items.map((item) => {
                return (
                  <React.Fragment>
                    {item.subitems != null ? (
                      <React.Fragment>
                        <ListItem
                          button
                          key={item.id}
                          onClick={handleNestedNavClick}
                          className={classes.navItemStyle}
                        >
                          <item.icon />
                          <ListItemText primary={item.title} />
                          {nestedNavState[item.title] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </ListItem>
                        <Collapse
                          component="li"
                          in={nestedNavState}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List
                            component="div"
                            className={classes.nestedListWrapper}
                          >
                            {item.subitems.map((nestedItem) => {
                              return (
                                <ListItem
                                  button
                                  className={classes.nestedListItems}
                                  onClick={() =>
                                    handleMenuItemClick(nestedItem)
                                  }
                                >
                                  <ListItemText primary={nestedItem.title} />
                                </ListItem>
                              );
                            })}
                          </List>
                        </Collapse>
                      </React.Fragment>
                    ) : (
                      <ListItem
                        button
                        className={classes.navItemStyle}
                        onClick={() => handleMenuItemClick(item)}
                      >
                        <item.icon />
                        <ListItemText primary={item.title} />
                      </ListItem>
                    )}
                  </React.Fragment>
                );
              })}
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
            {items.map((item) => {
              return (
                <React.Fragment>
                  {item.subitems != null ? (
                    <React.Fragment>
                      <ListItem
                        button
                        onClick={handleNestedNavClick}
                        className={classes.navItemStyle}
                      >
                        <item.icon />
                        <ListItemText primary={item.title} />
                        {nestedNavState[item.title] ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItem>
                      <Collapse
                        component="li"
                        in={nestedNavState}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          component="div"
                          className={classes.nestedListWrapper}
                        >
                          {item.subitems.map((nestedItem) => {
                            return (
                              <ListItem
                                button
                                className={classes.nestedListItems}
                                onClick={() => handleMenuItemClick(nestedItem)}
                              >
                                <ListItemText primary={nestedItem.title} />
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  ) : (
                    <ListItem
                      button={true}
                      selected
                      className={classes.navItemStyle}
                      onClick={() => handleMenuItemClick(item)}
                    >
                      <item.icon />
                      <ListItemText primary={item.title} />
                    </ListItem>
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}

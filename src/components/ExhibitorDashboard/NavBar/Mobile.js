import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  useStyles,
  HamburgerMenuWrapper,
  HorizontalNavLinkWrapper,
  MobileNavDrawerHeader,
  MobileNavDrawerItemsWrapper,
} from './style';

export default function MobileNavBar({ items = [], onMenuClick = () => {} }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [nestedNavState, setNestedNavState] = React.useState(false);

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNestedNavClick = () => {
    setNestedNavState(!nestedNavState);
  };

  const handleMenuItemClick = (item) => {
    onMenuClick(item);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

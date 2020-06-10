import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
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
  NavBarItemsWrapper,
} from './style';

export default function DesktopNavBar({ items = [], onMenuClick = () => {} }) {
  const classes = useStyles();
  const [isDesktopDrawerOpen, setDesktopDrawerOpen] = React.useState(false);
  const [nestedNavState, setNestedNavState] = React.useState(false);

  const handleDesktopDrawerToggle = () => {
    setNestedNavState(false);
    setDesktopDrawerOpen(!isDesktopDrawerOpen);
  };

  const handleNestedNavClick = () => {
    setDesktopDrawerOpen(true);
    setNestedNavState(!nestedNavState);
  };

  const handleMenuItemClick = (item) => {
    setDesktopDrawerOpen(false);
    onMenuClick(item); // propagate the component change to parent
  };

  return (
    <React.Fragment>
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
        onMouseOver={() => {
          // setDesktopDrawerOpen(true);
        }}
        onMouseLeave={() => {
          setNestedNavState(false);
          setDesktopDrawerOpen(false);
        }}
      >
        <HamburgerMenuWrapper isNavExpanded={isDesktopDrawerOpen}>
          <div>
            <IconButton
              aria-label={isDesktopDrawerOpen ? 'close drawer' : 'open drawer'}
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
        <NavBarItemsWrapper>
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
        </NavBarItemsWrapper>
      </Drawer>
    </React.Fragment>
  );
}

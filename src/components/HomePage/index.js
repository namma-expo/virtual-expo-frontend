import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import {
  Button,
  Drawer,
  Hidden,
  Dialog,
  Grid,
  Typography,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import WebIcon from '@material-ui/icons/Web';
import GroupIcon from '@material-ui/icons/Group';
import AgendaDrawer from 'components/AgendaDrawer';
import logo from 'images/logo.png';
import LoginComponent from '../Login';
import RegisterComponent from '../Register';
import {
  useStyles,
  HomePageWrapper,
  TopBar,
  TopBarActionButtons,
  ActionButtonGroup,
  ActionButtonWrapper,
  LogoWrapper,
  IframeWrapper,
  LoginRightWrapper,
  ContentWrapper,
  HomePageContentWrapper,
  CardsWrapper,
} from './style.js';

export default function HomePage({ isLoginOpen = false }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isLoginOpen);
  const [openRegister, setRegisterOpen] = React.useState(false);
  const [openDemoVideo, setDemoVideo] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleRegistrationDrawerToggle = () => {
    setRegisterOpen(!openRegister);
  };
  const handleDemoVideDrawerToggle = () => {
    setDemoVideo(!openDemoVideo);
  };

  return (
    <div>
      <AgendaDrawer />
      <IframeWrapper>
        <iframe
          title="101"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://momento360.com/e/u/29c5330ec79048479c878633371728b8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=100"
        ></iframe>
      </IframeWrapper>

      <HomePageWrapper>
        <TopBar>
          <LogoWrapper>Logo</LogoWrapper>
          <TopBarActionButtons>
            <ActionButtonGroup>
              <Button variant="contained" onClick={handleDrawerToggle}>
                Log In
              </Button>
              <Button
                variant="outlined"
                disableElevation
                onClick={handleDemoVideDrawerToggle}
              >
                <Hidden xsDown> Platform</Hidden> Demo
              </Button>
              <Dialog
                onClose={handleDemoVideDrawerToggle}
                aria-labelledby="simple-dialog-title"
                open={openDemoVideo}
                className={classes.dialogDemoVideoWrapper}
              >
                <Player autoPlay={true}>
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                  <BigPlayButton position="center" />
                </Player>
              </Dialog>
            </ActionButtonGroup>
            {/* <LiveActionButtonGroup>
              <Button variant="contained" onClick={handleDrawerToggle}>
                <EventNoteIcon />
              </Button>
              <Button variant="contained" onClick={handleDrawerToggle}>
                Live<LiveForumIndicator></LiveForumIndicator>
              </Button>
            </LiveActionButtonGroup> */}
          </TopBarActionButtons>
          <Hidden smUp>
            <Drawer
              variant="temporary"
              anchor="bottom"
              open={open}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.mobileFilterDrawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <LoginComponent />
            </Drawer>
          </Hidden>
          <Hidden smUp>
            <Drawer
              variant="temporary"
              anchor="bottom"
              open={openRegister}
              onClose={handleRegistrationDrawerToggle}
              classes={{
                paper: classes.mobileFilterDrawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <RegisterComponent />
            </Drawer>
          </Hidden>
          <Hidden xsDown>
            <Dialog
              onClose={handleDrawerToggle}
              aria-labelledby="simple-dialog-title"
              open={open}
              className={classes.dialogWrapper}
            >
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <LoginComponent />
                </Grid>
                <Grid item xs={6}>
                  <LoginRightWrapper>
                    <ContentWrapper>
                      <div>
                        <img src={logo} alt="logo" />
                        <Typography variant="h4">WELCOME</Typography>
                        <Typography variant="subtitle1">
                          Neque porro quisquam est qui dolorem
                        </Typography>
                      </div>
                      <div>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="Lorem Ipsum is simply dummy text" />
                        </ListItem>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="Contrary to popular belief, Lorem" />
                        </ListItem>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="There are many variations of Lorem" />
                        </ListItem>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="Lorem Ipsum generators on Internet" />
                        </ListItem>
                      </div>
                    </ContentWrapper>
                  </LoginRightWrapper>
                </Grid>
              </Grid>
            </Dialog>
          </Hidden>
          <Hidden xsDown>
            <Dialog
              onClose={handleRegistrationDrawerToggle}
              aria-labelledby="simple-dialog-title"
              open={openRegister}
              className={`${classes.dialogWrapper} ${classes.dialogRegisterWrapper}`}
            >
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <RegisterComponent />
                </Grid>
                <Grid item xs={6}>
                  <LoginRightWrapper>
                    <ContentWrapper>
                      <div>
                        <img src={logo} alt="logo" />
                        <Typography variant="h4">WELCOME</Typography>
                        <Typography variant="subtitle1">
                          Neque porro quisquam est qui dolorem
                        </Typography>
                      </div>
                      <div>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="Lorem Ipsum is simply dummy text" />
                        </ListItem>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="Contrary to popular belief, Lorem" />
                        </ListItem>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="There are many variations of Lorem" />
                        </ListItem>
                        <ListItem className={classes.listItemsStyle}>
                          <ArrowRightOutlinedIcon />
                          <ListItemText primary="Lorem Ipsum generators on Internet" />
                        </ListItem>
                      </div>
                    </ContentWrapper>
                  </LoginRightWrapper>
                </Grid>
              </Grid>
            </Dialog>
          </Hidden>
        </TopBar>
        <HomePageContentWrapper>
          <Typography variant="h1">India's first online expo</Typography>
          <Typography variant="h5">
            Engage your customers online in you're Exhibition page
          </Typography>
          <CardsWrapper>
            <div>
              <AspectRatioIcon />
              Exhibitor
            </div>
            <div>
              <OndemandVideoIcon />
              Conferences / Webinars
            </div>
            <div>
              <GroupIcon />
              Visitor
            </div>
            <div>
              <SettingsVoiceIcon />
              Interact with exhibitors
            </div>
            <div>
              <WebIcon />
              Exhibition page
            </div>
          </CardsWrapper>
          <ActionButtonWrapper>
            <Button
              variant="contained"
              disableElevation
              onClick={handleRegistrationDrawerToggle}
            >
              Visitor Registration
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={handleRegistrationDrawerToggle}
            >
              Exhibitor Registration
            </Button>
          </ActionButtonWrapper>
        </HomePageContentWrapper>
      </HomePageWrapper>
    </div>
  );
}

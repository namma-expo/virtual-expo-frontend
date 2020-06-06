import React from 'react';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import { Button, Drawer, Typography } from '@material-ui/core';
import image1 from 'images/agenda1.jpg';
import image2 from 'images/agenda2.jpg';
import {
  useStyles,
  AgendaFloatingButton,
  AgendaWrapper,
  AgendaCard,
  ImageWrapper,
  Heading,
  ContentWrapper,
  AgendaTimings,
} from './style';

export default function AgendaButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleAgendaDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <AgendaFloatingButton>
      <Button color={props.color} onClick={handleAgendaDrawerToggle}>
        <EventNoteOutlinedIcon />
      </Button>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleAgendaDrawerToggle}
        classes={{
          paper: classes.agendaDrawerPaper,
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <AgendaWrapper>
          <Heading>AGENDA</Heading>
          <AgendaCard>
            <ImageWrapper>
              <img src={image1} alt="" />
            </ImageWrapper>
            <ContentWrapper>
              <Typography className={classes.cardHeading}>
                Panel Discussion
              </Typography>
              <Typography className={classes.cardContent} noWrap={false}>
                The Vitality of Design for Shopper Engagement in Service Retail
              </Typography>
            </ContentWrapper>
            <AgendaTimings>
              <span>09:00am</span>
              <span>10:00am</span>
            </AgendaTimings>
          </AgendaCard>
          <AgendaCard>
            <ImageWrapper>
              <img src={image2} alt="" />
            </ImageWrapper>
            <ContentWrapper>
              <Typography className={classes.cardHeading}>Debate</Typography>
              <Typography className={classes.cardContent} noWrap={false}>
                Human Vs. Digital : What’s more Important in a Rollout Project
              </Typography>
            </ContentWrapper>
            <AgendaTimings>
              <span>11:00am</span>
              <span>12:00am</span>
            </AgendaTimings>
          </AgendaCard>
          <AgendaCard>
            <ImageWrapper>
              <img src={image1} alt="" />
            </ImageWrapper>
            <ContentWrapper>
              <Typography className={classes.cardHeading}>
                Panel Discussion
              </Typography>
              <Typography className={classes.cardContent} noWrap={false}>
                The Vitality of Design for Shopper Engagement in Service Retail
              </Typography>
            </ContentWrapper>
            <AgendaTimings>
              <span>01:00pm</span>
              <span>02:00pm</span>
            </AgendaTimings>
          </AgendaCard>
          <AgendaCard>
            <ImageWrapper>
              <img src={image2} alt="" />
            </ImageWrapper>
            <ContentWrapper>
              <Typography className={classes.cardHeading}>
                Panel Discussion
              </Typography>
              <Typography className={classes.cardContent} noWrap={false}>
                3 Young Disruptors of Retailing Lifestyle
              </Typography>
            </ContentWrapper>
            <AgendaTimings>
              <span>03:00pm</span>
              <span>04:00pm</span>
            </AgendaTimings>
          </AgendaCard>
          <AgendaCard>
            <ImageWrapper>
              <img src={image1} alt="" />
            </ImageWrapper>
            <ContentWrapper>
              <Typography className={classes.cardHeading}>
                Panel Discussion
              </Typography>
              <Typography className={classes.cardContent} noWrap={false}>
                The Vitality of Design for Shopper Engagement in Service Retail
              </Typography>
            </ContentWrapper>
            <AgendaTimings>
              <span>09:00am</span>
              <span>10:00am</span>
            </AgendaTimings>
          </AgendaCard>
        </AgendaWrapper>
      </Drawer>
    </AgendaFloatingButton>
  );
}

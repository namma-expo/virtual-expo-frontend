import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import { muiTheme } from 'common/Style/mui-theme';
import {
  useCommonStyles,
  ExhibitorContentWrapper,
  HeroHeadingWrapper,
  StyledFormCard,
} from '../style';
import { useStyles, ThemeContentWrapper, TemplateFormWrapper } from './style';

export default function ExhibitorLayoutTheme(props) {
  const classesHero = useStyles();
  const classes = useCommonStyles();
  return (
    <ThemeProvider theme={muiTheme}>
      <ExhibitorContentWrapper>
        <HeroHeadingWrapper>{props.title}</HeroHeadingWrapper>
        <ThemeContentWrapper>
          <TemplateFormWrapper>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Website URL : (www.onlineexpo.com/)
              </Typography>
              <TextField
                variant="outlined"
                placeholder="nike"
                className={classes.textFieldStyle}
              />
            </StyledFormCard>

            <StyledFormCard>
              <Typography variant="body1" component="label">
                Logo
              </Typography>
              <TextField type="file" variant="outlined" />
            </StyledFormCard>

            <StyledFormCard>
              <Typography variant="body1" component="label">
                Primary Color
              </Typography>
              <TextField
                type="color"
                value="#035996"
                variant="outlined"
                className={classesHero.colorFieldStyle}
              />
            </StyledFormCard>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Secondary Color
              </Typography>
              <TextField
                type="color"
                value="#035996"
                variant="outlined"
                className={classesHero.colorFieldStyle}
              />
            </StyledFormCard>

            <StyledFormCard>
              <Typography variant="body1" component="label">
                Button Color
              </Typography>
              <TextField
                type="color"
                value="#3a6a8c"
                variant="outlined"
                className={classesHero.colorFieldStyle}
              />
            </StyledFormCard>

            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.actionBtn}
            >
              Submit
            </Button>
          </TemplateFormWrapper>
        </ThemeContentWrapper>
      </ExhibitorContentWrapper>
    </ThemeProvider>
  );
}

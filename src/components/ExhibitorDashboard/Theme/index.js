import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import { muiTheme } from 'common/Style/mui-theme';
import { ExhibitorContentWrapper, HeroHeadingWrapper } from '../style';
import { useStyles, ThemeContentWrapper, StyledCard, StyledBox } from './style';

export default function ExhibitorLayoutTheme(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={muiTheme}>
      <ExhibitorContentWrapper>
        <HeroHeadingWrapper>{props.title}</HeroHeadingWrapper>
        <ThemeContentWrapper>
          <Paper className={classes.rootPaperStyle}>
            <StyledCard>
              <StyledBox>Website URL :</StyledBox>
              <StyledBox alignLeft>
                <TextField
                  variant="outlined"
                  defaultValue="www.onlineexpo.com/nike"
                />
              </StyledBox>
            </StyledCard>

            <StyledCard>
              <StyledBox>Logo :</StyledBox>
              <StyledBox alignLeft>
                <TextField type="file" variant="outlined" />
              </StyledBox>
            </StyledCard>
            <StyledCard>
              <StyledBox>Primary Color :</StyledBox>
              <StyledBox alignLeft>
                <TextField type="color" value="#035996" variant="outlined" />
              </StyledBox>
            </StyledCard>
            <StyledCard>
              <StyledBox>Button Color :</StyledBox>
              <StyledBox alignLeft>
                <TextField type="color" value="#3a6a8c" variant="outlined" />
              </StyledBox>
            </StyledCard>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.actionBtn}
            >
              Submit
            </Button>
          </Paper>
        </ThemeContentWrapper>
      </ExhibitorContentWrapper>
    </ThemeProvider>
  );
}

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { muiTheme } from 'common/Style/mui-theme';
import logo from 'images/logo.png';
import {
  useCommonStyles,
  ExhibitorContentWrapper,
  StyledFormCard,
} from '../style';
import {
  ProfileHeadingWrapper,
  ProfileContentWrapper,
  ProfileContentSection,
  GridWrapper,
} from './style';

export default function Profile() {
  const classes = useCommonStyles();

  return (
    <ThemeProvider theme={muiTheme}>
      <ExhibitorContentWrapper>
        <ProfileHeadingWrapper>
          <div>
            <img src={logo} alt="company name" /> Sensibull
          </div>
        </ProfileHeadingWrapper>
        <ProfileContentWrapper>
          <ProfileContentSection>
            <Box mb={2} mt={1} display="flex" justifyContent="center">
              <Typography variant="h6" component="label">
                Exhibitor Registration Form
              </Typography>
            </Box>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Company Name
              </Typography>
              <TextField
                variant="outlined"
                className={classes.textFieldStyle}
                placeholder="Enter company name..."
              />
            </StyledFormCard>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Company Address
              </Typography>
              <TextField
                variant="outlined"
                multiline
                rows="3"
                className={classes.textFieldStyle}
                placeholder="Enter company address..."
              />
            </StyledFormCard>
            <StyledFormCard>
              <Typography variant="body1" component="label">
                Company Website
              </Typography>
              <TextField
                variant="outlined"
                className={classes.textFieldStyle}
                placeholder="Enter company website..."
              />
            </StyledFormCard>
            <GridWrapper>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  City
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter city..."
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  State
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter state..."
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Country
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter country..."
                />
              </StyledFormCard>

              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Pine code
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter pine code..."
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Telephone number
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter telephone number..."
                  type="number"
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Email
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter email id..."
                />
              </StyledFormCard>
            </GridWrapper>

            <Box mb={2} mt={4}>
              <Typography variant="h6" component="label">
                Contact Person Information
              </Typography>
              <Divider />
            </Box>

            <GridWrapper>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  First Name
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter first name..."
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Second Name
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter second name..."
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Designation
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter designation..."
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Contact number
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter phone number..."
                  type="number"
                />
              </StyledFormCard>
              <StyledFormCard>
                <Typography variant="body1" component="label">
                  Email ID
                </Typography>
                <TextField
                  variant="outlined"
                  className={classes.textFieldStyle}
                  placeholder="Enter email id..."
                />
              </StyledFormCard>
            </GridWrapper>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.actionBtn}
            >
              Submit
            </Button>
          </ProfileContentSection>
        </ProfileContentWrapper>
      </ExhibitorContentWrapper>
    </ThemeProvider>
  );
}

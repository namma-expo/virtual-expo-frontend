import React from 'react';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  useStyles,
  DrawerWrapper,
  DrawerTitle,
  DrawerSubTitle,
  RegisterLink,
} from './style.js';

export default function Login() {
  const classes = useStyles();
  return (
    <DrawerWrapper>
      <DrawerTitle>Welcome Back</DrawerTitle>
      <DrawerSubTitle>Sign in to continue</DrawerSubTitle>

      <form className={classes.formWrapper} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-required"
            label="Email"
            placeholder="Hello@hello.com"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </form>
      <Button
        fullWidth
        variant="contained"
        className={classes.drawerActionBtn}
        disableElevation
      >
        Log in
      </Button>
      <Button fullWidth className={classes.forgotPassBtn}>
        Forgot password?
      </Button>
      <RegisterLink>
        Don't have an account <span></span>
        <Button className={classes.registerLinkBtn}>Register Now</Button>
      </RegisterLink>
    </DrawerWrapper>
  );
}

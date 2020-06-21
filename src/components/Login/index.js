import React, { useContext } from 'react';
import _ from 'lodash';
import { Button, TextField, InputAdornment } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AuthContext } from 'common/Authentication/index.js';
import { useForm } from 'react-hook-form';
import {
  useStyles,
  DrawerWrapper,
  DrawerTitle,
  DrawerSubTitle,
  RegisterLink,
} from './style.js';

export default function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { authContext, authUserSignIn } = useContext(AuthContext);
  return (
    <form
      className={classes.formWrapper}
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        authUserSignIn({ userName: data.userName, password: data.password });
      })}
    >
      <DrawerWrapper>
        <p>{_.get(authContext, ['error', 'errorCode'], '')}</p>
        <DrawerTitle>Welcome Back</DrawerTitle>
        <DrawerSubTitle>Sign in to continue</DrawerSubTitle>
        <div>
          <TextField
            required
            name="userName"
            id="standard-required"
            label="User Name"
            placeholder="Enter your user name"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
            inputRef={register({ required: true })}
          />
          <TextField
            required
            id="standard-password-input"
            name="password"
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
            inputRef={register({ required: true })}
          />
        </div>
        <Button
          type="submit"
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
    </form>
  );
}

import React, { useContext } from 'react';
import _ from 'lodash';
import {
  Button,
  TextField,
  InputAdornment,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from 'common/Authentication/index.js';
import { USER_ROLES } from 'common/Authentication/constants.js';
import {
  useStyles,
  DrawerWrapper,
  DrawerTitle,
  DrawerSubTitle,
  RegisterLink,
  TermsConditionLink,
} from './style.js';

export default function Register() {
  const classes = useStyles();
  const { authContext, authUserSignUp } = useContext(AuthContext);
  const { register, handleSubmit, control } = useForm();

  return (
    <form
      className={classes.formWrapper}
      autoComplete="off"
      onSubmit={handleSubmit(
        ({ userName, password, emailID, phoneNumber, role }) => {
          authUserSignUp({
            userName,
            password,
            emailID,
            phoneNumber,
            role,
          });
        },
      )}
    >
      <DrawerWrapper>
        <p>{_.get(authContext, ['error', 'errorCode'], '')}</p>
        <DrawerTitle>Create an account</DrawerTitle>
        <DrawerSubTitle>Sign up to continue</DrawerSubTitle>
        <Controller
          name="role"
          control={control}
          defaultValue={USER_ROLES.VISITOR}
          as={
            <RadioGroup
              row
              aria-label="position"
              className={classes.radioGroupStyle}
            >
              <FormControlLabel
                value={USER_ROLES.VISITOR}
                control={<Radio color="primary" />}
                label="Visitor"
                labelPlacement="end"
              />
              <FormControlLabel
                value={USER_ROLES.EXHIBITOR}
                control={<Radio color="primary" />}
                label="Exhibitor"
                labelPlacement="end"
              />
            </RadioGroup>
          }
        />

        <div>
          <TextField
            required
            id="standard-required"
            label="User Name"
            // placeholder="Madhukar"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
            name="userName"
            inputRef={register({ required: true })}
          />
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
            name="emailID"
            inputRef={register({ required: true })}
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
            name="password"
            inputRef={register({ required: true })}
          />
          <TextField
            required
            id="standard-mobile-input"
            label="Number"
            placeholder="9999999999"
            type="number"
            autoComplete="current-password"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
            name="phoneNumber"
            inputRef={register({ required: true })}
          />
        </div>
        <TermsConditionLink>
          <Checkbox
            checked={true}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            className={classes.termsConditionCheckbox}
          />
          I agree to our
          <Button className={classes.registerLinkBtn}>
            terms &amp; conditions
          </Button>
        </TermsConditionLink>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.drawerActionBtn}
          disableElevation
        >
          Register Now
        </Button>

        <RegisterLink>
          Already have an account <span></span>
          <Button className={classes.registerLinkBtn}>Login</Button>
        </RegisterLink>
      </DrawerWrapper>
    </form>
  );
}

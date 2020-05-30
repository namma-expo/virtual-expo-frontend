import React from 'react';
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
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <DrawerWrapper>
      <DrawerTitle>Create an account</DrawerTitle>
      <DrawerSubTitle>Sign up to continue</DrawerSubTitle>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="visitor"
        className={classes.radioGroupStyle}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="visitor"
          control={<Radio color="primary" />}
          label="Visitor"
          labelPlacement="end"
        />
        <FormControlLabel
          value="exhibitor"
          control={<Radio color="primary" />}
          label="Exhibitor"
          labelPlacement="end"
        />
      </RadioGroup>
      <form className={classes.formWrapper} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-required"
            label="User Name"
            placeholder="Madhukar"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
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
          />
        </div>
      </form>
      <TermsConditionLink>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          className={classes.termsConditionCheckbox}
        />
        I agree to our<span></span>
        <Button className={classes.registerLinkBtn}>
          terms &amp; conditions
        </Button>
      </TermsConditionLink>
      <Button
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
  );
}

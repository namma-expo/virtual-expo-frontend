import { createMuiTheme } from '@material-ui/core/styles';
import {
  primaryColor,
  primaryLightText,
  primaryDarkText,
} from './global-color';

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: primaryDarkText,
    },
  },
  typography: {
    button: {
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textTransform: 'capitalize',
      '& .MuiButton-contained': {
        color: primaryLightText,
      },
    },
  },
});

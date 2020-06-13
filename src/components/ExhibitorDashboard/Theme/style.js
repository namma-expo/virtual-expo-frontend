import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {
  snBreakpoint,
  breakPointMuiSm,
  breakPointMd,
} from 'common/Style/global-utilities';

export const ThemeContentWrapper = styled.div`
  width: 100%;
  padding: 30px 20px;

  @media (min-width: ${snBreakpoint(breakPointMuiSm)}) {
    padding: 30px 50px;
  }
  @media (min-width: ${snBreakpoint(breakPointMd)}) {
    width: 70%;
  }
`;

export const TemplateFormWrapper = styled.div`
  margin: 0px;
  padding: 30px 20px 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const useStyles = makeStyles((theme) => ({
  colorFieldStyle: {
    maxWidth: '100px',
    '& div': {
      padding: '0px',
    },
    '& input, textarea': {
      padding: '14px',
      fontSize: '15px',
    },
  },
}));

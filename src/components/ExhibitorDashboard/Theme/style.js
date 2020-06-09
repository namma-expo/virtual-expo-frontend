import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
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

export const StyledCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 120px auto;
  grid-gap: 20px;
  align-items: center;
  padding: 15px 0px;
  margin-bottom: 10px;
`;

export const StyledBox = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props) =>
    props.alignLeft &&
    css`
      text-align: left;
      justify-content: flex-start;
    `};
  input {
    min-width: 50px;
    min-height: 25px;
    padding: 14px 14px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  rootPaperStyle: {
    padding: '20px 4px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '650px',
  },
  actionBtn: {
    width: '200px',
    padding: '12px 15px',
    margin: '10px 70px',
  },
}));

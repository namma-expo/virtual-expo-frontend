import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import {
  snBreakpoint,
  breakPointMuiSm,
  breakPointLg,
} from 'common/Style/global-utilities';

import {
  primaryColor,
  primaryLightText,
  primaryDarkColor,
  primarySuccessColor,
} from 'common/Style/global-color';

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
  @media (min-width: ${snBreakpoint(breakPointMuiSm)}) {
    padding: 30px;
  }
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    width: 70%;
  }
`;

export const RadioButtonGroupWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    border-radius: 15px;
    > label {
      position: relative;
      margin: 0px;
      opacity: 1;
      transition: 0.4s;
      &:hover {
        opacity: 0.9;
      }
      &:last-child {
        margin-right: 0px;
      }
      > span.Mui-checked + span {
        > div {
          background-color: ${primaryColor};
        }
      }
    }
  }
`;

export const RadioLabelWrapper = styled.div`
  width: 100%;
  padding: 0px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${primaryDarkColor};
  color: ${primaryLightText};
  box-shadow: 0px 2px 5px 0px rgba(163, 161, 163, 1);
  > span {
    display: flex;
    padding: 10px 0px;
    font-size: 16px;
    font-weight: bold;
  }
  @media (min-width: ${snBreakpoint(breakPointMuiSm)}) {
  }
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    min-height: 160px;
  }
`;

export const TemplateFormWrapper = styled.div`
  margin: 0px;
  padding: 30px 20px 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const useStyles = makeStyles((theme) => ({
  radioBtnRoot: {
    display: 'none',
    position: 'absolute',
    top: '0px',
    right: '0px',
    '&.Mui-checked': {
      display: 'block',
      '& svg': {
        width: '40px',
        height: '40px',
        color: primarySuccessColor,
      },
    },
  },
}));

import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { primaryLightText, primaryColor } from 'common/Style/global-color';
import { primaryDarkColor } from 'common/Style/global-color';
import dotsImage from 'images/dots.png';
import {
  snBreakpoint,
  breakPointMuiSm,
  breakPointLg,
} from 'common/Style/global-utilities';

export const ProfileHeadingWrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(41, 50, 60, 1) 30%,
      rgba(82, 94, 107, 1)
    ),
    url(${dotsImage});
  background-repeat: no-repeat, repeat;
  background-size: cover, auto;
  background-position: top left, top left;
  min-height: 200px;
  display: flex;
  align-items: flex-end;
  > div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    color: ${primaryLightText};
    margin-left: 50px;
    > img {
      width: 120px;
    }
  }
`;

export const ProfileContentWrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
  @media (min-width: ${snBreakpoint(breakPointMuiSm)}) {
    padding: 30px;
  }
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    width: 70%;
  }
`;

export const ProfileContentSection = styled.div`
  margin: 0px;
  padding: 30px 20px 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px 40px;
`;

export const useStyles = makeStyles((theme) => ({
  floatingAddContactBtn: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: primaryColor,
    color: primaryLightText,
    '&:hover': {
      backgroundColor: primaryDarkColor,
    },
  },
}));

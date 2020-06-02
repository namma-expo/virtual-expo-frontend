import styled, { keyframes, css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import dotsImage from 'images/dots.png';
import backgroundImage from 'images/homepage-bg-3.jpg';
import {
  snBreakpoint,
  breakPointSm,
  breakPointLg,
} from 'common/Style/global-utilities';
import { primaryText, primaryColor } from 'common/Style/global-color';

const slideFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const slideFromTop = keyframes`
  0% {
    transform: translateY(-300%);
  }
  100% {
    transform: translateY(0);
  }
`;
const slideFromBottom = keyframes`
  0% {
    transform: translateY(400%);
  }
  100% {
    transform: translateY(0);
  }
`;

const liveRippleEffect = keyframes`
  0% {transform:scale(1); }
  75% {transform:scale(1.75); opacity:1;}
  100% {transform:scale(2); opacity:0;}
`;

const FlexAlignJustifyCenter = css`
  display: flex;
  align: items: center;
  justify-content: center;
`;

export const IframeWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

export const Title = styled.h1`
  font-size: 45px;
  color: ${primaryText};
  text-align: center;
`;

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgba(41, 50, 60, 0.8) 30%,
      rgba(82, 94, 107, 0.85)
    ),
    url(${dotsImage});
  background-repeat: no-repeat, repeat;
  background-size: cover, auto;
  background-position: top left, top left;
  position: relative;
  font-family: Noto Sans JP, sans-serif;
  z-index: 1;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  @media (min-width: ${snBreakpoint(breakPointSm)}) {
    padding: 20px 40px;
  }
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    padding: 20px 100px;
  }
`;
export const LogoWrapper = styled.div`
  font-size: 20px;
  font-weight: normal;
  color: #fff;
  @media (min-width: ${snBreakpoint(breakPointSm)}) {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const TopBarActionButtons = styled.div`
  ${FlexAlignJustifyCenter};
`;

export const ActionButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  > button {
    color: #fff;
    padding: 3px 10px;
    &.MuiButton-contained {
      color: ${primaryColor};
      background-color: #fff;
    }
    &.MuiButton-outlined {
      border-color: #fff;
    }
    span {
      font-size: 12px;
      text-transform: capitalize;
    }
  }
  @media (min-width: ${snBreakpoint(breakPointSm)}) {
    grid-gap: 20px;
    > button {
      padding: 6px 16px;
      span {
        font-size: 14px;
      }
    }
  }
`;

export const LiveActionButtonGroup = styled(ActionButtonGroup)`
  margin-left: 20px;
`;

export const LiveForumIndicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: red;
  position: relative;
  top: 5px;
  left: 15px;
  transition: height 0.25s ease, width 0.25s ease;
  transform: translate(-50%, -50%);
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 50%;
    border: 1px solid red;
  }
  &:before {
    animation: ${liveRippleEffect} 2s linear infinite;
  }
  &:after {
    animation: ${liveRippleEffect} 2s linear 1s infinite;
  }
  &:before,
  &:after {
    &:hover {
      animation: none;
    }
  }
`;

export const HomePageContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: #fff;
  .MuiTypography-root {
    animation: 800ms ease-out 0s 1 ${slideFromTop};
  }
  > h1 {
    font-size: 1.5em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    margin: 25px 0px 8px;
  }
  > h5 {
    font-size: 0.8rem;
  }

  @media (min-width: ${snBreakpoint(breakPointSm)}) {
    > h1 {
      font-size: 4em;
      margin: 0px 0px 15px;
    }
    > h5 {
      font-size: 1.5rem;
    }
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  position: relative;
  button {
    margin-bottom: 25px;
    padding: 6px 16px;
    background-color: #fff;
    color: ${primaryColor};
    animation: 500ms ease-out 0s 1 ${slideFromBottom};
    > span {
      text-transform: capitalize;
    }
  }
  @media (min-width: ${snBreakpoint(breakPointSm)}) {
    flex-flow: row;
    margin-top: 70px;
    button {
      &:first-child {
        margin-right: 100px;
      }
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  background-color: unset;
  animation: 800ms ease-out 0s 1 ${slideFromLeft};
  flex-wrap: wrap;
  > div {
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 110px;
    text-align: center;
    margin: 0px 0px 20px 0px;
    & svg {
      margin-bottom: 15px;
      width: 35px;
      height: 35px;
    }
  }

  @media (min-width: ${snBreakpoint(breakPointSm)}) {
    margin-top: 50px;
    > div {
      font-size: 16px;
      min-width: 170px;
      margin: 0px 15px 40px 0px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    > div {
      min-width: 200px;
      margin: 0px 20px 0px 0px;
      padding: 18px 0px;
      border-radius: 4px;
      transition: transform 300ms;
      &:hover {
        transform: scale(1.1, 1.1);
        color: ${primaryColor};
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const LoginRightWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background: linear-gradient(
      to bottom,
      rgba(41, 50, 60, 0.8) 30%,
      rgba(82, 94, 107, 0.65)
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  padding: 0px 15px 30px;
  position: relative;
  > h4 {
    font-weight: 600;
  }
  > h3 {
    margin-bottom: 20px;
  }
  .MuiTypography-subtitle1 {
    font-size: 15px;
  }
  > div {
    text-align: center;
  }
`;

export const useStyles = makeStyles((theme) => ({
  mobileFilterDrawerPaper: {
    padding: '0px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    maxHeight: '530px',
    overflowY: 'auto',
  },
  dialogWrapper: {
    '& .MuiDialog-paper': {
      margin: '15px',
      width: '100%',
    },
  },
  dialogRegisterWrapper: {
    '& .MuiDialog-paperScrollPaper': {
      maxWidth: '650px !important',
      overflowY: 'hidden',
    },
  },
  listItemsStyle: {
    padding: '4px 0px',
    '& .MuiTypography-body1': {
      fontSize: '13px',
    },
  },
  dialogDemoVideoWrapper: {
    '& .MuiDialog-paper': {
      width: '900px',
      maxWidth: '100%',
      height: 'auto',
      overflow: 'hidden',
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiDialog-paper': {
        width: '650px',
        margin: '20px 10px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiDialog-paper': {
        width: '100%',
      },
    },
  },
}));

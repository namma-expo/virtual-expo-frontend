import styled, { css } from 'styled-components';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  scrollBar,
  breakPointLg,
  snBreakpoint,
} from 'common/Style/global-utilities';
import {
  primaryColor,
  secondaryBorderColor,
  secondarySectionBackground,
  secondaryDarkText,
  primaryDarkText,
  primaryLightText,
  primaryDangerColor,
} from 'common/Style/global-color';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 50;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 200px;
    background-color: ${primaryColor};
  }
`;

export const ChatContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;
export const ChatContentSection = styled.div`
  position: absolute;
  top: 25px;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 50px);
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  -o-box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  border: 1px solid #e3e3e3;
`;

export const ChatContentCard = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  height: 100%;
`;
const style1 = css`
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;
export const ChatLeftWrapper = styled.div`
  ${style1}
  background-color: #fff;
  border-right: 1px solid ${secondaryBorderColor};
  -webkit-box-shadow: 2px 0px 3px 0px rgba(189, 187, 189, 1);
  -moz-box-shadow: 2px 0px 3px 0px rgba(189, 187, 189, 1);
  box-shadow: 2px 0px 3px 0px rgba(189, 187, 189, 1);
`;
export const ChatRightWrapper = styled.div`
  ${style1}
  background-color:${secondarySectionBackground};
`;

export const SearchSection = styled.div`
  height: 70px;
  width: 100%;
  ${flexCenter};
  background-color: ${secondarySectionBackground};
  border-bottom: 1px solid ${secondaryBorderColor};
  position: sticky;
  top: 0px;
`;
export const SearchPaper = styled.div`
  padding: 2px 12px;
  border-radius: 20px;
  border: 1px solid ${secondaryBorderColor};
  background-color: #fff;
  width: 85%;
  margin: 0px auto;
  ${flexCenter};
  justify-content: space-between;
  > button {
    padding: 6px;
  }
`;

export const ChatItemsWrapper = styled.div`
  height: 100%;
  max-height: calc(100% - 70px);
  overflow: hidden;
  overflow-y: auto;
  ${scrollBar};
  display: flex;
  flex-direction: column;
`;

export const ChatItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  color: ${secondaryDarkText};
  flex-grow: 1;
  flex-basis: auto;
  min-width: 0;
  > h6 {
    font-weight: bold;
    color: ${primaryDarkText};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ChatMsgHeader = styled.div`
  padding: 14.5px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${secondaryBorderColor};
  position: sticky;
  top: 0px;
  > h6 {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ChatMsgsWrapper = styled(ChatItemsWrapper)`
  max-height: calc(100% - 140px);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.08);
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    padding: 20px 40px;
  }
`;

export const SendSectionCard = styled.div`
  height: 70px;
  width: 100%;
  ${flexCenter};
  background-color: ${secondarySectionBackground};
  border-top: 1px solid ${secondaryBorderColor};
  position: sticky;
  bottom: 0px;
`;

export const ChatMesCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 15px;
  > span {
    margin: 5px 0px 0px 12px;
    color: ${secondaryDarkText};
  }
  ${(props) =>
    props.userMsg &&
    css`
      justify-content: flex-end;
      align-items: flex-end;
    `};
`;

export const ChatMsgBox = styled.div`
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  max-width: 70%;
  background-color: ${primaryLightText};
  > p {
    color: ${primaryDarkText};
    font-size: 14px;
  }
  ${(props) =>
    props.userMsg &&
    css`
      background-color: #bae6ff;
    `};

  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    max-width: 60%;
  }
`;

export const styledBadgeStyle = {
  badge: {
    height: '24px',
    minWidth: '22px',
    borderRadius: '12px',
    right: '-3px',
    top: '13px',
    border: `2px solid ${primaryLightText}`,
    padding: '0 4px',
    backgroundColor: primaryDangerColor,
    color: primaryLightText,
    '&::after': {
      position: 'absolute',
      top: '0px',
      left: '-1px',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: `1px solid ${primaryDangerColor}`,
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.6)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.6)',
      opacity: 0,
    },
  },
};

export const useStyles = makeStyles((theme) => ({
  avatarStyle: {
    marginRight: '25px',
  },
  chatListBtn: {
    justifyContent: 'flex-start',
    padding: '12px 10px',
    borderBottom: `1px solid ${secondaryBorderColor}`,
  },
}));

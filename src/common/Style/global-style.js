import styled, { css } from 'styled-components';
import {
  snBreakpoint,
  breakPointMuiSm,
  breakPointMuiMd,
  breakPointLg,
  breakpointXlg,
} from 'common/Style/global-utilities';
import {
  primarySectionBackground,
  secondarySectionBackground,
} from './global-color';

export const FlexAlignJustifyCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0px;
  margin: 0px;
  background-color: ${primarySectionBackground};
  &:nth-child(even) {
    background-color: ${secondarySectionBackground};
  }
  ${(props) => css`
    background-color: ${props.bgColor};
  `};
  ${(props) => css`
    background-image: url(${props.bgImage}) no-repeat left top;
  `};
  background-size: cover;
`;

export const RowSection = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;
  margin: 0px auto;
  @media (min-width: ${snBreakpoint(breakPointMuiSm)}) {
    padding: 30px 4%;
  }
  @media (min-width: ${snBreakpoint(breakPointMuiMd)}) {
    padding: 40px 5%;
  }
  @media (min-width: ${snBreakpoint(breakPointLg)}) {
    max-width: 1170px;
    padding: 50px 7%;
  }
  @media (min-width: ${snBreakpoint(breakpointXlg)}) {
    max-width: 1400px;
    padding: 50px 9%;
  }
`;

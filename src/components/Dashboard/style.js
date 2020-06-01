import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const FlexAlignJustifyCenter = css`
  display: flex;
  align: items: center;
  justify-content: center;
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  ${FlexAlignJustifyCenter};
`;

export const useStyles = makeStyles((theme) => ({}));

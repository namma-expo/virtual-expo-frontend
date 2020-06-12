import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor, primaryLightText } from 'common/Style/global-color';

//Dashboard common component

export const ExhibitorContentWrapper = styled.div`
  padding: 0px;
  margin: 0px auto;
`;

export const HeroHeadingWrapper = styled.div`
  padding: 50px 50px;
  color: ${primaryLightText};
  font-size: 35px;
  background-color: ${primaryColor};
`;

export const FormHelpText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CarouselContentWrapper = styled.div`
  :not(:first-child) {
    margin-top: 40px;
  }
`;

export const CarouselHeading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 8px 0px;
  position: relative;
  > button {
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 7px 11px;
    font-size: 14px;
    min-width: 170px;
  }
`;

export const StyledFormCard = styled.div`
  width: 100%;
  margin: 0px 0px 25px;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
    font-size: 15px;
  }
`;

export const useCommonStyles = makeStyles((theme) => ({
  textFieldStyle: {
    '& div': {
      padding: '0px',
    },
    '& input, textarea': {
      padding: '14px',
      fontSize: '15px',
    },
  },
  textFileUploadStyle: {
    '& input, textarea': {
      padding: '14px 14px 18px',
      fontSize: '15px',
    },
  },
  actionBtn: {
    minWidth: '200px',
    padding: '12px 15px',
    margin: '0px 0px 10px',
    fontSize: '16px',
    textTransform: 'uppercase',
  },
  addMoreCarousel: {
    minWidth: '200px',
    padding: '12px 15px',
    margin: '0px auto 20px',
    fontSize: '16px',
    display: 'flex',
  },
}));

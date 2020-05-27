import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from '../../common/Style/global-color';

export const DrawerWrapper = styled.div`
  padding: 30px 20px;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 12px;
  }
  ::-webkit-scrollbar:horizontal {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b5b5b5;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f1f1f1;
  }
`;

export const DrawerTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const DrawerSubTitle = styled.div`
  font-size: 12px;
  color: #262626;
`;

export const RegisterLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TermsConditionLink = styled(RegisterLink)`
  margin: 0px 0px 10px;
  justify-content: flex-start;
`;

export const useStyles = makeStyles((theme) => ({
  formWrapper: {
    margin: '35px 0px 0px',
    '& .MuiFormControl-root': {
      marginBottom: '20px',
      '& svg': {
        width: '18px',
        height: '18px',
      },
      '& input': {
        fontSize: '14px',
      },
    },
  },
  radioGroupStyle: {
    '& .MuiRadio-colorPrimary.Mui-checked': {
      color: primaryColor,
    },
  },
  drawerActionBtn: {
    borderRadius: '10px',
    padding: '10px 15px',
    textTransform: 'capitalize',
    backgroundColor: '#1c4eaf',
    color: '#fff',
    marginTop: '15px',
    '&:hover': {
      backgroundColor: '#1c4eaf',
    },
  },
  forgotPassBtn: {
    textTransform: 'capitalize',
    color: '#262626',
    marginTop: '10px',
  },
  registerLinkBtn: {
    textTransform: 'capitalize',
    color: '#1c4eaf',
  },
  termsConditionCheckbox: {
    padding: '5px 5px 5px 0px',
    color: '#1c4eaf',
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#1c4eaf',
    },
  },
}));

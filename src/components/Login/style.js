import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const DrawerWrapper = styled.div`
  padding: 40px 20px;
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
}));

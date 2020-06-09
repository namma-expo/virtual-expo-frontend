import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { primaryLightText, primaryColor } from 'common/Style/global-color';
import { primaryDarkColor } from 'common/Style/global-color';

export const ExhibitorContactWrapper = styled.div`
  padding: 0px;
  margin: 0px auto;
`;

export const HeroHeadingWrapper = styled.div`
  padding: 50px 50px;
  color: ${primaryLightText};
  font-size: 35px;
  background-color: ${primaryColor};
`;

export const DialogContent = styled.div`
  padding: 25px 15px;
  > form {
    display: flex;
    flex-direction: column;
    > div {
      margin-bottom: 20px;
      label {
        font-size: 14px;
        top: -4px;
      }
      input {
        padding: 14px;
        height: auto;
        font-size: 14px;
      }
    }
  }
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
  tableContainerStyle: {
    width: '70%',
    padding: '30px 50px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '30px 20px',
    },
  },
  table: {
    minWidth: '650px',
    boxShadow:
      '0px 1px 1px -1px rgba(0,0,0,0.2), 0px -1px 4px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    '& thead': {
      '& th': {
        fontWeight: 'bold',
        borderRight: `1px solid rgba(224, 224, 224, 0.5)`,
        borderBottom: `1px solid $rgba(224, 224, 224, 0.5)`,
        '&:last-child': {
          borderRight: '0px',
        },
      },
    },
    '& tbody': {
      '& td': {
        borderRight: `1px solid rgba(224, 224, 224, 0.5)`,
        borderBottom: `1px solid $rgba(224, 224, 224, 0.5)`,
        '&:last-child': {
          borderRight: '0px',
        },
        '& button': {
          padding: '5px',
          marginRight: '5%',
        },
      },
    },
  },
  addContactDialog: {
    '& .MuiDialog-paper': {
      minWidth: '350px',
      borderRadius: '6px',
      '& .MuiDialogTitle-root': {
        padding: '15px 20px',
        backgroundColor: primaryColor,
        color: primaryLightText,
      },
    },
  },
  addContactBtn: {
    padding: '15px',
    fontWeight: 'bold',
  },
}));

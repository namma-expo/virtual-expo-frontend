import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from 'common/Style/global-color';
import { scrollBar } from 'common/Style/global-utilities';

export const AgendaFloatingButton = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.7);
  z-index: 999;
  border-radius: 50%;
  > button {
    min-width: 30px;
    padding: 6px;
    color: #000;
    svg {
      transition: transform 300ms;
    }
    &:hover {
      color: ${primaryColor};
      svg {
        transform: scale(1.1, 1.1);
      }
    }
  }
  ${(props) => css`
    background: rgba(0, 0, 0, ${props.opacity});
  `}
`;

export const AgendaWrapper = styled.div`
  padding: 0px 15px 10px;
  overflow: auto;
  ${scrollBar};
`;

export const AgendaCard = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 12px;
  padding: 0px 0px 8px;
  margin-bottom: 15px;
  background-color: #f3f3fa;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  margin-bottom: 8px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
`;
export const Heading = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  color: ${primaryColor};
  font-weight: bold;
  text-align: center;
  padding: 20px 0px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;
export const AgendaTimings = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  padding: 5px 10px;
  > span {
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.08);
    margin-right: 10px;
    border-radius: 3px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  agendaDrawerPaper: {
    padding: '0px',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
    width: '350px',
    maxHeight: '100%',
    overflowY: 'auto',
  },
  cardHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  cardContent: {
    fontSize: '12px',
    lineHeight: '15px',
    width: '298px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

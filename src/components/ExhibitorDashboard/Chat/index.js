import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { muiTheme } from 'common/Style/mui-theme';
import { withStyles } from '@material-ui/core/styles';
import {
  InputBase,
  IconButton,
  Button,
  Avatar,
  Badge,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import {
  useStyles,
  styledBadgeStyle,
  ChatContainer,
  ChatContentWrapper,
  ChatContentSection,
  ChatContentCard,
  ChatLeftWrapper,
  SearchSection,
  SearchPaper,
  ChatRightWrapper,
  ChatItemsWrapper,
  ChatItemText,
  ChatMsgHeader,
  ChatMsgsWrapper,
  SendSectionCard,
  ChatMesCard,
  ChatMsgBox,
} from './style';

const StyledBadge = withStyles(styledBadgeStyle)(Badge);

export default function ExhibitorChatPage(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={muiTheme}>
      <ChatContainer>
        <ChatContentWrapper>
          <ChatContentSection>
            <ChatContentCard>
              <ChatLeftWrapper>
                <SearchSection>
                  <SearchPaper>
                    <InputBase
                      placeholder="Search Contact"
                      inputProps={{ 'aria-label': 'search contact' }}
                    />
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </SearchPaper>
                </SearchSection>
                <ChatItemsWrapper>
                  <Button className={classes.chatListBtn}>
                    <StyledBadge
                      badgeContent={4}
                      className={classes.avatarStyle}
                    >
                      <Avatar>M</Avatar>
                    </StyledBadge>
                    <ChatItemText>
                      <Typography component="h6" variant="body1">
                        Madhukar
                      </Typography>
                      <Typography variant="body1">
                        distracted by the readable content of a page when
                        looking at its layout. The point
                      </Typography>
                    </ChatItemText>
                  </Button>
                  <Button className={classes.chatListBtn}>
                    <StyledBadge
                      badgeContent={8}
                      className={classes.avatarStyle}
                    >
                      <Avatar>N</Avatar>
                    </StyledBadge>
                    <ChatItemText>
                      <Typography component="h6" variant="body1">
                        Nagraj
                      </Typography>
                      <Typography variant="body1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been
                      </Typography>
                    </ChatItemText>
                  </Button>
                  <Button className={classes.chatListBtn}>
                    <StyledBadge
                      badgeContent={2}
                      className={classes.avatarStyle}
                    >
                      <Avatar>M</Avatar>
                    </StyledBadge>
                    <ChatItemText>
                      <Typography component="h6" variant="body1">
                        Manoj
                      </Typography>
                      <Typography variant="body1">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical
                      </Typography>
                    </ChatItemText>
                  </Button>
                </ChatItemsWrapper>
              </ChatLeftWrapper>
              <ChatRightWrapper>
                <ChatMsgHeader>
                  <Avatar>M</Avatar>
                  <Typography component="h6" variant="body1">
                    Madhukar
                  </Typography>
                </ChatMsgHeader>
                <ChatMsgsWrapper>
                  <ChatMesCard>
                    <ChatMsgBox>
                      <Typography variant="body1">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical
                      </Typography>
                    </ChatMsgBox>
                    <Typography component="span" variant="body2">
                      4/22/20, 6:30 PM
                    </Typography>
                  </ChatMesCard>
                  <ChatMesCard userMsg>
                    <ChatMsgBox userMsg>
                      <Typography variant="body1">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical
                      </Typography>
                    </ChatMsgBox>
                    <Typography component="span" variant="body2">
                      4/22/20, 6:35 PM
                    </Typography>
                  </ChatMesCard>
                </ChatMsgsWrapper>
                <SendSectionCard>
                  <SearchPaper>
                    <InputBase
                      placeholder="Type your message"
                      inputProps={{ 'aria-label': 'Type your message' }}
                    />
                    <IconButton type="submit" aria-label="Send">
                      <SendIcon />
                    </IconButton>
                  </SearchPaper>
                </SendSectionCard>
              </ChatRightWrapper>
            </ChatContentCard>
          </ChatContentSection>
        </ChatContentWrapper>
      </ChatContainer>
    </ThemeProvider>
  );
}

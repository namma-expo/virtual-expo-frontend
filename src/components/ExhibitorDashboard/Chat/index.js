import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { muiTheme } from 'common/Style/mui-theme';
import { withStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
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
import { useChatFeed, useChatRecents, sendMessage } from 'common/Chat/utils';
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

const ChatMessageCard = ({ userMessage = false, userText }) => {
  return (
    <ChatMesCard userMsg={userMessage}>
      <ChatMsgBox userMsg={userMessage}>
        <Typography variant="body1">{userText}</Typography>
      </ChatMsgBox>
      <Typography component="span" variant="body2">
        4/22/20, 6:30 PM
      </Typography>
    </ChatMesCard>
  );
};

const ChatRecentButton = ({ userName, userText }) => {
  const classes = useStyles();
  return (
    <Button className={classes.chatListBtn}>
      <StyledBadge badgeContent={''} className={classes.avatarStyle}>
        <Avatar>M</Avatar>
      </StyledBadge>
      <ChatItemText>
        <Typography component="h6" variant="body1">
          {userName}
        </Typography>
        <Typography variant="body1">{userText}</Typography>
      </ChatItemText>
    </Button>
  );
};

export default function ExhibitorChatPage(props) {
  const { register, handleSubmit, reset } = useForm();
  // const exhibitorID = 'ex231';
  // const visitorID = 'vis9999';

  const exhibitorID = 'ex231';
  const visitorID = 'vis9999';

  const chatFeed = useChatFeed({
    userID: exhibitorID,
    recepientID: visitorID,
  });

  const chatRecents = useChatRecents(exhibitorID);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendMessage({
          message: data.userText,
          userID: exhibitorID,
          recepientID: visitorID,
        });
        reset();
      })}
    >
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
                    {chatRecents.map(({ message, recepientID }) => (
                      <ChatRecentButton
                        userName={recepientID}
                        userText={message}
                      />
                    ))}
                  </ChatItemsWrapper>
                </ChatLeftWrapper>
                <ChatRightWrapper>
                  <ChatMsgHeader>
                    <Avatar>M</Avatar>
                    <Typography component="h6" variant="body1">
                      {visitorID}
                    </Typography>
                  </ChatMsgHeader>

                  <ChatMsgsWrapper>
                    {chatFeed.map(({ message, recepientID, userID }) => (
                      <ChatMessageCard
                        userMessage={userID === exhibitorID}
                        userText={message}
                      />
                    ))}
                  </ChatMsgsWrapper>
                  <SendSectionCard>
                    <SearchPaper>
                      <InputBase
                        name="userText"
                        placeholder="Type your message"
                        inputProps={{ 'aria-label': 'Type your message' }}
                        inputRef={register}
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
    </form>
  );
}

import { useState, useEffect } from 'react';
import { db } from 'common/Chat';

export function sendMessage({ userID, recepientID, message }) {
  if (!db) {
    return;
  }
  const newMessage = {
    message: message,
    userID,
    recepientID,
  };
  const newMessageUID = db.ref('messages').push().key;
  const updates = {
    // updates for sender
    ['/channels/' +
    userID +
    '/' +
    recepientID +
    '/' +
    newMessageUID]: newMessage,
    ['/recents/' + userID + '/' + recepientID]: newMessage,

    // updates for recepient
    ['/channels/' +
    recepientID +
    '/' +
    userID +
    '/' +
    newMessageUID]: newMessage,
    ['/recents/' + recepientID + '/' + userID]: newMessage,
  };
  return db.ref().update(updates);
}

export function useChatFeed({ userID, recepientID }) {
  const [chatFeed, setChatFeed] = useState([]);
  useEffect(() => {
    if (!db) {
      return [];
    }
    db.ref('/channels/' + userID + '/' + recepientID).on(
      'value',
      (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        setChatFeed(chats);
      },
    );
  }, [recepientID, userID]);
  return chatFeed;
}

export function useChatRecents(userID) {
  const [chatRecents, setChatRecents] = useState([]);
  useEffect(() => {
    if (!db) {
      return [];
    }
    db.ref('/recents/' + userID).on('value', (snapshot) => {
      let chats = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      setChatRecents(chats);
    });
  }, [userID]);
  return chatRecents;
}

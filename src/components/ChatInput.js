import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Dimitrios Chatziioannou',
      userImage:
        'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/141145332_444930560201040_3766941303742958626_n.jpg?tp=1&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=100&_nc_ohc=HmAw4qY9o4UAX8KqVGs&ccb=7-4&oh=936b9b368aaabcb8222b4cdc9c4c8916&oe=607F25AA&_nc_sid=4f375e',
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 1.875rem;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 1.25rem;
      outline: none;
    }

    > button {
      display: none !important;
    }
  }
`;

export default ChatInput;

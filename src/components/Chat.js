import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

const Chat = () => {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomDetails?.data().name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessages>
        {roomMessages?.docs.map((doc) => {
          const { message, timestamp, user, userImage } = doc.data();

          return (
            <Message
              key={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
              message={message}
            />
          );
        })}
        <ChatBottom ref={chatRef} />
      </ChatMessages>

      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
    </ChatContainer>
  );
};

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 3.75rem;
`;

const Header = styled.div`
  display: felx;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;

    > .MuiSvgIcon-root {
      margin-left: 0.5rem;
      margin-top: 4px;
      font-size: 18px;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  > p {
    display: flex;

    align-items: center;
    font-size: 0.875rem;

    > .MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
      margin-top: 2px;
    }
  }
`;

export default Chat;

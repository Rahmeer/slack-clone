import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import ChatInput from './ChatInput';
import { db } from '../firebase';
import Message from './Message';

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('room').doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('room')
        .doc(roomId)
        .collection('message')
        .orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView();
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {/* {roomId && roomDetails && ( */}
      <>
        <Header>
          <Header_left>
            <h4>
              <strong>{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </Header_left>

          <Header_Right>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </Header_Right>
        </Header>
        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();
            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>

        <ChatInput
          chatRef={chatRef}
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </>
      {/* )} */}
    </ChatContainer>
  );
}

export default Chat;

const ChatMessages = styled.div`
  height: 81vh;
  overflow: auto;
`;

const ChatBottom = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const Header_left = styled.div`
  display: flex;
  align-items: center;
  h4 {
    display: flex;
    text-transform: lowercase;
  }
  .MuiSvgIcon-root {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Header_Right = styled.div`
  p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .MuiSvgIcon-root {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;

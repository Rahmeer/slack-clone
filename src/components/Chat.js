import React from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';

function Chat() {
  const roomId = useSelector(selectRoomId);

  return (
    <ChatContainer>
      <>
        <Header>
          <Header_left>
            <h4>
              <strong>#RoomName</strong>
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
        <ChatMessages></ChatMessages>

        <ChatInput channelId={roomId} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatMessages = styled.div``;

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

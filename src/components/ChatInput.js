import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
// import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection('rooms').doc(channelId).collection('message').add({
      message: input,
      //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'mojo jojo',
      userImage: 'https://joeschmoe.io/api/v1/jess',
    });
    setInput('');
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`message #ROOM `}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  input {
    position: fixed;
    bottom: 0px;
    width: 80%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  Button {
    display: none;
  }
`;

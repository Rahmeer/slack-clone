import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider);
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
        <h1>
          welcome to the <br />
          slack
        </h1>
        <Button onClick={signIn}>signIn</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  background-color: lightpink;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.5);

  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  Button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.5);
    width: 100%;
  }
`;

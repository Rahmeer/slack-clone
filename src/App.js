import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLogin2>
        <img src="https://joeschmoe.io/api/v1/random" alt="Sign In" />
      </AppLogin2>
    );
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLogin2 = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    /* height: 200px; */
    height: 100%;
  }
`;
const AppBody = styled.div`
  display: flex;
  height: 94vh;
`;

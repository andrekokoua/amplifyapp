import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
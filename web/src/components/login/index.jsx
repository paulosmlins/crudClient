import React from 'react';
import "./login.css";

function login() {
  return (
    <div className="App">
        <div className="login">
          <div className="titleLogin">
            <h1>Let’s start!</h1>
            <p>Sign in to continue</p>
          </div>
          <form className="cardform">
            <input placeholder="Username" type="text"></input>
            <input placeholder="Password" type="password"></input>
            <button>Sign In</button>
          </form>
        </div>
      </div>
  );
}

export default login;

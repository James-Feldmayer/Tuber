import React, { useState } from 'react';

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });

  return response.text();
}

function Login() {
  const [user, setUser] = useState({username : "", password : ""}) //input
  const [signal, setSignal] = useState("Loading..."); //output

  function handleClick() {
    postData('https://localhost:5001/api/Login', { Username: user.username, Password: user.password })
      .then((response) => { setSignal(response); });
  }

  return (
    <React.Fragment>
      <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={e => setUser({username : e.target.value, password : user.password})}
          />

          <br />
          <br />

          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={e => setUser({username : user.username, password : e.target.value})}
          />
      </form>

      <br />

      <label>{user.username + " " + user.password}</label>

      <br />
      <br />

      <button onClick={handleClick}>Login</button>
      <h1>{signal}</h1>
    </React.Fragment>
  );
}

export default Login;


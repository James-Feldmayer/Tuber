import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

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
      <div style={{padding:"20px"}}>
        <Grid container spacing={3} justify="space-between" direction="row">
          <Grid item>
            <h1>TUBER</h1>
          </Grid>
          <Grid item>
            <Button style={{color:"#E0474C", fontWeight: "bold"}}>Search Tours</Button>
          </Grid>
        </Grid>        
      </div>
      <div style={{textAlign:"center", backgroundColor:"#E0474C"}}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <h1 style={{color:"White"}}>Login</h1>
          </Grid>
          <Grid item>
            <TextField 
              variant="outlined" 
              size="small" 
              label="Enter Username"
              color="primary"
              style={{backgroundColor: "#ffffff"}}
              onChange={e => setUser({username : e.target.value, password : user.password})}
            />
          </Grid>
          <Grid item>
              <TextField 
                variant="outlined" 
                label="Enter Password" 
                size="small" 
                style={{backgroundColor: "#ffffff"}}
                onChange={e => setUser({username : user.username, password : e.target.value})} 
              />
          </Grid>
          <Grid item>
            <Button variant='outlined' onClick={handleClick} style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Login</Button>
          </Grid>
          <Grid item>
            <a href="" title="Sign up for Tuber" style={{color:"White"}}>Not registered? Sign up for Tuber</a>
          </Grid>
        </Grid>

        <br />

        <label>{user.username + " " + user.password}</label>

        <br />
        <br />

        <h1>{signal}</h1>
      </div>
    </React.Fragment>
  );
}

export default Login;


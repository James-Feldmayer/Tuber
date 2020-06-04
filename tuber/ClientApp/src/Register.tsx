import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

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

function Register() {
  const [user, setUser] = useState({fullname: "", email: "", password : ""}) //input
  const [signal, setSignal] = useState("Loading..."); //output

  function handleClick() {
    postData('https://localhost:5001/api/Login', { Fullname: user.fullname, Email: user.email, Password: user.password })
      .then((response) => { setSignal(response); });

    window.location.href = "/Tourist"
  }

  return (
    <React.Fragment>
      <div style={{padding:"20px"}}>
        <Grid container spacing={3} justify="space-between" direction="row">
          <Grid item>
            <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
          </Grid>
          <Grid item>
            <Button component={RouterLink} to="/Search" style={{color:"#E0474C", fontWeight: "bold"}}>Search Tours</Button>
          </Grid>
        </Grid>        
      </div>
      <div style={{textAlign:"center", backgroundColor:"#E0474C"}}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <h1 style={{color:"White"}}>Register</h1>
          </Grid>
          <Grid item>
            <TextField 
              variant="outlined" 
              size="small" 
              label="Enter full name"
              color="primary"
              style={{backgroundColor: "#ffffff"}}
              onChange={e => setUser({fullname : e.target.value, email: user.email, password : user.password})}
            />
          </Grid>
          <Grid item>
            <TextField 
              variant="outlined" 
              size="small" 
              label="Enter email address"
              color="primary"
              style={{backgroundColor: "#ffffff"}}
              onChange={e => setUser({fullname : user.fullname, email : e.target.value, password : user.password})}
            />
          </Grid>
          <Grid item>
              <TextField
                type="password" 
                variant="outlined" 
                label="Enter password" 
                size="small" 
                style={{backgroundColor: "#ffffff"}}
                onChange={e => setUser({fullname : user.fullname, email: user.email, password : e.target.value})} 
              />
          </Grid>
          <Grid item>
              <TextField 
                type="password"
                variant="outlined" 
                label="Confirm password" 
                size="small" 
                style={{backgroundColor: "#ffffff"}}
                onChange={e => setUser({fullname : user.fullname, email: user.email, password : e.target.value})} 
              />
          </Grid>
          <Grid item>
            <Button variant='outlined' onClick={handleClick} style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Sign up</Button>
          </Grid>
          <Grid item>
            <a href="/Login" title="Sign up for Tuber" style={{color:"White"}}>Already registered? Login</a>
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

export default Register;
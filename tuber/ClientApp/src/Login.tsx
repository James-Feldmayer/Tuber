import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { Redirect } from 'react-router';

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

function Login(props: { changeUser: (arg0: {}) => void; }) {
  const [user, setUser] = useState({username : "", password : ""}) //input
  const [userObject, setUserObject] = useState({}); //output
  const [loggedIn, login] = useState(false);

  function handleClick() {
    postData('https://localhost:5001/api/Login', { UsersId: user.username, Password: user.password })
      .then((response) => {
        if (response) {setUserObject(JSON.parse(response));
          props.changeUser(JSON.parse(response));
          login(true);
        }
      });
  }

  return (
    <React.Fragment>
      {loggedIn ? <Redirect push to="/Tourist"/> : <></>}
      <div style={{padding:"20px"}}>        
        <Grid container spacing={3} justify="space-between" direction="row">
          <Grid item>
            <RouterLink to="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</RouterLink>
          </Grid>
          <Grid item>
            <Button component={RouterLink} to="/Search" style={{color:"#E0474C", fontWeight: "bold"}}>Search Tours</Button>
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
                type="password"
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
            <RouterLink to="/Register" title="Sign up for Tuber" style={{color:"White"}}>Not registered? Sign up for Tuber</RouterLink>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Login;
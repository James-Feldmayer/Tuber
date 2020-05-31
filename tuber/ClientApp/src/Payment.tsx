import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Grid } from '@material-ui/core';

class PaymentHeader extends Component {
  render() {
    var user = "Mitchell";
    return (
      <div style={{padding: "20px"}}>
        <Grid container spacing={5} justify="space-between" direction="row">
          <Grid item>
            <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
          </Grid>
          <Grid item>
            <h4 style={{color:"#E0474C", fontWeight: "bold"}}>Hello, {user}</h4>
          </Grid>
        </Grid>
        </div>
    );
  }
}

class PaymentForm extends Component {
  render() {
    return (
      <Grid container spacing={3} justify="space-between" direction="column">
          <Grid item>
            <TextField 
              variant="outlined" 
              size="small" 
              label="Cardholder name"
              color="primary"
              style={{backgroundColor: "#ffffff"}}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField 
              variant="outlined" 
              label="Card Number" 
              size="small" 
              style={{backgroundColor: "#ffffff"}}
            />
          </Grid>
          <Grid item>
            <TextField 
                variant="outlined" 
                size="small" 
                label="CVC"
                color="primary"
                style={{backgroundColor: "#ffffff"}}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TextField 
                variant="outlined" 
                size="small" 
                label="MM/YY"
                color="primary"
                style={{backgroundColor: "#ffffff"}}
              />
          </Grid>
          <Grid item>
            <Button component={RouterLink} to="/Tourist" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Confirm</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button component={RouterLink} to="/ViewTour" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Cancel</Button>
          </Grid>
      </Grid>
    );
  }
}

class Payment extends Component {
  render() {
    return (
      <React.Fragment>
        <PaymentHeader />
        <div style={{backgroundColor:"#E0474C", padding:"20px"}}>
          <Grid container spacing={5} direction="row">
            <Grid item>
              <h2 style={{padding:"10px", color: "#ffffff"}}>Payment Details</h2>
              <PaymentForm />
            </Grid>
            <Grid item>
              <h2 style={{padding:"10px", color: "#ffffff"}}>Billing Details</h2>
                <ul style={{padding:"10px", color: "#ffffff", listStyleType: "none"}}>
                  <li>Elephant Tour: $65 x 1</li>
                  <li>Monkey Tour: $145 x 1</li>
                </ul>
                <p style={{padding:"10px", color: "#ffffff", fontWeight: "bold"}}>Total: $210</p>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Payment;
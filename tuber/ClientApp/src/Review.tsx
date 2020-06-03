import React, { useState, Component } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Button, TextField, Grid, Table, TableCell, TableRow } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

function HoverRating() {
    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);
  
    return (
      <div>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
      </div>
    );
  }

class TouristHeader extends Component {
    render() {
        return (
            <div style={{padding:"20px"}}>
                <Grid container spacing={3} justify="space-between" direction="row">
                    <Grid item>
                        <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
                    </Grid>
                    <Grid item>
                        <TextField style = {{width: 300}} label="What do you want to explore?" variant="outlined" size="small"></TextField>
                        &nbsp;&nbsp;&nbsp;
                        <Button component={RouterLink} to="/Search" style={{backgroundColor: "#E0474C", color:"#FFFFFF", fontWeight: "bold"}}>Search</Button>
                    </Grid>
                    <Grid item>
                        <Button component={RouterLink} to="/CreateTour" style={{fontWeight: "bold"}}>Create Tour</Button>
                        <Button style={{color:"#E0474C", fontWeight: "bold"}}>Switch to Tour Guide</Button>
                    </Grid>
                </Grid>        
            </div>
        );
    }
}

function TouristSidebar(props: { username: string; rating: number; totalRecent: number; }) {
    return (
        <Grid item>
            <div>
                <Grid container direction = "column">
                    <Grid item style={{backgroundColor: "#7ACFD6", padding: "20px", width: 200, height: 150}}>
                        <h3 style={{color: "#FFFFFF"}}>Welcome, {props.username}</h3>
                        <b style={{color: "#FFFFFF"}}>{props.rating} *</b>
                    </Grid>
                    <Grid item>
                        <Button style={{backgroundColor: "#FFFFFF", width: 200, fontWeight: "bold"}}>Dashboard</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{backgroundColor: "#FFFFFF", width: 200, fontWeight: "bold"}}>Recent Messages ({props.totalRecent})</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{backgroundColor: "#FFFFFF", width: 200, fontWeight: "bold"}}>Reviews</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{backgroundColor: "#FFFFFF", width: 200, fontWeight: "bold"}}>Cancelled Tours</Button>
                    </Grid>
                    <Grid item>
                        <Button style={{backgroundColor: "#FFFFFF", width: 200, fontWeight: "bold"}}>All Disputes</Button>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

class Review extends Component {
    render() {
        let username="Mitchell";
        let totalRecent=10;
        let rating=4.5;
        return (
            <React.Fragment>
                <TouristHeader />
                <div style={{backgroundColor: "#F3F8F9"}}>
                    <Grid container direction="row">
                        <TouristSidebar username={username} rating={rating} totalRecent={totalRecent} />
                        <Grid item style={{padding: "30px"}}>
                            <h4>Monkey Tour</h4>
                            <p>Mr. Smith</p>
                            <p>24th January 2020</p>
                            <p>10:00am</p>
                            <HoverRating />
                            <p><TextField multiline rows={4} rowsMax={2} variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "500px"}} label="Write Review" /></p>
                            <p><Button style={{backgroundColor:"#E0474C", color: "#FFFFFF", fontWeight: "bold"}}>Post Review</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button style={{backgroundColor:"#E0474C", color: "#FFFFFF", fontWeight: "bold"}}>Cancel</Button></p>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Review;
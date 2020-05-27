import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, ButtonGroup, TextField, Grid } from '@material-ui/core';

class HomeHeader extends Component {
    render() {
        return (
            <div style={{padding: "20px"}}>
                <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
                    </Grid>
                    <Grid item>
                        <ButtonGroup>
                            <Button variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Create Tour</Button>
                            <Button variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Manage Tours</Button>
                            <Button component={RouterLink} to="/Login" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Login</Button>
                            <Button component={RouterLink} to="/Register" variant='outlined' style={{backgroundColor: "#ffffff", color: "#E0474C", fontWeight: "bold"}}>Sign Up</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Grid container direction = "column">
                    <Grid item style={{backgroundColor: "#C4C4C4", padding: "20px"}}>
                        <h2>Explore and learn about your world with us</h2>
                        <div style={{backgroundColor: "#7ACFD6", padding: "10px", display: "inline-block"}}>
                            <TextField variant="outlined" label="When?" size="small" style={{backgroundColor: "#ffffff"}}></TextField>
                            &nbsp;
                            <TextField variant="outlined" label="Where?" size="small" style={{backgroundColor: "#ffffff"}}></TextField>
                            &nbsp;
                            <TextField variant="outlined" label="How many people?" size="small" style={{backgroundColor: "#ffffff"}}></TextField>
                            &nbsp;
                            <Button component={RouterLink} to="/Search" variant="outlined" style={{backgroundColor: "#000000", color: "#FFFFFF", fontWeight: "bold"}}>Explore</Button>
                        </div>                    
                    </Grid>
                    <Grid item style={{backgroundColor: "#B11A21", padding: "20px", color:"#FFFFFF", fontWeight: "bold"}}>
                        <h2>Why explore with us?</h2>
                        <p>Tuber offers you a way to easily connect with others and embark on rich, fulfilling tours and experiences in the wider world, all with the press of a button!</p>    
                    </Grid>
                    <Grid item style={{padding: "20px"}}>
                        <h4>Gallery</h4>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;
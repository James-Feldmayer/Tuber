import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, ButtonGroup, TextField, Grid } from '@material-ui/core';

function HomeButton(props: {text: string, col: string, bkCol: string, link: string}) {
    return (
        <Button component={RouterLink} to={props.link} variant='outlined' style={{
            backgroundColor: props.bkCol, 
            color: props.col, 
            fontWeight: "bold"
        }}>{props.text}</Button>
    );
}

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
                            <HomeButton text={"Create Tour"} col={"#000000"} bkCol={"#FFFFFF"} link={"/CreateTour"} />
                            <HomeButton text={"Manage Tours"} col={"#000000"} bkCol={"#ffffff"} link={"/Tourist"} />
                            <HomeButton text={"Login"} col={"#000000"} bkCol={"FFFFFF"} link={"/Login"}/>
                            <HomeButton text={"Sign Up"} col={"#E0474C"} bkCol={"#FFFFFF"} link={"/Register"} />
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

class HomeSearch extends Component {
    render() {
        return (
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
        );
    }
}

class HomeContent extends Component {
    render() {
        return (
            <Grid item style={{backgroundColor: "#B11A21", padding: "20px", color:"#FFFFFF", fontWeight: "bold"}}>
                <h2>Why explore with us?</h2>
                <p>Tuber offers you a way to easily connect with others and embark on rich, fulfilling tours and experiences in the wider world, all with the press of a button!</p>    
            </Grid>
        );
    }
}

export {
    HomeHeader,
    HomeSearch,
    HomeContent
} 
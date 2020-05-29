import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, TextField, Grid } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class CreateTourHeader extends Component {
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
                        <Button component={RouterLink} to="/Tourist" style={{color:"#E0474C", fontWeight: "bold"}}>Access Dashboard</Button>
                    </Grid>
                </Grid>        
            </div>
        );
    }
}

class CreateTourPanel1 extends Component {
    // The panel that renders the tour location and tour price
    render() {
        return (
            <Grid item>
                <Grid container direction="column" justify="space-around" style={{padding: "20px", backgroundColor: "#E0474C", width:"300px", height: "300px"}}>
                    <Grid item>
                        <h4 style={{color: "White"}}>Step 1:</h4>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff"}} label="Enter Tour Location" />
                    </Grid>
                    <Grid item>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff"}} label="Enter Tour Price" />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

class CreateTourPanel2 extends Component {
    // The panel that renders the tour date, tour  time and tour images
    render() {
        return (
            <Grid item>
                <Grid container direction="column" justify="space-between" style={{padding: "20px", backgroundColor: "#7ACFD6", width:"300px", height: "300px"}}>
                    <Grid item>
                        <h4 style={{color: "White"}}>Step 2:</h4>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff"}} type="date" defaultValue="2020-01-01" label="Select Tour date" />
                    </Grid>
                    <Grid item>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff"}} type="time" defaultValue="12:00" label="Select Tour time" />
                    </Grid>
                    <Grid item>
                        <Button startIcon={<CloudUploadIcon />} style={{backgroundColor: "#ffffff"}}>Upload tour images</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

class CreateTourPanel3 extends Component {
    render() {
        return (
            <Grid item>
                <Grid container direction="column" justify="space-between" style={{padding: "20px", backgroundColor: "#E0474C", width:"300px", height: "300px"}}>
                    <Grid item>
                        <h4 style={{color: "White"}}>Step 3:</h4>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "260px"}} label="Enter Tour Name" />
                    </Grid>
                    <Grid item>
                        <TextField multiline rows={4} rowsMax={2} variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "260px"}} label="Enter Tour Details" />
                    </Grid>
                    <Grid item>
                        <Button style={{backgroundColor: "#000000", color: "#FFFFFF", fontWeight: "bold"}}>Post Tour</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

class CreateTour extends Component {
    render() {
        return(
            <React.Fragment>
                <CreateTourHeader />
                <div style={{backgroundColor: "darkgray", padding: "20px"}}>
                    <h2>CREATE TOUR</h2>
                    <Grid container direction="row" justify="space-around">
                        <CreateTourPanel1 />
                        <CreateTourPanel2 />
                        <CreateTourPanel3 />
                    </Grid>
                </div>
            </React.Fragment>
            
        );
    }
};

export default CreateTour;
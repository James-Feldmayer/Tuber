import React, { useState, Component } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Button, TextField, Grid, Table, TableCell, TableRow } from '@material-ui/core';

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

class Tourist extends Component {
    render() {
        let username="Mitchell";
        let totalRecent=10;
        let rating=4.5;
        return (
            <React.Fragment>
                <TouristHeader />
                <div>
                    <Grid container direction="row">
                        <Grid item>
                            <div>
                                <Grid container direction = "column">
                                    <Grid item style={{backgroundColor: "#7ACFD6", padding: "20px", width: 250, height: 150}}>
                                        <h3>Welcome, {username}</h3>
                                        <b>{rating} *</b>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{width: 250, fontWeight: "bold"}}>Dashboard</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{width: 250, fontWeight: "bold"}}>Recent Messages ({totalRecent})</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{width: 250, fontWeight: "bold"}}>Reviews</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{width: 250, fontWeight: "bold"}}>Cancelled Tours</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{width: 250, fontWeight: "bold"}}>All Disputes</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item style={{padding: "30px", backgroundColor: "lightgray"}}>
                            <div>
                                <h2>DASHBOARD</h2>
                                <Grid container direction="row" style={{}}>
                                    <Grid item>
                                        <div style={{padding: "20px", backgroundColor: "#E0474C", color: "white"}}>
                                            <h4>14</h4>
                                            <p>Completed tours</p>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div style={{padding: "20px", backgroundColor: "#7ACFD6", color: "white"}}>
                                            <h4>14</h4>
                                            <p>Upcoming tours</p>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div style={{padding: "20px", backgroundColor: "#E0474C", color: "white"}}>
                                            <h4>$45</h4>
                                            <p>Payment earned</p>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div style={{padding: "20px", backgroundColor: "#7ACFD6", color: "white"}}>
                                            <h4>20</h4>
                                            <p>Reviews</p>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div style={{padding: "20px", backgroundColor: "#E0474C", color: "white"}}>
                                            <h4>14</h4>
                                            <p>Cancelled tours</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div>
                                <h3>Upcoming Tours</h3>
                                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                                    <TableRow>
                                        <TableCell>Monkey Tour</TableCell>
                                        <TableCell>Gold Coast</TableCell>
                                        <TableCell>5:00am</TableCell>
                                        <TableCell>24th Jan</TableCell>
                                        <TableCell>10 people</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Mr. Gomez (Guide)</TableCell>
                                        <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monkey Tour</TableCell>
                                        <TableCell>Gold Coast</TableCell>
                                        <TableCell>5:00am</TableCell>
                                        <TableCell>24th Jan</TableCell>
                                        <TableCell>10 people</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Mr. Gomez (Guide)</TableCell>
                                        <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monkey Tour</TableCell>
                                        <TableCell>Gold Coast</TableCell>
                                        <TableCell>5:00am</TableCell>
                                        <TableCell>24th Jan</TableCell>
                                        <TableCell>10 people</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Mr. Gomez (Guide)</TableCell>
                                        <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                                    </TableRow>
                                </Table>
                            </div>
                            <div>
                                <h3>Completed Tours</h3>
                                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                                    <TableRow>
                                        <TableCell>Monkey Tour</TableCell>
                                        <TableCell>Gold Coast</TableCell>
                                        <TableCell>5:00am</TableCell>
                                        <TableCell>24th Jan</TableCell>
                                        <TableCell>10 people</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Mr. Gomez (Guide)</TableCell>
                                        <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monkey Tour</TableCell>
                                        <TableCell>Gold Coast</TableCell>
                                        <TableCell>5:00am</TableCell>
                                        <TableCell>24th Jan</TableCell>
                                        <TableCell>10 people</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Mr. Gomez (Guide)</TableCell>
                                        <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monkey Tour</TableCell>
                                        <TableCell>Gold Coast</TableCell>
                                        <TableCell>5:00am</TableCell>
                                        <TableCell>24th Jan</TableCell>
                                        <TableCell>10 people</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Mr. Gomez (Guide)</TableCell>
                                        <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                                    </TableRow>
                                </Table>
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={{padding: "20px", backgroundColor:"lightgray"}}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <h4>Upcoming Tour Schedule</h4>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
};

export default Tourist;
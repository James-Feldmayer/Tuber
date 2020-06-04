import React, { useState, Component } from 'react';
import { Link as RouterLink } from "react-router-dom";

import ItemBox from './Components/ItemBox'
import TableData from './Components/TableData'

import { Button, TextField, Grid, Table, TableCell, TableRow } from '@material-ui/core';

function TourTab(props) {
    var backCol = "#F3F8F9"
    var col = "#000000"
    if (props.isActive) {
        backCol = "#E0474C"
        col = "#FFFFFF"
    }

    return (
        <Grid style={{padding: "20px", color: col, backgroundColor: backCol}}>
            <div>
                <p>{props.date}, {props.time}</p>
                <b>{props.title}</b>
            </div>
        </Grid>
    );
}

function TouristSchedule() {
    return (
        <Grid item>
            <div style={{padding: "20px"}}>
                <Grid container direction="column">
                    <Grid item>
                        <h4>Upcoming Tour Schedule</h4>
                    </Grid>
                    <TourTab title={"Monkey Tour"} date={"Friday, 24th June"} time={"10:00am"} isActive={false}/>
                    <TourTab title={"Monkey Tour"} date={"Friday, 27th June"} time={"6:00am"} isActive={true}/>
                    <TourTab title={"Monkey Tour"} date={"Friday, 24th June"} time={"10:00am"} isActive={false}/>
                    <TourTab title={"Monkey Tour"} date={"Friday, 24th June"} time={"10:00am"} isActive={false}/>
                    <TourTab title={"Monkey Tour"} date={"Friday, 24th June"} time={"10:00am"} isActive={false}/>
                </Grid>
            </div>
        </Grid>        
    );
}

function TouristBody() {
    return (
        <Grid item style={{padding: "30px"}}>
            <div>
                <h2>DASHBOARD</h2>
                <Grid container direction="row" style={{}}>
                    <ItemBox type="Completed tours" amount={14} color="#E0474C" isPrice={false}/>
                    <ItemBox type="Booked tours" amount={14} color="#7ACFD6" isPrice={false}/>
                    <ItemBox type="Payments made" amount={45} color="#E0474C" isPrice={true} />
                    <ItemBox type="Reviews" amount={14} color="#7ACFD6" isPrice={false} />
                    <ItemBox type="Cancelled tours" amount={14} color="#E0474C" isPrice={false} />
                </Grid>
            </div>
            <div style={{padding: "10px", backgroundColor: "#EAEAEA"}}>
                <h3>Upcoming Tours</h3>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData category="Upcoming" title="Monkey Tour" location="Gold Coast" date="24th Jan" time="5:00am" totalAttendees="10" price="150" guideName="Mr. Gomez" />
                    <TableData category="Upcoming" title="Monkey Tour" location="Gold Coast" date="24th Jan" time="5:00am" totalAttendees="10" price="150" guideName="Mr. Gomez" />
                </Table>
                <Button style={{color: "#000000", fontWeight: "bold"}}>View All</Button>
            </div>
            <br />
            <div style={{padding: "10px", backgroundColor: "#EAEAEA"}}>
                <h3>Completed Tours</h3>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData category = "Completed" title="Monkey Tour" location="Gold Coast" date="24th Jan" time="5:00am" totalAttendees="10" price="150" guideName="Mr. Gomez" />
                    <TableData category = "Completed" title="Monkey Tour" location="Gold Coast" date="24th Jan" time="5:00am" totalAttendees="10" price="150" guideName="Mr. Gomez" />
                </Table>
                <Button style={{color: "#000000", fontWeight: "bold"}}>View All</Button>
            </div>
        </Grid>
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

function TouristSidebar(props) {
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

class Tourist extends Component {
    
    render() {
        let username=this.props.user ? this.props.user.firstName + " " + this.props.user.lastName : "Mitchel";
        let totalRecent=10;
        let rating=4.5;
        return (
            <React.Fragment>
                <TouristHeader />
                <div style={{backgroundColor: "#F3F8F9"}}>
                    <Grid container direction="row">
                        <TouristSidebar username={username} rating={rating} totalRecent={totalRecent} />
                        <TouristBody />
                        <TouristSchedule />
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
};

export default Tourist;
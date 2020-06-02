import React, { useState, Component } from 'react';
import { Link as RouterLink } from "react-router-dom";

import ItemBox from './Components/ItemBox'

import { Button, TextField, Grid, Table, TableCell, TableRow } from '@material-ui/core';

function TableData(props: { 
        name: string; 
        toursCompleted: number; 
        toursCancelled: number; 
        toursBooked: number; 
        totalPayments: number; 
        totalDisputes: number; 
    }) {
     return (
        <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.toursCompleted} Completed</TableCell>
            <TableCell>{props.toursCancelled} Cancelled</TableCell>
            <TableCell>{props.toursBooked} Booked</TableCell>
            <TableCell>${props.totalPayments} Payments</TableCell>
            <TableCell>{props.totalDisputes} disputes</TableCell>
            <TableCell><Button style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
        </TableRow>
     );
}

class AdminHeader extends Component {
    render() {
        return (
            <div style={{padding:"20px"}}>
                <Grid container spacing={3} justify="space-evenly" direction="row">
                    <Grid item>
                        <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
                    </Grid>
                    <Grid item>
                        <TextField style = {{width: 300}} label="What do you want to explore?" variant="outlined" size="small"></TextField>
                        &nbsp;&nbsp;&nbsp;
                        <Button style={{backgroundColor: "#E0474C", color:"#FFFFFF", fontWeight: "bold"}}>Search</Button>
                    </Grid>
                </Grid>        
            </div>
        );
    }
}

class AdminSidebar extends Component {
    render() {
        return (
            <Grid item>
                <div>
                    <Grid container direction = "column">
                        <Grid item style={{backgroundColor: "#7ACFD6", padding: "20px", width: 200, height: 150}}>
                            <h2 style={{color: "#FFFFFF"}}>Welcome Admin</h2>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>Latest Bookings</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>Completed Tours</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>Rescheduled Tours</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>Cancelled Tours</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>All Tourists</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>All Tour Guides</Button>
                        </Grid>
                        <Grid item>
                            <Button style={{width: 200, fontWeight: "bold"}}>All Disputes</Button>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        );
    }
}

class AdminBody extends Component {
    render() {
        return (
            <Grid item>
                <div style={{padding: "20px"}}>
                    <h3>Highlights</h3>
                    <Grid container direction="row" style={{}}>
                        <ItemBox type="Completed tours" amount={14} color="#E0474C" isPrice={false} />
                        <ItemBox type="Upcoming tours" amount={14} color="#7ACFD6" isPrice={false} />
                        <ItemBox type="Total Payments" amount={45} color="#E0474C" isPrice={true} />
                        <ItemBox type="Cancelled tours" amount={14} color="#7ACFD6" isPrice={false} />
                        <ItemBox type="Total Reviews" amount={670} color="#E0474C" isPrice={false} />
                        <ItemBox type="Pending Disputes" amount={14} color="#7ACFD6" isPrice={false} />
                    </Grid>
                    <div style={{padding: "10px", backgroundColor: "#EAEAEA"}}>
                        <h4>All Tourists (23)</h4>
                        <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                            <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                            <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                            <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                        </Table>
                        <br />
                        <Button style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>Generate Report</Button>
                    </div>
                </div>
            </Grid>
        );
    }
}

class AdminDisplay extends Component {
    render() {
        return (
            <Grid item>
                <div style={{backgroundColor: "#F3F8F9", padding: "20px"}}>
                    <h3>Mr Smith</h3>
                    <p>Completed Tours</p>
                    <p>Tours booked</p>
                    <p>Cancelled Tours</p>
                    <p>Ongoing disputes</p>
                    <p>Reviews Submitted</p>
                </div>
            </Grid>
        );
    }
}

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminHeader />
                <div style={{backgroundColor: "#F3F8F9"}}>
                    <Grid container direction="row">
                        <AdminSidebar />
                        <AdminBody />
                        <AdminDisplay />
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Admin;
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

function SideButton(props: {text: string}) {
    return (
        <Grid item>
            <Button onClick={() => {
                
            }} style={{backgroundColor: "#FFFFFF", width: 200, fontWeight: "bold"}}>{props.text}</Button>
        </Grid>
    );
}

function AdminSidebar(props: {category: string}) {
    return (
        <Grid item>
            <div>
                <Grid container direction = "column">
                    <Grid item style={{backgroundColor: "#7ACFD6", padding: "20px", width: 200, height: 150}}>
                        <h2 style={{color: "#FFFFFF"}}>Welcome Admin</h2>
                    </Grid>
                    <SideButton text={"Latest Bookings"} />
                    <SideButton text={"Completed Tours"} />
                    <SideButton text={"Rescheduled Tours"} />
                    <SideButton text={"All Tourists"} />
                    <SideButton text={"All Tour Guides"} />
                    <SideButton text={"All Disputes"} />
                </Grid>
            </div>
        </Grid>
    );
}

function GetTable(props: { category: string } ) {
    if (props.category === "latestBookings") {
        return (
            <div>
                <h4>Latest Bookings (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    } else if (props.category === "completedTours") {
        return (
            <div>
                <h4>Completed Tours (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    } else if (props.category === "rescheduledTours") {
        return (
            <div>
                <h4>Rescheduled Tours (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    } else if (props.category === "cancelledTours") {
        return (
            <div>
                <h4>Cancelled Tours (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    } else if (props.category === "allTourists") {
        return (
            <div>
                <h4>All Tourists (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    } else if (props.category === "allTourGuides") {
        return (
            <div>
                <h4>All Tour Guides (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    } else if (props.category === "allDisputes") {
        return (
            <div>
                <h4>All Disputes (23)</h4>
                <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                    <TableData name="Mr Smith" toursCompleted={10} toursCancelled={2} toursBooked={4} totalPayments={240} totalDisputes={0} />
                    <TableData name="Mr George" toursCompleted={5} toursCancelled={10} toursBooked={15} totalPayments={150} totalDisputes={2} />
                </Table>
            </div>
        );
    }
    return (
        <p>No data to be found!</p>
    )
}

function AdminBody(props: {category: string} ) {
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
                    <GetTable category={props.category}/>
                    <br />
                    <Button style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>Generate Report</Button>
                </div>
            </div>
        </Grid>
    );
}

class AdminDisplay extends Component {
    render() {
        return (
            <Grid item>
                <div style={{backgroundColor: "#F3F8F9", padding: "20px"}}>
                    <h3>Mr Smith</h3>
                    <p>Completed Tours: 10</p>
                    <p>Tours booked: 4</p>
                    <p>Cancelled Tours: 2</p>
                    <p>Ongoing disputes: 0</p>
                    <p>Reviews Submitted: 6</p>
                </div>
            </Grid>
        );
    }
}

interface AdminProps {

}

interface AdminState {
    category: string;
}

class Admin extends Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props);

        this.state = {
            category: "allTourists"
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    }
    setStateHandler() {
        this.setState({category: "allTourGuides"})
    }
    render() {
        return (
            <React.Fragment>
                <AdminHeader />
                <div style={{backgroundColor: "#F3F8F9"}}>
                    <Grid container direction="row">
                        <AdminSidebar category={this.state.category} />
                        <AdminBody category={this.state.category} />
                        <AdminDisplay />
                    </Grid>
                    <Button onClick={this.setStateHandler}>Hello</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default Admin;
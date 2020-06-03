import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button,  ButtonGroup, TextField, Grid, Table, TableCell, TableRow, TablePagination, TableFooter } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

class Header extends Component {
    render() {
        return (
            <div style={{padding: "20px"}}>
                <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
                    </Grid>
                    <Grid item>
                        <ButtonGroup>
                            <Button component={RouterLink} to="/CreateTour" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Create Tour</Button>
                            <Button component={RouterLink} to="/Tourist" style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Manage Tours</Button>
                            <Button component={RouterLink} to="/Login" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Login</Button>
                            <Button component={RouterLink} to="/Register" variant='outlined' style={{backgroundColor: "#ffffff", color: "#E0474C", fontWeight: "bold"}}>Sign Up</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

class ViewTourBody extends Component {
    render() {
        return (
            <Grid item>
                <Grid container direction="column" style={{padding: "20px", width:"900px"}}>
                    <Grid item style={{padding: "10px"}}>
                        <h3>Tour Name</h3>
                        <p>Tour Description</p>
                        <p>Features</p>
                        <Button style={{backgroundColor: "#7ACFD6", color: "#FFFFFF", fontWeight: "bold"}}>Message the tour guide</Button>
                    </Grid>
                    <br />
                    <Grid item style={{padding: "20px", backgroundColor: "#E0474C"}}>
                        <Grid container direction="row" justify="space-evenly" alignItems="center">
                            <Grid item>
                                <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "260px"}} label="Enter preferred date"></TextField>
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Grid item>
                                <Button style={{backgroundColor: "#000000", color: "#FFFFFF", fontWeight: "bold"}}>Check more tour schedules</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{padding: "10px"}}>
                        <Grid container direction ="row">
                            <Grid item>
                                <p style={{width: "25px", padding: "5px", backgroundColor: "blue", color: "#FFFFFF", fontWeight: "bold"}}>4.5</p>
                            </Grid>
                            <Grid item>
                                <p style={{fontWeight: "bold", padding: "5px"}}>Reviews (25)</p>
                            </Grid>
                        </Grid>
                        <Table>
                            <TableRow>
                                <TableCell style={{backgroundColor: "#D0D0D0"}}>
                                    <p>Mr. Smith</p>
                                    <p>"Lorem Ipsum"</p>
                                    <Rating disabled value={5} />
                                </TableCell>
                                <TableCell style={{backgroundColor: "#D0D0D0"}}>
                                    <p>Ms. Jackson</p>
                                    <p>"Lorem Ipsum"</p>
                                    <Rating disabled value={2} />
                                </TableCell>
                                <TableCell style={{backgroundColor: "#D0D0D0"}}>
                                    <p>Mrs. Murray</p>
                                    <p>"Lorem Ipsum"</p>
                                    <Rating disabled value={4} />
                                </TableCell>
                                <TableCell style={{backgroundColor: "#D0D0D0"}}>
                                    <p>Mr. Smith</p>
                                    <p>"Lorem Ipsum"</p>
                                    <Rating disabled value={4} />
                                </TableCell>
                            </TableRow>
                        </Table>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

class ViewTourForm extends Component {
    render() {
        return (
            <Grid item style={{padding: "20px", backgroundColor: "#D0D0D0"}}>
                <Grid container direction = "column" justify="space-between">
                    <Grid item>
                        <p>$65 per person</p>
                    </Grid>
                    <Grid item>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "260px"}} label="Enter Tour Date"></TextField>
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "260px"}} label="Enter Tour Time"></TextField>
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField variant="filled" size="small" style={{backgroundColor: "#ffffff", width: "260px"}} label="Enter number of people"></TextField>
                    </Grid>
                    <br />
                    <Grid item>
                        <Button component={RouterLink} to="/Payment" style={{backgroundColor: "#7ACFD6", color: "#FFFFFF", fontWeight: "bold"}}>Book Tour</Button>
                    </Grid>
                    <br />
                    <Grid item>
                        <p style={{fontWeight: "bold"}}>Tour location</p>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

class ViewTour extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Grid container direction = "row" style={{backgroundColor: "#F3F8F9"}}>
                    <ViewTourBody />
                    <ViewTourForm />
                </Grid>
            </React.Fragment>
        );  
    }
};

export default ViewTour;
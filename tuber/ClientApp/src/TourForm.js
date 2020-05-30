import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Session from './Components/Session';
import ClickMapMarker from './Components/ClickMapMarker';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link as RouterLink } from "react-router-dom";
import FormLabel from '@material-ui/core/FormLabel';

class TourForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Form Data
            sessions: [],
            title: "",
            price: 0,
            description: "",
            barter: false,
            location: {lat: -34.42485, lng: 150.89304},
            //Sessions
            sessionElements: []
        };
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.match) return; //New create
        const paramaters = this.props.match.params;
        const localTour = this.getTourDetails(paramaters.id);
        if (localTour) {
            this.setState({
                //Form Data
                sessions: localTour.Sessions,
                title: localTour.Title,
                price: localTour.Price,
                description: localTour.Description,
                barter: localTour.Barter,
                location: localTour.Location,
                //Sessions
                sessionElements: this.genSessions(localTour.Sessions)
            });
        }
    }

    getTourDetails(id) {
        //Calls API to get tour info
        //This id is for testing purposes
        if (id == 1) {
            return ({
                Sessions: [
                    {
                        Days: ["monday", "wednesday", "sunday"],
                        Duration: 305,
                        Time: "13:55"
                    },
                    {
                        Days: ["tuesday", "thursday", "sunday"],
                        Duration: 205,
                        Time: "05:56"
                    },
                ],
                Title: "Paris Tour",
                Description: "A slow stroll around the city",
                Price: 7.90,
                Barter: true,
                Location: {lat: 12.532362, lng: 67.125125}
            });
        }
        return null;
    }

    genSessions(sessions) {
        return sessions.map((value, index) => {
            return (
                <div key={index}>
                    <Session defaultSession={value} sessionHandle={this.sessionChange} sessionId={index}/>
                    <br/>
                    <Button variant="contained" onClick={() => {this.removeSession(index)}}>Remove Session</Button>
                    <hr />
                </div>
            );
        })
    }

    addSession() {
        const sessionElements = this.state.sessionElements;
        const count = sessionElements.length;
        const sess = {
            Days: [],
            Time: "00:00",
            Duration: 0
        }
        let sessions = this.state.sessions;
        sessions.push(sess);
        this.setState({
            sessionElements: [...sessionElements,
                <div key={count}>
                    <Session sessionHandle={this.sessionChange} sessionId={count}/>
                    <br/>
                    <Button variant="contained" onClick={() => {this.removeSession(count)}}>Remove Session</Button>
                    <hr />
                </div>
            ],
            sessions: sessions
        })
    }

    sessionChange = (session, id) => {
        let sessions = this.state.sessions;
        sessions[id] = session;
        this.setState({sessions: sessions});
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    handlePriceChange = (event) => {
        const price = Number(event.target.value);
        this.setState({price: price});
    }

    handleBarterChange = (event) => {
        this.setState({barter: !this.state.barter});
    }

    handleLocationChange = (value) => {
        this.setState({Location: value});
    }

    removeSession(index) {
        const sessionElements = this.state.sessionElements;
        let sessions = this.state.sessions;
        sessions[index] = null;
        let finalSess = [];
        for (let i = 0; i < sessionElements.length; i++) {
            if (i === index) finalSess.push(<div key={i}></div>);
            else finalSess.push(sessionElements[i]);
        }
        this.setState({
            sessionElements: finalSess,
            sessions: sessions
        })
    }
    
    render() {
        return (
            <div>
                <div style={{padding: "20px"}}>
                    <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                        <Grid item>
                            <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
                        </Grid>
                        <Grid item>
                            <ButtonGroup>
                                <Button component={RouterLink} to="/" variant='outlined' style={{backgroundColor: "#ffffff", color: "#E0474C", fontWeight: "bold"}}>Logout</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </div>
                <div style={{padding: "20px", backgroundColor: "#78C5EF"}}>
                    <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                        <Grid item>
                            <h1 style={{color: "#FFFFFF", paddingLeft: "20px"}}>Tour Form</h1>
                        </Grid>
                        <Grid item>
                            <ButtonGroup>
                                <Button variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Save</Button>
                                {this.props.match ? <Button variant='outlined' style={{backgroundColor: "#ffffff", color: "#E0474C", fontWeight: "bold"}}>Delete</Button> : <></>}
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} direction="row" justify="space-around">
                        <Grid container spacing={0} direction="column" justify="space-around" alignItems="flex-start" xs={5} style={{backgroundColor: "#f2f3f4", padding: "20px"}}>
                            <TextField 
                                id="tourTitle"
                                label="Title"
                                variant='outlined'
                                fullWidth
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                                style={{backgroundColor: "#FFFFFF"}}
                            />
                            <TextField
                                id="tourPrice"
                                variant="outlined"
                                type="number"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                onChange={this.handlePriceChange}
                                inputProps={{
                                    step: 0.01,
                                    min: 0
                                }}
                                fullWidth
                                label="Price"
                                value={this.state.price}
                                style={{backgroundColor: "#FFFFFF"}}
                            />
                            <TextField
                                id="tourDesc"
                                label="Description"
                                variant='outlined'
                                multiline
                                fullWidth
                                rows={5}
                                onChange={this.handleDescriptionChange}
                                defaultValue={this.state.description}
                                style={{backgroundColor: "#FFFFFF"}}
                            />
                        </Grid>
                        <Grid direction="column" spacing={0} xs={5} justify="space-between" alignItems="flex-start" style={{backgroundColor: "#f2f3f4", padding: "20px"}}>
                            <FormLabel component="legend">Click to select start marker</FormLabel>
                            <ClickMapMarker height="20em" intialLoc={this.state.location} changeLoc={this.handleLocationChange}/>
                        </Grid>
                    </Grid>
                </div>
                {/*
                <FormControlLabel
                    control={<Switch onChange={this.handleBarterChange} name="barterSwitch" checked={this.state.barter}/>}
                    label="Barter Price"
                />
                <br />
                */}
                <div style={{padding: "20px", backgroundColor: "#78C5EF"}}>
                    <Grid container spacing={0} direction="row" justify="center" alignItems="center" style={{padding: "20px"}} xs={12}>
                        <Grid container xs={7} direction="column" justify="space-around" style={{padding: "20px", backgroundColor: "#f2f3f4"}}>
                            {this.state.sessionElements}
                            <Button variant="contained" onClick={() => {this.addSession()}}>Add New Session</Button>
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        );
    }
}

export default TourForm;
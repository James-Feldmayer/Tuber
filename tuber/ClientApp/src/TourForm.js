import React, { Component } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { TextField, Button, InputAdornment, Grid, ButtonGroup, FormLabel } from '@material-ui/core';
import Session from './Components/Session';
import ClickMapMarker from './Components/ClickMapMarker';

class TourForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Form Data
            sessions: [],
            title: "",
            price: 0,
            description: "",
            location: {lat: -34.42485, lng: 150.89304},
            //Sessions
            sessionElements: []
        };
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    componentDidMount() {
        if (!this.props.url) return; //New create
        const id = this.props.url.match.params.id;
        const localTour = this.getTourDetails(id);
        if (localTour) {
            this.setState({
                //Form Data
                sessions: localTour.Sessions,
                title: localTour.Title,
                price: localTour.Price,
                description: localTour.Description,
                location: localTour.Location,
                //Sessions
                sessionElements: this.genSessions(localTour.Sessions)
            });
        }
    }

    getTourDetails(id) {
        //Calls API to get tour info
        //This id is for testing purposes
        if (id === "1") {
            return ({
                Sessions: [
                    {
                        Date: "2020-06-01",
                        Duration: 305,
                        Time: "13:55"
                    },
                    {
                        Date: "2020-05-30",
                        Duration: 205,
                        Time: "05:56"
                    },
                ],
                Title: "Paris Tour",
                Description: "A slow stroll around the city",
                Price: 7.90,
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

    handleLocationChange = (value) => {
        this.setState({Location: value});
    }

    async apiCall(post, address, data=null) {
        const location = window.location.hostname;
        const postSettings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        //Requires port
        const url = `https://${location}:5001/api/${address}`;
        try {
            const fetchResponse = await (post ? fetch(url, postSettings) : fetch(url));
            const data = await fetchResponse.json();
            return data;
        } catch (e) {
            return e;
        } 
    }

    handleSaveButton = (event) => {
        const sessions = this.state.sessions
            .filter(sess => sess !== null)
            .map(sess => {
            console.log(sess);
            const dateTime = sess.Date + "T" + sess.Time;
            return {
                SessionId: sess.SessionId ? sess.SessionId : 0,
                SessionDatetime: dateTime,
                TourId: this.props.url ? this.props.url.match.params.id : 0
            }
        })
        let address = "AdjustTour/Create";
        if (this.props.url) address = "AdjustTour/Update";
        const data = {
            TourId: this.props.url ? this.props.url.match.params.id : 0,
            GuideId: this.props.user ? this.props.user.UserId : 1,
            Session: sessions,
            TourTitle: this.state.title,
            //Price: this.state.price,
            TourDescription: this.state.description,
            Latitude: this.state.location.lat,
            Longitude: this.state.location.lng
        };
        console.log(data);
        this.apiCall(true, address, data)
            .then((response) => console.log(response));
    }

    handleDeleteButton = (event) => {
        const address = "AdjustTour/Delete";
        const data = {TourId: this.props.url ? this.props.url.match.params.id : 0};
        this.apiCall(true, address, data)
            .then((response) => console.log(response));
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
                            <Button component={RouterLink} to="/Tourist" style={{color:"#E0474C", fontWeight: "bold"}}>Access dashboard</Button>
                        </Grid>
                    </Grid>        
                </div>
                <div style={{padding: "20px", backgroundColor: "#78C5EF"}}>
                    <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
                        <Grid item>
                            <h1 style={{color: "#FFFFFF", paddingLeft: "20px"}}>CREATE TOUR</h1>
                        </Grid>
                        <Grid item>
                            <ButtonGroup>
                                <Button onClick={this.handleSaveButton} variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Save</Button>
                                {this.props.url ? <Button onClick={this.handleDeleteButton} variant='outlined' style={{backgroundColor: "#ffffff", color: "#E0474C", fontWeight: "bold"}}>Delete</Button> : <></>}
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
                        <Grid container xs={8} direction="column" justify="space-around" style={{padding: "20px", backgroundColor: "#f2f3f4"}}>
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
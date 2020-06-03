import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Link as RouterLink } from "react-router-dom";
import './Search.css';
import CurrentLocation from './Components/Map';

import { Button, TextField, ButtonGroup, Grid, Table, TableRow, TableCell } from '@material-ui/core'

const style = {
  width: '50vw',
  height: '50vh',
};

class Header extends Component {
  render() {
    return(
      <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <a href="/" style={{color: "#000000", fontWeight: "bold", fontSize:"36px", textDecoration: "none"}}>TUBER</a>
        </Grid>
        <Grid item>
          <ButtonGroup>
            <Button component={RouterLink} to="/CreateTour" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Create Tour</Button>
            <Button component={RouterLink} to="/Tourist" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Manage Tours</Button>
            <Button component={RouterLink} to="/Login" variant='outlined' style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>Login</Button>
            <Button component={RouterLink} to="/Register" variant='outlined' style={{backgroundColor: "#ffffff", color: "#E0474C", fontWeight: "bold"}}>Sign Up</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
}

class SearchForm extends Component {
  render() {
    return(
      <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <TextField variant="outlined" size="small" label="What are you looking for?" style={{backgroundColor:"#FFFFFF"}}/>
          &nbsp;
          <TextField variant="outlined" size="small" label="Where?" style={{backgroundColor:"#FFFFFF"}}/>
          &nbsp;
          <TextField variant="outlined" size="small" label="How many people?"  style={{backgroundColor:"#FFFFFF"}}/>
          &nbsp;&nbsp;&nbsp;
          <ButtonGroup>
            <Button variant="outlined" style={{backgroundColor: "#7ACFD6", color: "#ffffff", fontWeight: "bold"}}>Explore</Button>
            <Button variant="outlined" style={{backgroundColor: "#ffffff", fontWeight: "bold"}}>More Filters</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: [
        {name: 'Wollongong Art Gallery', latitude: -34.4209237, longitude: 150.8930583},
        {name: 'Wollongong Botanic Gardens', latitude: -34.4170295, longitude: 150.887136},
        {name: 'Statue of Liberty Historical Monument', latitude: 40.6892534, longitude: -74.0466891},
        {name: 'Lincoln Memorial', latitude: 38.8885222, longitude: -77.0191213},
        {name: 'Big Ben', latitude: 51.5007325, longitude: -0.1268141},
        {name: 'Bens Walk, Nowra', latitude: -34.8716197, longitude: 150.589701}
      ]
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    return this.state.locations.map((location, index) => {
      return <Marker
        name={location.name}
        key={index}
        id={index}
        position ={{
          lat: location.latitude,
          lng: location.longitude
        }}
        onClick={this.onMarkerClick}
      />
    })
  }

  render() {
    if (!this.props.loaded) {
      return <div className = "App">Loading...</div>
    }
    return (
      <React.Fragment>
        <div className="App-header">
          <Header />
          <SearchForm />
        </div>
        <div className="App-body">
          <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
            <Grid item style={{width: "600px"}}>
              <Table size="small" style={{backgroundColor: "#FFFFFF"}}>
                <TableRow>
                    <TableCell>Tour Name</TableCell>
                    <TableCell>Tour Desc</TableCell>
                    <TableCell>Tour Price</TableCell>
                    <TableCell>Guide Name</TableCell>
                    <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tour Name</TableCell>
                    <TableCell>Tour Desc</TableCell>
                    <TableCell>Tour Price</TableCell>
                    <TableCell>Guide Name</TableCell>
                    <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tour Name</TableCell>
                    <TableCell>Tour Desc</TableCell>
                    <TableCell>Tour Price</TableCell>
                    <TableCell>Guide Name</TableCell>
                    <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tour Name</TableCell>
                    <TableCell>Tour Desc</TableCell>
                    <TableCell>Tour Price</TableCell>
                    <TableCell>Guide Name</TableCell>
                    <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tour Name</TableCell>
                    <TableCell>Tour Desc</TableCell>
                    <TableCell>Tour Price</TableCell>
                    <TableCell>Guide Name</TableCell>
                    <TableCell><Button component={RouterLink} to="/ViewTour" style={{backgroundColor: "#E0474C", color:"white", fontWeight: "bold"}}>View</Button></TableCell>
                </TableRow>
              </Table>
            </Grid>
            <Grid item style={{height: "500px"}}>
              <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
              >
              {this.displayMarkers()}
              <Marker onClick={this.onMarkerClick} name="Current Location"/>
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
              </CurrentLocation>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRHWRWz4ALveAF2bcLkry0hL5UFNmC2fo'
})(Search);
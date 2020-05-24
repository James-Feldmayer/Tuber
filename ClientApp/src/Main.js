import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Main.css';
import CurrentLocation from './Map';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'

const style = {
  width: '50vw',
  height: '50vh',
};

class Main extends Component {
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
    <div>
      <div className="App-header">
        <Grid container spacing={3} direction="row">
          <Grid item xs={50}>
            <h4>Tuber</h4>
            <ButtonGroup>
              <Button variant='outlined'>Create Tour</Button>
              <Button variant='outlined'>Manage Tours</Button>
              <Button variant='outlined'>Login</Button>
              <Button variant='outlined'>Sign Up</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={10}>
            <TextField variant="outlined" size="small" helperText="Enter Tour Type" />
            <TextField variant="outlined" size="small" helperText="Enter Location" />
            &nbsp;&nbsp;&nbsp;
            <ButtonGroup>
              <Button variant="outlined">Search</Button>
              <Button variant="outlined">More Filters</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
      <div className="App-map">
        <Grid item xs={20}>
          <p>Text</p>
        </Grid>
        <Grid item xs={10}>
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
      </div>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRHWRWz4ALveAF2bcLkry0hL5UFNmC2fo'
})(Main);
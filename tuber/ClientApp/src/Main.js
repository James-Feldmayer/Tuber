import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Main.css';

const mapStyles = {
  width: '95%',
  height: '75%',
};

class Main extends Component {
  render() {
      return (
      <div className="App">
        <h1 className = "App-header">Tuber</h1>
        <div className = "App-map">
          <Map
            google={this.props.google}
            zoom = {8}
            style = {mapStyles}
            initialCenter={{ lat:-34.87852, lng:150.59510}}
            />
        </div>
        <div>
          <button type="button">Home</button>
          <button type="button">History</button> 
          <button type="button">Account</button> 
        </div>
      </div>
   );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRHWRWz4ALveAF2bcLkry0hL5UFNmC2fo'
})(Main);
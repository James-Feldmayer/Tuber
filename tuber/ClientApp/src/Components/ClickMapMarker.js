import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class ClickMapMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: {
                title: "",
                name: "Start",
                position: { lat: -34.42485, lng: 150.89304 }
            }
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if (this.props.intialLoc) {
            this.setState({marker: {
                title: "",
                name: "Start",
                position: { lat: this.props.intialLoc.lat, lng: this.props.intialLoc.lng}
            }});
        }
    }

    onClick(t, map, coord) {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState({
            marker: {
                title: "",
                name: "Start",
                position: { lat: lat, lng: lng }
            }
        });

        this.props.changeLoc({lat: lat, lng: lng});
    }

    render() {
        return (
        <div>
            <Map
            google={this.props.google}
            style={{position: "relative", width: "100%", height: this.props.height}}
            containerStyle={{position: "relative"}}
            className={"map"}
            zoom={14}
            onClick={this.onClick}
            center={{lat: this.state.marker.position.lat, lng: this.state.marker.position.lng}}
            >
                <Marker
                title={this.state.marker.title}
                name={this.state.marker.name}
                position={this.state.marker.position}
                />
            </Map>
        </div>
        );
    }
}
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBRHWRWz4ALveAF2bcLkry0hL5UFNmC2fo'
})(ClickMapMarker);
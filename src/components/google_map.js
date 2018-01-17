import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount(){
        var map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat:this.props.lat,
                lng:this.props.lon
            }
        });

        new google.maps.Marker({
            position: {
                lat:this.props.lat,
                lng:this.props.lon
            },
            map: map
          });

    }   

    render() {
        return (
        <div ref="map">
        loading map...
        </div>
    )};

}

export default GoogleMap;
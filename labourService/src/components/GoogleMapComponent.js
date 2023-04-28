import React, { useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
const GoogleMapComponent = (props) => {
    let markersList = [
        { lat: 23.024000, lng: 72.580276 },
        { lat: 23.0063, lng: 72.6026 }
    ]
    let [markers] = useState(markersList);
    const mapStyles = {
        width: '100%',
        height: '100%'
    };

    let myMarkers = Object.entries(markers).map(([key, val]) => (
        <Marker key={key} id={key} position={{
            lat: val.lat,
            lng: val.lng
        }}
            onClick={() => console.log("Clicked")} />
    ))

    return (
        <>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 23.033863,
                        lng: 72.585022
                    }
                }
            >
                {myMarkers}
            </Map>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC5il79cJqCx4MxErV04F6yhxWZjTxWXUo'
})(GoogleMapComponent);
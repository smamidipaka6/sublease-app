//AIzaSyDDc7uaXTqeOIls4hA7zb-R09pYwy2gR5o
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ center }) => {
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: center.lat, 
    lng: center.lng
  }
  
  return (
     <LoadScript
       googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
       <GoogleMap
         mapContainerStyle={mapStyles}
         zoom={13}
         center={defaultCenter}>
         <Marker position={defaultCenter}/>
       </GoogleMap>
      </LoadScript>
  )
};

export default MapContainer;

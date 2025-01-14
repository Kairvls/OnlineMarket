"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OrmocCityCoordinates = { lat: 11.0096, lng: 124.6026 }; // Coordinates for Ormoc City center
const OrmocCityRadius = 613.60; // Set a radius (in km) for the scope

export default function ShippingForm() {
  const [userLocation, setUserLocation] = useState(null);
  const [isInOrmoc, setIsInOrmoc] = useState(false);
  
  // Function to calculate distance between two lat/lng points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  useEffect(() => {
    // Get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setUserLocation({ lat: userLat, lng: userLng });

        // Calculate if the user is within Ormoc City radius
        const distance = calculateDistance(userLat, userLng, OrmocCityCoordinates.lat, OrmocCityCoordinates.lng);
        if (distance <= OrmocCityRadius) {
          setIsInOrmoc(true);
        } else {
          setIsInOrmoc(false);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!userLocation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shipping Information</h1>
      <p>Your location is {isInOrmoc ? 'within Ormoc City' : 'outside Ormoc City'}.</p>
      
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={userLocation}
          zoom={15}
        >
          <Marker position={userLocation} />
        </GoogleMap>
      </LoadScript>

      {isInOrmoc ? (
        <div>
          <h2>You're eligible for local shipping!</h2>
          {/* Display shipping options */}
        </div>
      ) : (
        <div>
          <h2>Shipping not available in your area.</h2>
        </div>
      )}
    </div>
  );
}

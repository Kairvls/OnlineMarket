"use client";
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OrmocCityCoordinates = { lat: 11.017, lng: 124.606 }; // Coordinates for Ormoc City center
const OrmocCityRadius = 10; // Set a radius (in km) for the scope

const FeedbackPage = () => {
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

  const handleClick = () => {
    alert('Feedback Successfully Sent.');
  }
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div>
      <section className="text-gray-400 h-screen bg-[#19191C] body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Left Section with Map */}
          <div className="lg:w-2/3 md:w-1/2 bg-[##f2f2f2] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
            onMouseEnter={() => setIsPopupVisible(true)}
            
            onClick={() => setIsPopupVisible(!isPopupVisible)}
            
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Ormoc+City+(My%20Online%20Market)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: 'blackscale(1) contrast(1.2) opacity(0.16)' }}
              
            ></iframe>
            {isPopupVisible && (
            <div className="bg-[#1a1a1a] relative flex flex-wrap py-6 rounded shadow-md" >
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Brgy.Sto Nino Ormoc City Leyte</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <button type="button" className="py-4 px-6 justify-end ml-[210px] mt-[-30px] absolute" onClick={() => setIsPopupVisible(false)}>x</button>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:jhoncarlosuan26@gmail.com" className="text-indigo-400 leading-relaxed">jhoncarlosuan26@gmail.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
              
            </div>
            )}
          </div>

          {/* Right Section for Feedback Form */}
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5">Free to say any feedback of the delivery experience.</p>

            {/* Feedback Form */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#1a1a1a] rounded border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#1a1a1a] rounded border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-[#1a1a1a] rounded border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={handleClick}
              className="text-white bg-[#28A745] border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
              Done
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              A good cooperation, result a good impact
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <Link
        href="../view"
         className="absolute flex  top-10 left-5 bg-[#28A745] hover:bg-green-700 text-white py-1 px-4 rounded-md shadow-sm"
      >
        Back
      </Link>
    </div>
  );
};

export default FeedbackPage;

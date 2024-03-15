// MapScreen.js
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapScreen = ({ selectedParking }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCMUg_czDN7SYaq3YD-U5YXP8p4fpTkuyw',
      version: 'weekly',
    });

    loader.load().then(async () => {
      const google = window.google;
      const map = new google.maps.Map(mapContainerRef.current, {
        center: { lat: 30.7059, lng: 76.8011 },
        zoom: 16,
      });

      let infoWindow;

      // Display selected parking marker
      if (selectedParking) {
        const { lc, pn } = selectedParking;
        const lat = lc.cord[0];
        const lng = lc.cord[1];
        const coordinates = { lat, lng };

        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: pn,
        });

        const content = `<div><h1 className"text-xl">${pn}</h1></div>`;
        infoWindow = new google.maps.InfoWindow({ content });
        infoWindow.open(map, marker);
      }
    });
  }, [selectedParking]);

  return (
    <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />
  );
};

export default MapScreen;

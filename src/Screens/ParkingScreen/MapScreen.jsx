import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapScreen = ({ data, selected }) => {
  console.log(data)
  const mapContainerRef = useRef(null);
  const [selectedParking, setSelectedParking] = useState(null);
  console.log(selected)

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCMUg_czDN7SYaq3YD-U5YXP8p4fpTkuyw',
      version: 'weekly',
    });

    loader.load().then(async () => {
      const google = window.google;
      const map = new google.maps.Map(mapContainerRef.current, {
        center: { lat: 30.7059, lng: 76.8011 },
        zoom: 20,
      });

      let infoWindow;
      if (selected) {
        const { location, pn } = selected;
        const lat = location.coordinates[0];
        const lng = location.coordinates[1];
        const coordinates = { lat, lng };
        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: selected.pn,
        });

        const content = `<div class="bg-white rounded-lg shadow-lg p-1 w-32">
        <h1 class="text-lg font-bold">${selected.pn}</h1>
        <h3 class="text-sm font-semibold">${selected.pa},</h3>
        <h3 class="text-sm font-semibold">${selected.city},</h3>
        <h3 class="text-sm font-semibold">${selected.pc}</h3>
      </div>`
        infoWindow = new google.maps.InfoWindow({ content });
        infoWindow.open(map, marker);
        marker.addListener('mouseover', () => {
          infoWindow = new google.maps.InfoWindow({ content });
          if (markerInfo) {
              infoWindow.open(map, marker);
              setSelectedParking(markerInfo); 
          }
      });
      }

      data.forEach(markerInfo => {
        const lat = markerInfo.location.coordinates[0];
        const lng = markerInfo.location.coordinates[1];
        const coordinates = { lat, lng };
        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          title: markerInfo.pn,
        });

        marker.addListener('mouseover', () => {
          const content = `   <div class="bg-white rounded-lg shadow-lg p-1 w-32">
          <h1 class="text-lg font-bold">${markerInfo.pn}</h1>
          <h3 class="text-sm font-semibold">${markerInfo.pa},</h3>
          <h3 class="text-sm font-semibold">${markerInfo.city},</h3>
          <h3 class="text-sm font-semibold">${markerInfo.pc}</h3>
        </div>`
          infoWindow = new google.maps.InfoWindow({ content });
          infoWindow.open(map, marker);
          setSelectedParking(markerInfo);
        });

        marker.addListener('mouseout', () => {
          infoWindow.close();
        });
      });
    });
  }, [data, selected]);

  return (
      <div ref={mapContainerRef} className='w-full h-full' />
  );
};

export default MapScreen;

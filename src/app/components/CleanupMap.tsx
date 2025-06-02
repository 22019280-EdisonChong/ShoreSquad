'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface CleanupMapProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function CleanupMap({ latitude, longitude, title }: CleanupMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const position = { lat: latitude, lng: longitude };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: 'DEMO_MAP_ID',
        mapTypeControl: false,
      };

      const map = new Map(mapRef.current as HTMLElement, mapOptions);
      
      new Marker({
        map,
        position,
        title,
        animation: google.maps.Animation.DROP,
      });
    };

    initMap();
  }, [latitude, longitude, title]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
      style={{ border: '2px solid var(--color-ocean-blue)' }}
    />
  );
}

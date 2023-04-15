import React, { useState, useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Overlay from 'ol/Overlay';

const MapWithLocation = () => {
  const [location, setLocation] = useState(null);
  const mapRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    const popup = new Overlay({
      element: popupRef.current,
      positioning: 'bottom-center',
      stopEvent: false
    });

    map.addOverlay(popup);

    return () => {
      map.setTarget(null);
    };
  }, []);

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        date: new Date().toLocaleDateString()
      });
    });
  };

  useEffect(() => {
    if (location) {
      const point = new Point(fromLonLat([location.lng, location.lat]));
      const feature = new Feature({
        geometry: point
      });

      const map = mapRef.current.olMap;

      const popup = popupRef.current;
      popup.innerHTML = `Fecha: ${location.date}`;

      popup.style.display = 'block';
      popup.style.opacity = 1;

      popup.addEventListener('mouseout', () => {
        popup.style.display = 'none';
      });

      const view = map.getView();
      view.animate({
        center: point.getCoordinates(),
        zoom: 13
      });

      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000);
    }
  }, [location]);

  return (
    <div>
      <button onClick={handleLocationClick}>Obtener mi ubicación</button>
      <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>
      <div ref={popupRef} className="popup"></div>
    </div>
  );
}

export default MapWithLocation;

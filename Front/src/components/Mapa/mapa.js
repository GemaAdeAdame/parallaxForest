import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icono from '../images/iconoUbicacion.svg';

class Map extends Component {
  componentDidMount() {
    if (!this.map) {
        
      this.map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors'
      }).addTo(this.map);

      // Obtener la ubicación del usuario
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          const latLng = L.latLng(latitude, longitude);

          // Agregar el marcador en la ubicación del usuario
          const customIcon = L.icon({
            iconUrl: icono,
            iconSize: [64, 64], // tamaño del ícono en píxeles
            iconAnchor: [16, 32] // posición del ancla del ícono en relación con su parte inferior izquierda
          });

          L.marker(latLng, { icon: customIcon }).addTo(this.map);
          this.map.setView(latLng);
        },
        error => {
          console.error(error);
          alert('No se pudo obtener la ubicación del usuario.');
        },
        { timeout: 10000 } // aumentar el tiempo de espera a 10 segundos
      );
    }
  }

  render() {
    return <div id="map" style={{ height: '400px', width:'400px' }} />;
  }
}

export default Map;

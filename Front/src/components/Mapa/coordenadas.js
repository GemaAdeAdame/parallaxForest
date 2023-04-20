import React, { useState, useEffect } from "react";
import axios from 'axios';


function Coordenadas() {
  const [posicion, setPosicion] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosicion([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => console.log(error)
    );
  }, []);

  const enviarCoordenadas = () => {
    const mapa = {
      latitud: posicion[0],
      longitud: posicion[1]
    };

    console.log(mapa);
  
    axios.post('http://localhost:8000/coordenadas/', mapa, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    }, []);
  }
  
  return (
    
    <div className="mapa">
      <h2>Mi ubicación actual:</h2>
      {posicion ? (
        <>
          <p>Latitud: {posicion[0]}</p>
          <p>Longitud: {posicion[1]}</p>
          <button onClick={enviarCoordenadas}>Enviar coordenadas</button>
        </>
      ) : (
        <p>Buscando tu ubicación...</p>
      )}
    </div>
  );
}

export default Coordenadas
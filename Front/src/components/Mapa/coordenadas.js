import { useEffect, useState } from "react";
import axios from 'axios';

function Coordenadas() {
  const [posicion, setPosicion] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosicion([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => console.log(error)
    );
  }, []);

  function handleEnviarCoordenadas() {
    axios.post('/avistamientos/new', {latitud: posicion[0], longitud: posicion[1]})
      .then(response => {
        console.log(response.data);
        // aquí puedes actualizar tu estado local o mostrar una notificación de éxito
      })
      .catch(error => {
        console.log(error);
        // aquí puedes mostrar una notificación de error
      });
  }

  // const handleEnviarCoordenadas = async () => {
  //   const [latitud, longitud] = posicion;
  //   const response = await fetch('http://127.0.0.1:8000/avistamientos/new', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       Latitud: latitud,
  //       Longitud: longitud
  //     })
  //   });
  //   if (response.ok) {
  //     console.log('Coordenadas enviadas con éxito');
  //   } else {
  //     console.log('Error al enviar coordenadas');
  //   }
  // }

  return (
    <div className="mapa">
      <h2>Mi ubicación actual:</h2>
      <p>Latitud: {posicion[0]}</p>
      <p>Longitud: {posicion[1]}</p>
      <button onClick={handleEnviarCoordenadas}>Enviar coordenadas</button>
    </div>
  );
}
export default Coordenadas
import { useEffect, useState } from "react";

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

  return (
    <div className="mapa">
      <h2>Mi ubicación actual:</h2>
      <p>Latitud: {posicion[0]}</p>
      <p>Longitud: {posicion[1]}</p>
    </div>
  );
}
export default Coordenadas
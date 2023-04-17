import { useState, useEffect } from 'react';

function Fecha() {
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/fecha')
      .then(response => response.json())
      .then(data => setFecha(data.fecha))
      
      .catch(error => {
        console.error(error);
        console.log(error.response);
      });
      
  }, []);

  if (!fecha) {
    return <p>Loading...</p>;
  }

  return <p>Today is {fecha}</p>;
}

export default Fecha;
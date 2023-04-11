
import React, { useEffect } from "react";
import RegistroObservaciones from '../images/registraTusObservaciones.gif'
import Pista from '../images/lupa.gif'
import Ubicacion from '../images/mapa.gif'
import Parallax from "./Parallax";
import "./Home.css"



function Home() {
return(
  <>

    <Parallax />

    <div className="container">

      <div className="textoInicio">
        <h2>¿Quieres participar?</h2>
          <p>Como todos ya más o menos sabéis, la tierra está viviendo un proceso de calentamiento global. Esto es un problema ya que implica ciertas consecuencias como el deshielo polar, la desertificación y la pérdida de la biodiversidad.</p> 
          <p>En este último, nos enfrentamos a la pérdida de especies de plantas y animales, así como cambios en el comportamiento ambiental que han llevado siempre.Un gran ejemplo de esto son los hábitos migratorios de las aves. Observando cuándo y dónde se encuentran de forma continuada, podemos estudiar en profundidad lo que está pasando y encontrar una solución.</p>
          <p>Pero no sólo en las aves, también ayuda identificar algunas plantas e insectos, ¿Qué me dices? 
            ¿Nos ayudas a saber qué ocurre en nuestro entorno ahora?</p>
      </div>

      <div className="steps">

        <div className="step1"> 
          <img src={Ubicacion} alt="" />
          <h3>Ubícate en el mapa</h3>
        </div>

        <div className="step2"> 
          <img src={Pista} alt="" />
          <h3>Sigue la pista</h3>
        </div>

        <div className="step3"> 
          <img src={RegistroObservaciones} alt="" />
          <h3>Registra tus observaciones</h3>
        </div>
      </div>

      <div className="containerFlex">
        <button src="/Register" className="greenbtn">¡Empezamos!</button>
      </div>

    </div>

  </>

)

}
export default Home;
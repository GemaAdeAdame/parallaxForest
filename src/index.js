import React from "react";
import ReactDOM from "react-dom";
import ForestLandingPage3 from "./Birdes";
import Step1 from './images/step1.png'
import Step2 from './images/step2.png'
import Step3 from './images/step3.png'
import Loc from './images/map.gif'
import Pista from './images/lupa.gif'
import Registro from './images/regCentr.gif'

import "./animated.css";
import "./styles.css";

function App() {
  return (
    <>
     
  <ForestLandingPage3 />
    <div className="sec">
       <div className="container">

       <h2>¿Quieres participar?</h2>
       


<p>Como todos ya más o menos sabéis, la tierra está viviendo un proceso de calentamiento global. Esto es un problema ya que implica ciertas consecuencias como el deshielo polar, la desertificación y la pérdida de la biodiversidad.</p> 
  
  <p>En este último, nos enfrentamos a la pérdida de especies de plantas y animales, así como cambios en el comportamiento ambiental que han llevado siempre.Un gran ejemplo de esto son los hábitos migratorios de las aves. Observando cuándo y dónde se encuentran de forma continuada, podemos estudiar en profundidad lo que está pasando y encontrar una solución.</p>

<p>Pero no sólo en las aves, también ayuda identificar algunas plantas e insectos, ¿Qué me dices? 
  ¿Nos ayudas a saber qué ocurre en nuestro entorno ahora?  </p>
    <div className="pasos  container">
      <div className="step1"> 
      <img src={Loc} alt="" />
        <h3>Ubícate en el mapa</h3>
      </div>
      <div className="step2"> 
      <img src={Pista} alt="" />
      <h3>Sigue la pista</h3>
      </div>
      <div className="step3"> 
      <img src={Registro} alt="" />
      <h3>Registra tus observaciones</h3>
      </div>
    </div>
    <div className="containerFlex">
      <button className="greenbtn">¡Empezamos!</button>
      </div>
      </div>
      </div>
    </>
   
  );
  
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

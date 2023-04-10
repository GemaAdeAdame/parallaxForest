import React, { useEffect } from "react";
import Logo from './images/logoAventurero.png'
import City from './images/city5.png'
import GolondrinaL from './images/golIzqui.png'
import GolondrinaR from './images/goldere.png'



function ForestLandingPage3() {
  useEffect(() => {
    const text = document.getElementById("text");
    const bird1 = document.getElementById("bird1");
    const bird2 = document.getElementById("bird2");
    // const bird5 = document.getElementById("bird5");
  
    function handleScroll() {
      const value = window.scrollY;

    text.style.top = `calc(20% - ${value * 0.3}px)`;
      bird2.style.top = `${value * -1.5}px`;
     bird2.style.left = `${value * 2}px`;
     bird1.style.top = `${value * -1.5}px`;
      bird1.style.left = `${value * -5}px`;
      // bird5.style.top = `${value * -1.5}px`;
      // bird5.style.left = `${value * 2}px`;
      // header.style.top = `${value * 0.5}px`;
   
    btn.style.marginTop = `${value * 1.5}px`;
    
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section>
      <div id="text">
        <img src={Logo} id="logo" />
        <h2>¡BIENVENID@ <br/>AVENTURER@!</h2>
      </div>

        <img src={GolondrinaL} id="bird1" />
        <img src={GolondrinaR} id="bird2" />

        <img src="https://user-images.githubusercontent.com/65358991/170092559-883fe071-eb4f-4610-8c8b-a037d061c617.png" id="forest" />
        <img src={City} /> 
      

       

      <img src="https://user-images.githubusercontent.com/65358991/170092605-eada6510-d556-45cc-b7fa-9e4d1d258d26.png" id="rocks" />
      <img src="https://user-images.githubusercontent.com/65358991/170092616-5a70c4af-2eed-496f-bde9-b5fcc7142a31.png" id="water" />
      {/* <img src="https://user-images.githubusercontent.com/65358991/170092504-132fa547-5ced-40e5-ab64-ded61518fac2.png" id="bird5" /> */}
       
        <a href="#" id="btn">
         Entrar
        </a>
      </section>

     

     
    </div>
  );
}

export default ForestLandingPage3;

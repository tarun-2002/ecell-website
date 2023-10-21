import React from 'react'
import Typewriter from "typewriter-effect";
import  ParticlesContainer  from "./particleContainer"
import "./Lander.css"
const Lander = () => {
  return (
    <div className="lander">
  <ParticlesContainer />  
    <div className="logo-wrapper"><a><img className="logo" src ="images/ecell-final-logo-01.png" alt="logo"/></a></div>
<div className="heading-lander-wrapper">

        <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  cursor:""
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("E-CELL RGIPT")
                    .pauseFor(5000000000000000)
                    .deleteAll()
                    .deleteAll()
                    .start();
                }}
              />

            </span>
            </div>
            <div className="slogan-wrapper">
        <h2>
          IGNITE · INNOVATE · INSPIRE
        </h2>
        </div>
        <button className="lander-button">Explore</button>
     
</div>
  )
}

export default Lander

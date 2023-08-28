import React from 'react'
import './MyProjects.css'
import ImageSlider from './ImageSlider'
import fone from '../Images/Flightlogin.jpg'
import ftwo from '../Images/Flightres.jpg'
import fthree from '../Images/Flightsch.jpg'

import tone from '../Images/tictacmenu.png'
import ttwo from '../Images/tictacplay.png'
import tthree from '../Images/tictacwin.png'



const MyProjects = (props) => {
  
  return (

    
    <div className={`projects bg-${props.mode.bodycolor}`}>
          <p className='heading' data-aos="fade-up">My Projects</p>
    

      <div className="pro1">

        <div className="des1" data-aos='fade-right' data-aos-duration="400"  data-aos-delay="500" >
          <h1>AirLine System (Java)</h1>
            <p>New-PAK (NPAFS) is an airline system build using JAVA (OOPs).
             The user can login and sign up. The user can search for flights and book flights.
              Fares for the flights are calculated from fare calculation class. 
              Passengers class contains all the attributes and methods related to passengers and Flights 
              class contains attributes related to flights. For proper GUI implementation, java swing has been used. Certain validations for login/sign up, flights, booking etc. are also applied.
            </p>
        </div>
        <div className="img1" data-aos='fade-top' data-aos-duration="300"  data-aos-delay="300" >
            <ImageSlider  one={fone} two={ftwo} three={fthree}/>
        </div>
      </div>


      <div className="pro2">


        <div className="des2" data-aos='fade-right' data-aos-duration="400"  data-aos-delay="600" >
        <h1>Tic Tac Toe (Java)</h1>
        <p>Tic Tac Toe is a multi player game made using Java and OOP concenpts. Game is console based
           and can be played against PC and other player. It has three modes of difficulty against PC. 

            </p>
        </div>
        <div className="img2" data-aos='fade-top' data-aos-duration="300"  data-aos-delay="400">
        <ImageSlider  one={tone} two={ttwo} three={tthree} />

        </div>

       
      </div>


        <div className="pro3">
            
        <div className="des3"  data-aos='fade-right' data-aos-duration="400"  data-aos-delay="700">
        <h1>AirLine System (Java)</h1>
        <p>New-PAK (NPAFS) is an airline system build using JAVA (OOPs).
             The user can login and sign up. The user can search for flights and book flights.
              Fares for the flights are calculated from fare calculation class. 
              Passengers class contains all the attributes and methods related to passengers and Flights 
              class contains attributes related to flights. For proper GUI implementation, java swing has been used. Certain validations for login/sign up, flights, booking etc. are also applied.
            </p>
        </div>
        <div className="img2" data-aos='fade-top' data-aos-duration="300"  data-aos-delay="450">
        <ImageSlider  one={fone} two={ftwo} three={fthree}/>

        </div>

      </div>

    </div>
  )
}

export default MyProjects

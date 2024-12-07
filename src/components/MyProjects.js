import React from 'react'
import './MyProjects.css'
import ImageSlider from './ImageSlider'
import fone from '../Images/Flightlogin.jpg'
import ftwo from '../Images/Flightres.jpg'
import fthree from '../Images/Flightsch.jpg'

import tone from '../Images/tictacmenu.png'
import ttwo from '../Images/tictacplay.png'
import tthree from '../Images/tictacwin.png'

import bloodone from '../Images/1.png'
import bloodtwo from '../Images/2.png'
import bloodthree from '../Images/3.png'
import bloodfour from '../Images/4.png'

import cs1 from '../Images/cs1.png'
import cs2 from '../Images/cs2.png'
import cs3 from '../Images/cs3.png'
import cs4 from '../Images/cs4.png'
import cs5 from '../Images/cs5.png'
import cs6 from '../Images/cs6.png'


const MyProjects = (props) => {

  return (


    <div className={`projects bg-${props.mode.bodycolor}`}>
      <p className='heading' data-aos="fade-up">My Projects</p>

      <div className="pro1">

        <div className="des1" data-aos='fade-right' data-aos-duration="400" data-aos-delay="500" >
          <h1>Code Scrub</h1>
          <p>
            CodeScrub is an AI-powered code analyzer for JavaScript and Java projects.
            Effortlessly scan your repository for code smells and poor practices that compromise quality
            and maintainability. Improve your development process, boost code quality, and save time with
            CodeScrub’s smart insights. Enjoy a user-friendly interface that lets you analyze your code with
            just a few clicks, making manual reviews a thing of the past.
          </p>
        </div>
        <div className="img1" data-aos='fade-top' data-aos-duration="300" data-aos-delay="300" >
          <ImageSlider one={cs1} two={cs2} three={cs3} four={cs4} five={cs5} six={cs6} />
        </div>
      </div>

      <div className="pro2">

        <div className="des1" data-aos='fade-right' data-aos-duration="400" data-aos-delay="500" >
          <h1>AirLine System (Java)</h1>
          <p>New-PAK (NPAFS) is an airline system build using JAVA (OOPs).
            The user can login and sign up. The user can search for flights and book flights.
            Fares for the flights are calculated from fare calculation class.
            Passengers class contains all the attributes and methods related to passengers and Flights
            class contains attributes related to flights. For proper GUI implementation, java swing has been used. Certain validations for login/sign up, flights, booking etc. are also applied.
          </p>
        </div>
        <div className="img1" data-aos='fade-top' data-aos-duration="300" data-aos-delay="300" >
          <ImageSlider one={fone} two={ftwo} three={fthree} />
        </div>
      </div>


      <div className="pro3">


        <div className="des2" data-aos='fade-right' data-aos-duration="400" data-aos-delay="600" >
          <h1>Tic Tac Toe (Java)</h1>
          <p>Tic Tac Toe is a multi player game made using Java and OOP concenpts. Game is console based
            and can be played against PC and other player. It has three modes of difficulty against PC.
          </p>
        </div>
        <div className="img2" data-aos='fade-top' data-aos-duration="300" data-aos-delay="400">
          <ImageSlider one={tone} two={ttwo} three={tthree} />

        </div>


      </div>


      <div className="pro3">

        <div className="des3" data-aos='fade-right' data-aos-duration="400" data-aos-delay="700">
          <h1>BloodBond_ Blood Donation Platform (MERN)</h1>
          <p>
            BloodBond is a blood donation platform where donors can donate blood to Organizations near them.
            Organizations are connected with Hospitals and supply them blood as per their requiremented.
            There are four modules Donor, Hospital, Organization and Admin.
            This app has been created using MERN stack. User authentication and authorization has also been used.
          </p>
        </div>
        <div className="img2" data-aos='fade-top' data-aos-duration="300" data-aos-delay="450">
          <ImageSlider one={bloodone} two={bloodtwo} three={bloodthree} four={bloodfour} />
        </div>

      </div>

    </div>
  )
}

export default MyProjects

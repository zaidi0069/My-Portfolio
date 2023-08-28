import React from 'react'

import './Home.css'

import Services from './Services'
import MyProjects from './MyProjects';
import {useTypewriter} from 'react-simple-typewriter'
import Navbar from './Navbar';
const Home = (props) => {
  
  const [trt]= useTypewriter({
   
    words : ['Front-End',
            'Back-End',
            'React-JS',
            'MERN',
            'JAVA',
            'C++' 
        ],
        loop: {},
       
        typeSpeed: 120,
        
       
  });

  return (
    <>
     <Navbar title='Zaid' mode={props.mode} togglemode={props.togglemode} />
      <div className={`intro bg-${props.mode.bodycolor}`}>

    
      <div className="image">
        
          <div className="pattern"></div>
          <div className="zaidimg" data-aos="fade-down"></div>
      </div>

      <div className="introtext">
        <h4> hello, I'm</h4>
        <p id='zaidname'>ZAID</p>

        <p>I am proficient in <span className='trt'>{trt}</span></p>
        <p></p>
        
        <div className="line"></div>
        <div className="abouttxt">
          <p className=''>Welcome to my portfolio website! I am a dedicated and aspiring BS Software Engineering student,
            passionate about crafting innovative solutions through code. Explore my journey and projects as I 
            strive to merge creativity with technology.</p>
          </div>
     
      </div>
  
    </div>
      <Services mode={props.mode}/>
      <MyProjects mode={props.mode}/>
    </>
  )
}

export default Home

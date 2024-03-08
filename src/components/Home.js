import React from 'react'

import './Home.css'

import Services from './Services'
import MyProjects from './MyProjects';
import { useTypewriter } from 'react-simple-typewriter'
import Navbar from './Navbar';
import Certifications from './Certifications';

const Home = (props) => {

  const [trt] = useTypewriter({

    words: [
      'Web dev',
      'Designing',
      'MERN Stack', 
      'MEAN Stack',
      'Cloud',
      'JavaScript',
      'Java',
      'Java FX',
      'DevOps',
      'C++',
      'Testing'
    ],
    loop: {},

    typeSpeed: 120,


  });

  return (
    <>
      <Navbar title='Zaid' mode={props.mode} togglemode={props.togglemode} />
      <div className={`intro bg-${props.mode.bodycolor}`}>


        <div className="image" style={{ backgroundColor: props.mode.bodycolor }}>
          <div className="zaidimg"  style={{ backgroundColor: props.mode.bodycolor }} data-aos="fade-down"></div>
        </div>

        <div className="introtext">
          <p id='hello'> hello, I'm</p>
          <p id='zaidname'>ZAID</p>

          <p id='dynamictext'>I am skilled in &nbsp;
            <br></br>
            <span className='trt'>{trt} </span>
          </p>


          <div className="line"></div>
          <div className="abouttxt">
            <p className=''>Welcome to my digital oasis! 🌟
              I'm Muhammad Zaid, a budding Software Engineer
              pursuing my bachelor's degree at FAST NUCES Islamabad,
              in the final year of my journey 🎓.
              I am a passionate software engineer, dedicated to innovation,
              and driven by the pursuit of excellence.</p>
          </div>

        </div>

      </div>
      <Services mode={props.mode} />
      <MyProjects mode={props.mode} />
      <Certifications mode={props.mode}/>

    </>
  )
}

export default Home

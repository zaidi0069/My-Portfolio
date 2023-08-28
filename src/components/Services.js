import React from 'react'
import web from '../Images/webdev.avif'
import java from '../Images/java.jpeg'
import desg from '../Images/desg.avif'
import './Services.css'
const Services = (props) => {
  return (
  
    <div className={`main bg-${props.mode.bodycolor}`}>

 
        <p className='welcome' data-aos="fade-up">How Can I help You?</p>
            
        <div className="services"  >
             
            <div className="card c1 " data-aos='fade-top' data-aos-duration="400"  data-aos-delay="500"  style={{width: 20 +'rem'}}>
            <img className="card-img-top im" src={web} style={{height: '11rem'}} alt="Web Development"/>
            <div className={`card-body bg-${props.mode.bodycolor} `}>
            <h2>Web Development</h2>
                <p className={`card-text text-${props.mode.inverse}`}>
                        I have the proficiency to develop responsive and cross-platform websites using
                        React-JS and Node.js, developing dynamic web applications.
                </p>
            </div>
            </div>

            <div className="card c2" data-aos='fade-top' data-aos-duration="400"  data-aos-delay="700"  style={{width: 20 +'rem'}}>
            <img className="card-img-top im" src={java} alt="Java Programming"/>
            <div className={`card-body bg-${props.mode.bodycolor} `}>
            <h2>Java Programming</h2>
                <p className={`card-text text-${props.mode.inverse}`}>I'm proficient in developing versatile, cross-platform web applications using Java, harnessing the power of Object-Oriented Programming (OOP). </p>
            </div>
            </div>

            <div className="card c3" data-aos='fade-top' data-aos-duration="400"  data-aos-delay="900"  style={{width: 20 +'rem'}}>
            <img className="card-img-top im" src={desg} alt="Designinng"/>
            <div className={`card-body bg-${props.mode.bodycolor} `}>
            <h2>Designing</h2>
                <p className={`card-text text-${props.mode.inverse}`}>I can create attractive and easy-to-use designs that consider both how things look (UI) and how they work for users (UX).</p>
            </div>
            </div>
              
        </div> 

        </div>
    


  )
}

export default Services

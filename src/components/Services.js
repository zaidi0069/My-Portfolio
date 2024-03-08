import React from 'react'
import web from '../Images/webdev.avif'
import java from '../Images/java.jpeg'
import desg from '../Images/desg.avif'
import devops from '../Images/devops.png'
import testing from '../Images/testing.png'
import cloud from '../Images/cloud.webp'
import { useState , useEffect} from 'react'
import './Services.css'

const Services = (props) => {

  const [aosDelays, setAosDelays] = useState([500, 700, 900, 500, 700, 900]); // Default delay values for desktop

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let updatedDelays;

      console.log('triggered')

      if (screenWidth < '600') {
        // Mobile
        updatedDelays = [500, 700, 500, 700, 500, 700]; // Customize delay values for mobile
      } 

      else{
        updatedDelays =[500, 700, 900, 500, 700, 900];
      }

      setAosDelays(updatedDelays);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

      // Call handleResize initially
      handleResize();

    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

    <div className={`main bg-${props.mode.bodycolor}`}>


      <p className='welcome' data-aos="fade-up" data-aos-delay="500" >My Skills</p>

      <div className="services"  >

        <div className="card c1" data-aos='fade-top' data-aos-duration="400" data-aos-delay={aosDelays[0]} >

          <img className="card-img-top im" src={web} style={{ height: '10rem' }} alt="Web Development" />
          <div className={`card-body bg-${props.mode.bodycolor} `} >
            <p id='title'>Web Development</p>
            <p className={`card-text text-${props.mode.inverse}`} style={{ fontSize: '0.8rem' }}>
              I have the proficiency to develop responsive websites using
              React-JS , Angular JS and Node.js _ MEAN/MERN.
            </p>
          </div>
        </div>

        <div className="card c2" data-aos='fade-top' data-aos-duration="400" data-aos-delay={aosDelays[1]} >
          <img className="card-img-top im" src={java} style={{ height: '10rem' }} alt="Java" />
          <div className={`card-body bg-${props.mode.bodycolor} `} >
            <p id='title'>Java</p>
            <p className={`card-text text-${props.mode.inverse}`} style={{ fontSize: '0.8rem' }}>
            I have good understanding and hands on experience on creating Java applications with JavaFX as the GUI.
            </p>
          </div>
        </div>


        <div className="card c3" data-aos='fade-top' data-aos-duration="400" data-aos-delay={aosDelays[2]} >
          <img className="card-img-top im" src={desg} style={{height:'10rem'}} alt="Designing" />
          <div className={`card-body bg-${props.mode.bodycolor} `} >
            <p id='title'>Designing</p>
            <p className={`card-text text-${props.mode.inverse}`} style={{ fontSize: '0.8rem' }}>
            I can create user friendly designs that consider both how things look (UI) and how they work for users (UX).
            </p>
          </div>
        </div>
        
        

         <div className="card c4 " data-aos='fade-top' data-aos-duration="400" data-aos-delay={aosDelays[3]} >
          <img className="card-img-top im" src={cloud} style={{ height: '10rem' }} alt="Cloud" />
          <div className={`card-body bg-${props.mode.bodycolor} `}  >
            <p id='title'>Cloud</p>
            <p className={`card-text text-${props.mode.inverse}`} style={{ fontSize: '0.8rem' }}>
            I have experience of working in Cloud especially Amazon AWS. I have used their multiple services and deployed apps.
            </p>
          </div>
        </div>


        <div className="card c5 " data-aos='fade-top' data-aos-duration="400" data-aos-delay={aosDelays[4]} >
          <img className="card-img-top im" src={testing} style={{ height: '10rem' }} alt="testing" />
          <div className={`card-body bg-${props.mode.bodycolor} `}  >
            <p id='title'>Testing</p>
            <p className={`card-text text-${props.mode.inverse}`} style={{ fontSize: '0.8rem' }}>
            I have experience of static and dynamic code testing. Familiarity with some testing tools like Google test cases , Junit Java testing, Jmeter - Website performance testing etc.
            </p>
          </div>
        </div>


        <div className="card c6 " data-aos='fade-top' data-aos-duration="400" data-aos-delay={aosDelays[5]} >
          <img className="card-img-top im" src={devops} style={{ height: '10rem' }} alt="devops" />
          <div className={`card-body bg-${props.mode.bodycolor} `}  >
            <p id='title'>DevOps</p>
            <p className={`card-text text-${props.mode.inverse}`} style={{ fontSize: '0.8rem' }}>
            I have experience implementing and managing CI/CD pipelines , deploying and optimizing workflows. I have hands-on the tools like GitHub Actions and Jenkins.
            </p>
          </div>
        </div>
       

      </div>

    </div>



  )
}

export default Services

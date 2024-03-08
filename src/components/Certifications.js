import React from 'react'
import awscert from '../Images/awscert.png'
import uxcert from '../Images/uxcert.png'
import uxfoundcert from '../Images/uxfoundcert.png'
import mobdevcert from '../Images/mobdevcert.png'

import './Certifications.css'


const Certifications = (props) => {

    return (

        <div className='certmain'>

            <p className='heading' data-aos="fade-up">My Certificates</p>

            <div className={`certifications bg-${props.mode.bodycolor}`}>

                <div className="cert1">

                    <div className="imagecontainer" data-aos='fade-top' data-aos-duration="300" data-aos-delay="300" >
                        <img className='certimage' src={awscert}></img>
                    </div>

                    <div className="con1" >
                        <h3>AWS Academy Cloud Foundations Certificate</h3>
                        <p>
                            This certificate was awarded to me after
                            successful completion of the AWS Academy Cloud Foundations course,
                            equipping me with essential skills in cloud computing.
                        </p>
                        <a href='https://www.credly.com/badges/493292ec-9726-4a1a-9cf6-645d09d5566e/linked_in?t=s61gpk'>Certificate link</a>
                    </div>

                </div>


                <div className="cert2">

                    <div className="imagecontainer" data-aos='fade-top'  data-aos-duration="400" data-aos-delay="400" >
                        <img className='certimage' src={uxfoundcert}></img>
                    </div>

                    <div className="con2" >
                        <h3>Start the UX Design Process Certificate</h3>
                        <p>
                            This certificate was awarded to me by Google. In this course I learned basics of UX,
                            foundational concepts in UX design, such as user-centered design.
                        </p>
                        <a href='https://coursera.org/share/1c670ed5bfa3624e9934fc4e5deaf230'>Certificate link</a>
                    </div>

                </div>


                <div className="cert3" >

                    <div className="imagecontainer" data-aos='fade-top' data-aos-duration="300" data-aos-delay="300" >
                        <img className='certimage' src={uxcert}></img>
                    </div>

                    <div className="con3" >
                        <h3>Foundations of User Experience Design Certificate</h3>
                        <p>
                            This certificate was awarded to me by Google for completing UX course.
                            It helped me understanding foundational concepts in UX design, such as user-centered design,
                            the design process, accessibility, and equity-focused design.
                        </p>
                        <a href='https://coursera.org/share/2807d7f4d5dc6d407066c0543c2b6dd4'>Certificate link</a>
                    </div>

                    
                </div>


                <div className="cert4" >

                    <div className="imagecontainer" data-aos='fade-top' data-aos-duration="300" data-aos-delay="400" >
                        <img className='certimage' src={mobdevcert}></img>
                    </div>
                    <div className="con4" >
                        <h3>Introduction to Mobile Development</h3>
                        <p>
                            This certificate was awarded to me by Meta for completing Introduction to Mobile development course.
                            Through this course I learnt about cross-platform mobile development and basics of React Native and React.
                        </p>
                        <a href='https://coursera.org/share/1c71ee31b58216bd4c0f71d50c9bc5ad'>Certificate link</a>
                    </div>

                   
                </div>

            </div>
        </div>
    )
}

export default Certifications
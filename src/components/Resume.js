import React from 'react'
import './Resume.css'
import resume from './MuhammadZaidResume.pdf'


const Resume = () => {
 
  return (
              <>
            
                <div className='resume'>
                  <iframe id='res' src={resume} frameborder="0"></iframe>

                </div>
                  
         </>
    
   
  )
}

export default Resume

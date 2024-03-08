import React from 'react'
import './Resume.css'
import resume from './Muhammad_Zaid_Resume.pdf'


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

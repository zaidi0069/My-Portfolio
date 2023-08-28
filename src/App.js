
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import Resume from './components/Resume';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {



  const [mode,  setmode ]=useState({type:'light', inverse:'dark' , bodycolor:'null'})

  let togglemode = ()=>{

        if(mode.type==='light')
        {
          setmode({
            type:'dark',
            bodycolor:'dark bg-gradient',
            inverse:'light'
          })

        
          document.body.style.color="white"
      
        }
        
        else if(mode.type==="dark")
        {
          setmode({
            type:'light',
            bodycolor:'null',
            inverse:'dark'

          })
         
          document.body.style.color="black"
  
        }

  }


  return (
    <>
       
       <BrowserRouter>
          <Routes>
             
              <Route path="/" element={<Home mode={mode} togglemode={togglemode} />}/>
              <Route path="/resume"  element= {<Resume/>} />
          </Routes>
         
        </BrowserRouter>
      
        
        <Footer/>
        
    </>
  );
}

export default App;

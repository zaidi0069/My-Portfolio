import React from 'react'
import './ImageSlider.css'
const ImageSlider = (props) => {
    
   
  return (
    <div id="carouselExampleInterval" className="carousel slide crsl" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2500">
        <img src={props.one} className=" img d-block " alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="2500">
        <img src={props.two} className="img d-block  " alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="2500">
        <img src={props.three} className="img d-block  " alt="..."/>
      </div>
      
     
    </div>
    
    <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
      <span className="visually-hidden" >Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default ImageSlider

import React from 'react'
import './ImageSlider.css'
import { Splide, SplideSlide} from '@splidejs/react-splide';

const ImageSlider = (props) => {

  Splide.defaults = {
    type   : 'loop',
    perPage: 2,
  }


  
  return (

    
    <div className='crsl'>
      <Splide aria-label="project images" >
        <SplideSlide splide__toggle__play >
          <img className="d-block img" style= {{height: '250px', width:'100%'}} src={props.one} alt="slide 1" />
        </SplideSlide>
        <SplideSlide splide__toggle__play>
          <img className="d-block img" style= {{height: '250px', width:'100%'}} src={props.two} alt="slide 2"/>
        </SplideSlide>
        <SplideSlide splide__toggle__play>
          <img className="d-block img" style= {{height: '250px', width:'100%'}} src={props.three} alt="slide 3"/>
        </SplideSlide>
      </Splide>
    </div>
  )
}

export default ImageSlider;

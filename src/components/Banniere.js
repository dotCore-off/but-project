import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { createSlides } from "@splidejs/react-splide/dist/js/utils/slides";

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import image1 from '../media/banniere/entree.jpg';
import image2 from '../media/banniere/cablage.jpg';
import image3 from '../media/banniere/signal.jpg';
import image4 from '../media/banniere/ubuntu.png';

const Banniere = () => {
    return (
      <div className="slide">
          <Splide
				    options={ {
					  type         : 'loop',
					  gap          : '1rem',
					  autoplay     : true,
					  pauseOnHover : false,
					  resetProgress: false,
            arrows       : 'slider',
            speed        : '2000',
            interval     : '25000'
          } }
        hasSliderWrapper
			  //	hasAutoplayControls
				hasAutoplayProgress
			  >
     
        <SplideSlide>
          <img src={image1} alt="Image 1" className="imgbanniere"/>
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Image 2" className="imgbanniere"/>
        </SplideSlide>
        <SplideSlide>
          <img src={image3} alt="Image 3" className="imgbanniere"/>
        </SplideSlide>
        <SplideSlide>
          <img src={image4} alt="Image 4" className="imgbanniere"/>
        </SplideSlide>
      </Splide>
    
      </div>
    
    );
};

export default Banniere;

import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";

//Pictures

import image1 from "../../../media/banniere/entree.jpg";
import image2 from "../../../media/banniere/cablage.jpg";
import image3 from "../../../media/banniere/signal.jpg";
import image4 from "../../../media/banniere/ubuntu.png";


const Carousel = () => {
  return (
    <div className="slide">
      <Splide
        options={{
          type: "loop",
          autoHeight: true,
          width: "100%",
          padding: "0px",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: true,
          speed: "2000",
          interval: "5500",
          perPage: 1,
          keyboard: true,
          drag:true,
          pagination: false,
          arrows: false,
        }}
        hasSliderWrapper
        // hasAutoplayControls
        // hasAutoplayProgress
      >
        <SplideSlide>
          <img src={image1} alt="IUT" className="imgbanniere" />
        </SplideSlide>
        <SplideSlide>
          <img src={image2} alt="Baie de brassage" className="imgbanniere" />
        </SplideSlide>
        <SplideSlide>
          <img src={image3} alt="Osciloscope" className="imgbanniere" />
        </SplideSlide>
        <SplideSlide>
          <img src={image4} alt="Ubuntu" className="imgbanniere" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
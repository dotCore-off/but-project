import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// import { createSlides } from "@splidejs/react-splide/dist/js/utils/slides";

import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

import image1 from "../../../media/banniere/entree.jpg";
import image2 from "../../../media/banniere/cablage.jpg";
import image3 from "../../../media/banniere/signal.jpg";
import image4 from "../../../media/banniere/ubuntu.png";

const Banniere = () => {
  return (
    <div className="background">
      <div className="slide">
        <Splide
          options={{
            type: "loop",
            autoHeight: true,
            width: 800,
            gap: "10px",
            autoplay: true,
            pauseOnHover: false,
            resetProgress: true,
            arrows: false,
            speed: "2000",
            interval: "5500",
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
    </div>
  );
};

export default Banniere;

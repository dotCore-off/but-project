import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    '../media/banniere/entree.jpg',
    '../media/banniere/cablage.jpg',
    '../media/banniere/signal.jpg',
    '../media/banniere/ubuntu.png'
  ];

const Banniere = () => {
    return (

        <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>Slide 4</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Banniere;
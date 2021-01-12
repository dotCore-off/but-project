import React from "react";

const Temoignages = () => {
  return (
    <div className="temoignages">
      <h2>Les anciens témoignent !</h2>
      <div className="video">
        <div className="video2017">
          <iframe
            className="videoTemoignage"
            title="videotemoignage1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OAW1L-UTC9E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <span>Témoignages 2017</span>
        </div>
        <div className="video2019">
          <iframe
            title="videotemoignage2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hkbr0lKJKzI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="videoTemoignage"
          ></iframe>
          <span>Témoignages 2019</span>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;

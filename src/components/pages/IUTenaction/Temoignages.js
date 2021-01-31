import React from "react";

const Temoignages = () => {
  return (
    <div className="temoignages">
      <h1>Les anciens témoignent !</h1>
      <div className="video">
        <div className="video2017">
          <iframe
            title="videotemoignage1"
            width="1020"
            height="630"
            src="https://www.youtube.com/embed/OAW1L-UTC9E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Témoignages 2017</h2>
        </div>
        <div className="video2019">
          <iframe
            title="videotemoignage2"
            width="1020"
            height="630"
            src="https://www.youtube.com/embed/Hkbr0lKJKzI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Témoignages 2019</h2>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;

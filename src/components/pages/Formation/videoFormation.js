const videoFormation = () => {
  return (
    <div className="BackgroundvideoFormation">
      <div className="videoFormationContent">
        <section className="section1">
          <article className="article">
            <h1>LE PROGRAMME EN VIDEO</h1>
            <p className="firstp">
              Le Bachelor Universitaire de Technologie se déroulant en 3 ans, vous verrez de nombreuses choses
              durant votre B.U.T. Que ce soit dans le domaine des réseaux ou des
              télécommunications, vous apprendrez de nombreuses choses.
            </p>
            <p>
              Dans cette vidéo, le chef de département monsieur BONNARDOT
              Frédéric, vous présente le programme qui vous attend durant votre B.U.T.
              RT à Roanne.
            </p>
          </article>
        </section>
        <section className="section2">
          <div id="videoPresentationBUT">
            <iframe
              alt="BUT_video_presentation"
              title="videoPresentation"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bZRNvouAA6c"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default videoFormation;

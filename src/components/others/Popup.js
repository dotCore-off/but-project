import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function newsletter() {
  alert("Merci pour votre inscription !");
}

const popup = () => (
  <div className="divPopup">
    <div className="divNewsletter">
      <Popup
        trigger={
          <button className="buttonNewsletter">
            {" "}
            <i class="far fa-envelope"></i>{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              {" "}
              Inscrivez-vous à notre Newsletter pour recevoir des infos de l'IUT{" "}
            </div>
            <div className="content">
              <form method="post">
                <div>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Votre mail"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  ></input>
                  <br />
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    value="checkbox"
                    required
                  ></input>
                  <label for="check">
                    {" "}
                    J’accepte de recevoir des informations de la part de l’IUT
                    de Roanne
                  </label>
                  <br />
                  <br />
                  <input
                    type="submit"
                    value="S'inscrire"
                    name=""
                    formAction={newsletter}
                  ></input>
                </div>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
    <div className="divContact">
      <Popup
        trigger={
          <button className="buttonContact">
            {" "}
            <i class="far fa-question-circle"></i>{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Contactez-nous ! </div>
            <div className="content">
              {" "}
              Remplissez ce formulaire si vous souhaitez nous poser une question
              ou nous contacter.
              <br />
              <div className="content">
                <form method="post">
                  <div>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="nameHepl"
                      placeholder="Votre nom"
                      name="name"
                      pattern="[A-Za-z]{3,}"
                      title="Au moins 3 caractères"
                      required
                    ></input>
                    <br />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Votre Prénom"
                      id="prenom"
                      pattern="[A-Za-z]{3,}"
                      title="Au moins 3 caractères"
                      required
                    ></input>
                    <br />
                    <br />
                    <textarea
                      class="form-control"
                      placeholder="Votre message"
                      id="message"
                      rows="3"
                      pattern=".{7,}"
                      title="Au moins 7 caractères"
                      required
                    ></textarea>
                    <br />
                    <br />
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Votre mail"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    ></input>
                    <br />
                    <input
                      type="checkbox"
                      id="check"
                      name="check"
                      value="checkbox"
                      required
                    ></input>
                    <label for="check">
                      {" "}
                      J’accepte d’être recontacté ultérieurement par l’IUT de
                      Roanne
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Envoyer" name=""></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  </div>
);

export default popup;

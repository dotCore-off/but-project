import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletterWrapper">
      <div className="newletterBox">
        <h2>Inscrivez vous à notre Newsletter !</h2>
        <p>
          Inscrivez-vous à notre Newsletter pour recevoir des infos de l'IUT
        </p>
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
            <input type="submit" value="S'inscrire" name=""></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

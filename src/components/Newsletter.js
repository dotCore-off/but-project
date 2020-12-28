import React from 'react';

const Newsletter = () => {
    return(
        <div className="newsletterWrapper">
            <div className="newletterBox">
                <h2>Inscrivez vous à notre Newsletter !</h2>
                <p>Inscrivez-vous à notre Newsletter pour recevoir des infos de l'IUT</p>
                <form>
                    <div>
                        <input type="text" value="Votre Mail" name=""></input>
                        <input type="submit" value="S'inscrire" name=""></input>
                    </div>
                </form>

            </div>
            
        </div>
    );
};

export default Newsletter;
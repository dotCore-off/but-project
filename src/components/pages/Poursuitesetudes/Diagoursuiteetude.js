import React, { useEffect } from 'react';
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

export default function Diagoursuiteetude() {
    useEffect(() => {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["3 Annnées d'études supplémentaires", "Insertion immédiate", "Une année d'étude supplémentaire", "Autres parcours","Deux annéees d'études supplémentaire"],
          datasets: [
            {
              label: "# of Votes",
              data: [53, 10, 18, 11, 8],
              backgroundColor: [
                "lightgreen",
                "#FFFAFB",
                "lightblue",
                "#668F80",
                "darkwhite"
              ],
              borderColor: ["lightgreen", "#FFFAFB", "lightblue", "#668F80","darkwhite"],
              borderWidth: 1
            }
          ]
        }
      });
    });
    
    return (
      <div className="diagpoursuiteetude">
        <div className="diagrammeContent">
          <h2 alt="https://www.iut.fr/publications/le-devenir-des-etudiants.html">Pourcentages des différentes poursuites d'études des étudiants après un DUT Réseaux et Télécommunications</h2>
          <div className="diagramme">
            <canvas id="myChart" width="400" height="400" />
          </div>
        </div>
      </div>
    );
}

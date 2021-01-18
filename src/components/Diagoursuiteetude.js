import React, { useEffect } from 'react';
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

export default function Diagoursuiteetude() {
    useEffect(() => {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["lightblue", "Yellow", "lightgreen", "lightpurple"],
          datasets: [
            {
              label: "# of Votes",
              data: [19, 3, 5, 2],
              backgroundColor: [
                "lightblue",
                "Yellow",
                "lightgreen",
                "lightpurple",
                "white",
              ],
              borderColor: ["lightblue", "Yellow", "lightgreen", "lightpurple"],
              borderWidth: 1
            }
          ]
        }
      });
    });
    return (
      <div className="diagpoursuiteetude">
        <h2>Pourcentages des différentes poursuites d'études des étudiants avant l'arrivé du BUT</h2>
        <div className="diagramme">
          <canvas id="myChart" width="400" height="400" />
        </div>
      </div>
    );
}

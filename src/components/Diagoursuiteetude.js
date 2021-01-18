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
              ],
              borderColor: ["lightblue", "Yellow", "lightgreen", "lightpurple"],
              borderWidth: 1
            }
          ]
        }
      });
    });
    return (
      <div className="App">
        <canvas id="myChart" width="400" height="400" />
      </div>
    );
}

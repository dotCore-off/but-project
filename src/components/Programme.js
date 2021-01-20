import React from "react";
import Tabs from "react-responsive-tabs";
import BUT1 from "./BUT1";
import BUT2 from "./BUT2";
import BUT3 from './BUT3';
import ROM from "./ROM";
// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";


const année = [
  { name: "B.U.T - 1ère année", contenu: <BUT1 /> },
  { name: "B.U.T - 2ème année", contenu: <BUT2 /> },
  { name: "B.U.T - 3ème année", contenu: <BUT3 /> },
  { name: "Spécialité - CYBER", contenu: "Wow, j'avais tah la flemme de le faire hier soir. Mais vasy, ça arrive. (Alexou 😘)" },
  { name: "Spécialité - ROM", contenu: <ROM /> },
];

function getTabs() {
  return année.map((année) => ({
    //key: index, // Optional. Equals to tab index if this property is omitted
    tabClassName: "tab", // Optional
    panelClassName: "panel", // Optional
    title: année.name,
    getContent: () => année.contenu,
  }));
}

const Programme = () => {
  return (
    <div className="divProgramme">
      <h2>Le programme du B.U.T</h2>
      <Tabs items={getTabs()}/>
    </div>
  );
};
export default Programme;

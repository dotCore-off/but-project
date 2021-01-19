import React from "react";
import Tabs from "react-responsive-tabs";
import BUT1 from "./BUT1";
import BUT2 from "./BUT2";
import BUT3 from './BUT3';

// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";

const année = [
  { name: "BUT 1", contenu: <BUT1 /> },
  { name: "BUT 2", contenu: <BUT2 /> },
  { name: "BUT 3", contenu: <BUT3 /> },
  { name: "CYBER", contenu: "..." },
  { name: "ROM", contenu: "..." },
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
      <h2>Au programme !</h2>
      <Tabs items={getTabs()}/>
    </div>
  );
};
export default Programme;

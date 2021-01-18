import React, { Component } from "react";
import { render } from "react-dom";
import Tabs from "react-responsive-tabs";

// IMPORTANT you need to include the default styles
import "react-responsive-tabs/styles.css";

const année = [
  { name: "BUT 1", contenu: "..." },
  { name: "BUT 2", contenu: "..." },
  { name: "BUT 3", contenu: "..." },
  { name: "CYBER", contenu: "..." },
  { name: "ROM", contenu: "..." },
];

function getTabs() {
  return année.map((année) => ({
    //key: index, // Optional. Equals to tab index if this property is omitted
    tabClassName: "tab", // Optional
    panelClassName: "panel", // Optional
    title: année.name,
    getContent: () => année.biography,
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

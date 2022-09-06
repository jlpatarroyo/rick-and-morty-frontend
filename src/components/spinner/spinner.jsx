import React from "react";
import "./spinner.scss";

export default function Spinner({ color = "#5eef46" }) {
  return (
    <div className="Spinner">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

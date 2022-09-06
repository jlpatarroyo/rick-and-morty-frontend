import React from "react";
import "./overlayLoader.scss";

// External components
import Spinner from "../spinner/spinner";

export default function OverlayLoader() {
  return (
    <div className="OverlayLoader">
      <div className="overlay">
        <Spinner></Spinner>
      </div>
    </div>
  );
}

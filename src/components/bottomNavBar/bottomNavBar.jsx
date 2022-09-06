import React from "react";
import "./bottomNavBar.scss";

import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentRoute = (path) => location.pathname.includes(path);

  const onRoute = (path) => {
    if (!isCurrentRoute(path)) {
      navigate(path);
    }
  };

  return (
    <div className="BottomNavBar">
      <div
        className={`bottom-nav-bar-route ${
          isCurrentRoute("/characters") ? "current" : ""
        }`}
        onClick={() => onRoute("/characters")}
      >
        <div className="route-icon">
          <ion-icon
            name="people-circle-outline"
            style={routeIconStyle}
          ></ion-icon>
        </div>
        Characters
      </div>
      <div
        className={`bottom-nav-bar-route ${
          isCurrentRoute("/episodes") ? "current" : ""
        }`}
        onClick={() => onRoute("/episodes")}
      >
        <div className="route-icon">
          <ion-icon name="videocam-outline" style={routeIconStyle}></ion-icon>
        </div>
        Episodes
      </div>
    </div>
  );
}

const routeIconStyle = {
  maxWidth: 18,
  minWidth: 18,
  maxHeight: 18,
  minHeight: 18,
};

import React from "react";
import "./header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Auth
import { auth, logout } from "../../api/authService";

// Assets
import RickAndMortyLogo from "../../assets/Rick-and-Morty.png";

// Store
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../../store/types";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const isMobileDevice = useSelector((store) => store.isMobileDevice);

  const isCurrentRoute = (path) => location.pathname.includes(path);

  const onRoute = (path) => {
    if (!isCurrentRoute(path)) {
      navigate(path);
    }
  };

  const onLogout = () => {
    logout();
    dispatch({ type: LOGOUT_USER });
  };

  return (
    <div className="Header">
      <div className="header-content">
        <img src={RickAndMortyLogo} className="header-logo" alt="" />
        {!isMobileDevice && (
          <div
            className={`header-route-link ${
              isCurrentRoute("/characters") ? "current" : ""
            }`}
            onClick={() => onRoute("/characters")}
          >
            Characters
          </div>
        )}
        {!isMobileDevice && (
          <div
            className={`header-route-link ${
              isCurrentRoute("/episodes") ? "current" : ""
            }`}
            onClick={() => onRoute("/episodes")}
          >
            Episodes
          </div>
        )}
        {user && (
          <div className="logout-button-container">
            <button
              type="button"
              className="logout-button"
              onClick={() => onLogout()}
            >
              Logout
              <ion-icon
                name="log-out-outline"
                style={logoutButtonStyle}
              ></ion-icon>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const logoutButtonStyle = {
  height: "18px",
  width: "18px",
};

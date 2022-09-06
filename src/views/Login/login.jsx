import React, { useEffect, useState } from "react";
import "./login.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

// Store
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../../store/types";

// API
import { login, auth } from "../../api/authService";

// Assets
import RickAndMortyLogo from "../../assets/Rick-and-Morty.png";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      dispatch({ type: LOGIN_USER });
      navigate("/characters");
    }
  }, [user, loading, navigate, dispatch]);

  return (
    <div className="Login">
      <div className="login-card">
        <img src={RickAndMortyLogo} className="login-logo" alt="" />
        <div className="login-form-container">
          <div className="login-form-field">
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
            />
          </div>
          <div className="login-form-field">
            <label htmlFor="">Password</label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </div>
          <div className="login-card-footer">
            <button
              type="button"
              className="login-button"
              onClick={() => login(loginForm)}
            >
              {loading ? "Loading..." : "Go"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

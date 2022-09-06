import React, { useEffect } from "react";
import "./mainLayout.scss";

// Store
import { useSelector, useDispatch } from "react-redux";
import { IS_MOBILE_DEVICE } from "../store/types";

// External components
import Header from "../components/header/header";
import OverlayLoader from "../components/overlayLoader/overlayLoader";
import BottomNavBar from "../components/bottomNavBar/bottomNavBar";

export default function MainLayout({ children }) {
  const isMainSpinner = useSelector((store) => store.isMainSpinner);
  const isMobileDevice = useSelector((store) => store.isMobileDevice);
  const dispatch = useDispatch();

  useEffect(() => {
    const setWindowWidthListener = () => {
      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      dispatch({ type: IS_MOBILE_DEVICE, value: window.innerWidth <= 768 });
    };

    onWindowResize();
    setWindowWidthListener();
    return () => window.removeEventListener("resize", onWindowResize);
  }, [dispatch]);

  return (
    <div
      id="MainLayout"
      className={`MainLayout ${isMainSpinner ? "lock" : ""}`}
    >
      {isMainSpinner && <OverlayLoader></OverlayLoader>}
      <Header></Header>
      <div className="views-container">{children}</div>
      {isMobileDevice && <BottomNavBar></BottomNavBar>}
    </div>
  );
}

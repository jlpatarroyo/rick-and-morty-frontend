import React from "react";
import "./modalBase.scss";

export default function ModalBase({
  size,
  title,
  isActive,
  children,
  onClose,
}) {
  return isActive ? (
    <div className="modal-overlay">
      <div
        className={`modal ${size ? size : "small"} ${isActive ? "active" : ""}`}
      >
        <div className="modal-header">
          {title && <h3>{title}</h3>}
          <span className="close-button">
            <ion-icon
              name="close-outline"
              onClick={onClose}
              style={{ height: 20, width: 20 }}
            ></ion-icon>
          </span>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer"></div>
      </div>
    </div>
  ) : (
    <></>
  );
}

import React from "react";
import "./characterStatusBadge.scss";

export default function CharacterStatusBadge({ status }) {
  return (
    <div className={`CharacterStatusBadge ${status}`}>
      <div className={`status-badge-dot ${status}`}></div>
      <div className="status-badge-status">{status}</div>
    </div>
  );
}

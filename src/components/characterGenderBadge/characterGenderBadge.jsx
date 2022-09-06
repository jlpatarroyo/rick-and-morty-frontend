import React from "react";
import "./characterGenderBadge.scss";

export default function CharacterGenderBadge({ gender }) {
  const genderIcon = () => {
    switch (gender) {
      case "Male":
        return <ion-icon name="male-outline"></ion-icon>;
      case "Female":
        return <ion-icon name="female-outline"></ion-icon>;
      case "Genderless":
        return <ion-icon name="color-filter-outline"></ion-icon>;
      case "unknown":
        return <ion-icon name="help-outline"></ion-icon>;
      default:
        return <ion-icon name="help-outline"></ion-icon>;
    }
  };
  return <div className={`CharacterGenderBadge ${gender}`}>{genderIcon()}</div>;
}

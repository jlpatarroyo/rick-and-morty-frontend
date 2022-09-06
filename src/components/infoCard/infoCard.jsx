import React from "react";
import PropTypes from "prop-types";
import "./infoCard.scss";

export default function InfoCard({ children, height, width, handleCardClick }) {
  const infoCardDimensions = {
    minHeight: height ? height : "",
    maxHeight: height ? height : "",
    minWidth: width ? width : "",
    maxWidth: width ? width : "",
  };
  return (
    <div
      className="InfoCard"
      style={infoCardDimensions}
      onClick={handleCardClick}
    >
      {children}
    </div>
  );
}

InfoCard.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

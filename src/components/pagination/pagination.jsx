import React from "react";
import "./pagination.scss";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  function changePage(quantity) {
    if (
      (quantity < 0 && currentPage > 1) ||
      (quantity > 0 && currentPage < totalPages)
    ) {
      onPageChange(quantity);
    }
  }
  return (
    <div className="Pagination">
      <button className="pagination-button" onClick={() => changePage(-1)}>
        <ion-icon
          name="chevron-back-outline"
          style={paginationButtonIconStyle}
        ></ion-icon>
      </button>
      <span>{currentPage}</span>
      <button className="pagination-button" onClick={() => changePage(1)}>
        <ion-icon
          name="chevron-forward-outline"
          style={paginationButtonIconStyle}
        ></ion-icon>
      </button>
    </div>
  );
}

const paginationButtonIconStyle = {
  height: "20px",
  width: "20px",
  color: "white",
};

import React from "react";
import "./characterFilters.scss";

export default function CharacterFilters({ filters, onChangeFilters }) {
  return (
    <div className="CharacterFilters">
      <div className="filters-fields">
        {/* name input */}
        <div className="filter-field">
          <h3>Search by character name</h3>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={onChangeFilters}
            placeholder="Name"
          />
        </div>
      </div>
    </div>
  );
}

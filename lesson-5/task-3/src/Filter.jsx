import React from "react";

const Filter = ({ filterText, count, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input
      className="filter__input"
      type="text"
      value={filterText}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Filter by name"
    />
  </div>
);

export default Filter;

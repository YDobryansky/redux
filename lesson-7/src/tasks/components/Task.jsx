import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Task = ({ id, text, done, onChange, onDelete }) => {
  const ListItemClasses = classNames("list-item", { "list-item_done": done });
  return (
    <li className={ListItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;

import React from "react";
import PropTypes from "prop-types";
import Task from "./Task.jsx";

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {

  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onDelete={handleTaskDelete}
          onChange={handleTaskStatusChange}
        />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleTaskStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default TasksList;

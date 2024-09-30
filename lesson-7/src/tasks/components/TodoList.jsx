import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreateTaskInput from "./CreateTaskInput..jsx";
import TasksList from "./TasksList.jsx";
import * as tasksActions from "../tasks.actions.js";
import { sortedTasksListSelector } from "../tasks.selectors.js";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);

import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../tasks.actions.js'
import { sortedTasksListSelector } from '../tasks.selectors.js'
import CreateTaskInput from './CreateTaskInput.jsx'
import TasksList from './TasksList.jsx'

const TodoList = ({
	tasks,
	getTasksList,
	updateTask,
	deleteTask,
	createTask,
}) => {
	useEffect(() => {
		getTasksList()
	}, [getTasksList])

	return (
		<>
			<h1 className='title'>Todo List</h1>
			<main className='todo-list'>
				<CreateTaskInput onCreate={createTask} />
				<TasksList
					tasks={tasks}
					handleTaskStatusChange={updateTask}
					handleTaskDelete={deleteTask}
				/>
			</main>
		</>
	)
}

TodoList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		})
	).isRequired,
	getTasksList: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired,
	deleteTask: PropTypes.func.isRequired,
	createTask: PropTypes.func.isRequired,
}

const mapDispatch = {
	getTasksList: tasksActions.getTasksList,
	updateTask: tasksActions.updateTask,
	deleteTask: tasksActions.deleteTask,
	createTask: tasksActions.createTask,
}

const mapState = state => ({
	tasks: sortedTasksListSelector(state),
})

export default connect(mapState, mapDispatch)(TodoList)

import { tasksListSelector } from './tasks.selectors'
import * as tasksGateway from './tasksGateway'

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED'

export const tasksListReceived = tasksList => ({
	type: TASKS_LIST_RECEIVED,
	payload: { tasksList },
})

export const getTasksList = () => async dispatch => {
	const tasksList = await tasksGateway.fetchTasksList()
	dispatch(tasksListReceived(tasksList))
}

export const updateTask = taskId => async (dispatch, getState) => {
	const state = getState()
	const tasksList = tasksListSelector(state)
	const task = tasksList.find(task => task.id === taskId)
	const updatedTask = { ...task, done: !task.done }

	await tasksGateway.updateTask(taskId, updatedTask)
	dispatch(getTasksList())
}

export const deleteTask = taskId => async dispatch => {
	await tasksGateway.deleteTask(taskId)
	dispatch(getTasksList())
}

export const createTask = text => async dispatch => {
	const taskData = {
		text,
		done: false,
		createdAt: new Date().toISOString(),
	}

	await tasksGateway.createTask(taskData)
	dispatch(getTasksList())
}

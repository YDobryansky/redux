const serverUrl = 'https://66c1e3e6f83fffcb587a863b.mockapi.io/api/v1/tasks'

const checkResponse = response => {
	if (!response.ok) {
		throw new Error('Failed to perform the request')
	}
	return response.json()
}

export const fetchTasksList = () => fetch(serverUrl).then(checkResponse)

export const createTask = taskData =>
	fetch(serverUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	}).then(checkResponse)

export const updateTask = (taskId, taskData) =>
	fetch(`${serverUrl}/${taskId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(taskData),
	}).then(checkResponse)

export const deleteTask = taskId =>
	fetch(`${serverUrl}/${taskId}`, {
		method: 'DELETE',
	}).then(checkResponse)

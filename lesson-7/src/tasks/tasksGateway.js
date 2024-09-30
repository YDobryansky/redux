const serverUrl = "https://6666ad4da2f8516ff7a45a72.mockapi.io/api/v1/tasks";

export const fetchTasksList = () => {
  return fetch(serverUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const createTask = (taskData) => {
  return fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${serverUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${serverUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};

const API_HOST = "http://localhost:3001";

export const createTaskRequest = async (task, addNotification) => {
  try {
    const response = await fetch(`${API_HOST}/task`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: task.title,
        description: task.description,
      }),
    });
    const newTask = await response.json();
    if (response.ok) {
      addNotification("Your task was successfuly added!", "success");
    }
    // throw "Something qent wrong!";
    return newTask;
  } catch (error) {
    addNotification(error, "error");
  }
};

export const getTaskRequest = async (setTasks) => {
  const response = await fetch(`${API_HOST}/task`);
  const tasks = await response.json();
  setTasks(tasks);

};

export const deleteTaskRequest = async (array) => {
  console.log(array, "array");
  const response = await fetch(`${API_HOST}/task`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ tasks: array }),
  });
  console.log(response);
};

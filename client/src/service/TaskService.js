const BACKEND = import.meta.env.VITE_BACKEND;

function prepareTaskObject(task) {
  return JSON.stringify({
    taskType: task.taskType,
    name: task.name,
    deadline: task.deadline,
    estimatedDays: task.estimatedDays,
    estimatedHours: task.estimatedHours,
    estimatedMin: task.estimatedMin,
  });
}

export const postTask = async (task) => {
  try {
    await fetch(`${BACKEND}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: prepareTaskObject(task),
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteTask = async (id) => {
  try {
    await fetch(`${BACKEND}/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskStatus = async (id) => {
  try {
    await fetch(`${BACKEND}/${id}`, {
      method: "PATCH",
    });
  } catch (e) {
    console.log(e);
  }
};

export const sortTasksAscending = (tasks) => {
  console.log("service");
  console.log(tasks);
  return [...tasks]?.sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );
};

export const sortTasksDescending = (tasks) => {
  return [...tasks]
    ?.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .reverse();
};

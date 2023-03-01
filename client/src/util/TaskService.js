const BACKEND = import.meta.env.VITE_BACKEND + "task";

export const postTask = async (task) => {
  try {
    const response = await fetch(`${BACKEND}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskType: task.taskType,
        name: task.name,
        deadline: task.deadline,
        estimatedDays: task.estimatedDays,
        estimatedHours: task.estimatedHours,
        estimatedMin: task.estimatedMin,
      }),
    });
    const data = await response.json();
    console.log("post task response: " + data);
    return data;
  } catch (e) {
    console.log(e);
    //TODO de schimbat acest log cu altceva
  }
};

export const deleteTask = async (id) => {
  try {
    await fetch(`${BACKEND}/delete/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateTaskStatus = async (id) => {
  try {
    await fetch(`${BACKEND}/doneUpdate/${id}`, {
      method: "PATCH",
    });
  } catch (e) {
    console.log(e);
  }
};

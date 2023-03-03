const BACKEND = import.meta.env.VITE_BACKEND;

export const postTask = async (task) => {
    try {
        const result = await fetch(`${BACKEND}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
        return result.ok;
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
    return [...tasks]?.sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );
};

export const sortTasksDescending = (tasks) => {
    return [...tasks]
        ?.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .reverse();
};

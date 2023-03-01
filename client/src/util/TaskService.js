export const postTask = async (task) => {
    try {
        const response = await fetch(`http://localhost:8888/task/post`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                taskType: task.taskType,
                name: task.name,
                deadline: task.deadline,
                estimatedDays: task.estimatedDays,
                estimatedHours: task.estimatedHours,
                estimatedMin: task.estimatedMin
            })
        })
        const data = response.json();
        //TODO de aratat o alerta cum ca task-ul s-a salvat cu success
        console.log("post task response: "+data);
    }
    catch (e){
        console.log(e);
        //TODO de schimbat acest log cu altceva
    }

}

export const deleteTask =async (id) => {
    try {
        await fetch(`http://localhost:8888/task/delete/${id}`,{
            method:"DELETE"
        })
    } catch (e) {
        console.log(e)
    }
}
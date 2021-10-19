const baseURL = "https://616e9cb2715a630017b396ee.mockapi.io/tasks";

export const createTask = taskData =>{
    return fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    }).then((response) => {
      if (!response.ok) {
          throw new Error("Failed to create task");
      }
    });
}

export const fetchTasksList = () =>{
    return fetch(baseURL)
    .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
}
export const updateTask = (taskId,taskData)=>{
    return fetch(`${baseURL}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create task")
      } 
    });
}


export const deleteTasks = (taskId)=>{
    return fetch(`${baseURL}/${taskId}`, {
        method: "DELETE",
      }).then((response) => {
        if (!response.ok) {
         throw new Error("Failed to delete task");
        }
      });
}
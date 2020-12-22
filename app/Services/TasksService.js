import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"


class TaskService {
    createTask(newTask) {
        console.log("Service creates Task")
        let listTask = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, listTask]
    }

    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id !== id)
    }


}

const tasksService = new TaskService()
export default tasksService;
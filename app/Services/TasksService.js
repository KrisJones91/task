import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { Load, Save } from "../Utils/LocalStorage.js"


class TaskService {
    constructor() {
        this.loadTasks()
    }
    createTask(newTask) {
        console.log("Service creates Task")
        let listTask = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, listTask]
        this.saveTasks()
    }

    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id !== id)
        this.saveTasks()
    }

    loadTasks() {
        Load()

    }

    saveTasks() {
        Save()
    }

}

const tasksService = new TaskService()
export default tasksService;
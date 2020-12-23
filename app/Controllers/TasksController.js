import { ProxyState } from "../AppState.js";
import tasksService from "../Services/TasksService.js";
// Private

function _drawTasks() {
    let tasks = ProxyState.tasks;
    let templates = " ";
    tasks.forEach(task => {
        templates += task.Template;
    })
    document.getElementById("tasks").innerHTML = templates
}




// Public
export default class TasksController {

    constructor() {
        console.log("Hello from controller")
        ProxyState.on("tasks", _drawTasks)
        ProxyState.on("items", _drawTasks)
        _drawTasks()

    }


    createTask(event) {
        event.preventDefault();
        console.log("Controller create task")
        let form = event.target;
        console.log(form)
        let listTask = {
            title: form.name.value,
            color: form.colorMe.value
        }
        tasksService.createTask(listTask)
        console.log(listTask)
        form.reset();
        console.log(ProxyState.tasks)

    }
    deleteTask(id) {
        tasksService.deleteTask(id)

    }


}
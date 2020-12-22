import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import Items from "../Models/Items.js"

export function Save() {
    localStorage.setItem("taskData", JSON.stringify({ tasks: ProxyState.tasks, items: ProxyState.items }))
}

export function Load() {
    let data = JSON.parse(localStorage.getItem("taskData"))
    if (data) {
        console.log(data, "task1")
        ProxyState.tasks = data.tasks.map(task => new Task(task))

        ProxyState.items = data.items.map(item => new Items(item))
        console.log(ProxyState.items, "proxy items")
        console.log(data, "task2")
    }
}
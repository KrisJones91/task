import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ title, color, numTasks, id }) {
        this.title = title;
        this.color = color;
        this.numTasks = numTasks
        this.id = id || generateId()


    }
    // currently on drawing out the template!:)
    get Template() {
        return /*html*/`
            <div class="card col-md-3 m-3 p-0">
                <div class="card-header m-0 p-0" style="background-color:${this.color}">
                    <button class="btn float-right" onclick="app.tasksController.deleteTask('${this.id}')">X</button>
                    <h4 class="card-title text-center text-white pt-5">${this.title}</h4>
                    <p class="task-num text-center text-white">${this.numTasks}</p>
                </div>
                <div class="card-body text-center pt-3">
                    <form id="${this.id}">
                        ${this.Items}
                    </form>
                </div>
                <div class="card-footer" style="background-color:${this.color}">
                    <div class="row">
                        <div class="input-group mb-3">
                            <form onsubmit="app.itemsController.createItem(event, '${this.id}' )">
                                <input type="text" class="form-control" placeholder="Add Task" name="itemName">
                                <button type="submit" class="btn" >+</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    get Items() {
        let template = ""
        let items = ProxyState.items.filter(items => items.taskId == this.id)
        items.forEach(items => template += items.Template)
        return template
    }

}


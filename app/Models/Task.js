import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ title, color, id }) {
        this.title = title;
        this.color = color;
        this.id = id || generateId()
    }


    calcItems() {
        let arr = ProxyState.items.filter(item => item.taskId == this.id).filter(item => item.checked == true)
        return arr.length
    }
    calcTotal() {
        return ProxyState.items.filter(item => item.taskId == this.id).length

    }

    // currently on drawing out the template!:)
    get Template() {
        return /*html*/`
            <div class="card col-md-3 m-3 p-0">
                <div class="card-header m-0 p-0" style="background-color:${this.color}">
                    <button class="btn float-right" onclick="app.tasksController.deleteTask('${this.id}')">X</button>
                    <h4 class="card-title text-center text-white pt-5">${this.title}</h4>
                    <p class="task-num text-center text-white" id="${this.id}-count" >${this.calcItems()}/${this.calcTotal()}</p>
                </div>
                <div class="card-body text-center pt-3">
                    <form id="${this.id}-items">
                        ${this.Items}
                    </form>
                </div>
                <div class="card-footer" style="background-color:${this.color}">
                    <div class="row">
                        <div class="input-group mb-2">
                            <form onsubmit="app.itemsController.createItem(event, '${this.id}' )" class="d-flex flex-row">
                                <input type="text" class="form-control" placeholder="Add Task" name="itemName" pattern=".{3,50}" required>
                                <button type="submit" class="btn" ><b>+</b></button>
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


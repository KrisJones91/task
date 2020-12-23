import itemsService from "../Services/ItemsService.js"
import Items from "../Models/Items.js"
import { ProxyState } from "../AppState.js";


function _drawItems() {
    let items = ProxyState.items



}

function _drawChecks(id) {
    let theTask = ProxyState.tasks.find(task => task.id == id)

    document.getElementById(`${id}-count`).innerHTML = `${theTask.calcItems()}/${theTask.calcTotal()}`

}


export default class ItemsController {
    constructor() {
        console.log("hello from Items-Controller")
    }

    createItem(event, taskId) {
        window.event.preventDefault();
        let form = event.target
        let newItem = {
            //bracket notations so computer didn't get mad
            title: form['itemName'].value,
            taskId: taskId
        }
        itemsService.createItem(newItem)
        //@ts-ignore
        form.reset()
        _drawItems()
    }
    deleteItem(id) {
        itemsService.deleteItem(id)
    }
    checkBox(id, taskId) {
        itemsService.checkBox(id)
        //changed param to taskId because it couldn't identify the taskId by the item id
        _drawChecks(taskId)
    }

}
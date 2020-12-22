import itemsService from "../Services/ItemsService.js"
import Items from "../Models/Items.js"
import { ProxyState } from "../AppState.js";


function _drawItems() {
    let items = ProxyState.items


    // items.forEach(item => {
    //     let template = ""
    //     let taskId = item.taskId
    //     template = item.Template
    //     let div = document.createElement("div");
    //     div.innerHTML = template
    //     console.log(taskId)
    //     document.getElementById(`${taskId}`).appendChild(div)
    // })


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
}
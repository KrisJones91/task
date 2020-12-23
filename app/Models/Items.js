import { generateId } from "../Utils/GenerateId.js"

export default class Items {
    constructor({ title, id, taskId, checked }) {
        this.title = title
        this.id = id || generateId()
        this.taskId = taskId
        this.checked = checked
    }

    get Template() {
        return /*html*/ `
        <div class="form-check">
            <label class="form-check-label">
                <input type="checkbox" class="form-check-input" name="items" id="items"
                    value="checkedValue" >${this.title}
                <button class="fas fa-trash text-danger" id="trash" onclick="app.itemsController.deleteItem('${this.id}')"></button>
            </label>
         </div>
         `
    }




}
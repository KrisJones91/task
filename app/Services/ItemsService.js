import Items from "../Models/Items.js"
import { ProxyState } from "../AppState.js"
import { Load, Save } from "../Utils/LocalStorage.js"

class ItemsService {
    constructor() {
        console.log("item service")
        ProxyState.on("items", Save)
        Load()
    }
    checkBox(id) {
        let currentItem = ProxyState.items.find(item => item.id == id)
        let currentIndex = ProxyState.items.findIndex(item => item.id == id)
        // @ts-ignore
        currentItem.checked = document.getElementById(`${id}`).checked
        ProxyState.items[currentIndex] = currentItem
        Save()
    }

    deleteItem(id) {
        ProxyState.items = ProxyState.items.filter(item => item.id !== id)
        Save()
    }
    createItem(newItem) {
        let listItem = new Items(newItem)
        ProxyState.items = [...ProxyState.items, listItem]
        Save()
    }

}

const itemsService = new ItemsService();
export default itemsService;
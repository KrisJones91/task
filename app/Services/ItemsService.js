import Items from "../Models/Items.js"
import { ProxyState } from "../AppState.js"
import { Save } from "../Utils/LocalStorage.js"

class ItemsService {
    constructor() {
        console.log("item service")
        ProxyState.on("items", Save)
    }


    deleteItem(id) {
        ProxyState.items = ProxyState.items.filter(item => item.id !== id)
    }
    createItem(newItem) {
        let listItem = new Items(newItem)
        ProxyState.items = [...ProxyState.items, listItem]
    }

}

const itemsService = new ItemsService();
export default itemsService;
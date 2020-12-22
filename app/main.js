import TasksController from "./Controllers/TasksController.js";
import ItemsController from "./Controllers/ItemsController.js";

class App {
  tasksController = new TasksController();
  itemsController = new ItemsController();
}

window["app"] = new App();

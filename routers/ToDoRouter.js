const express = require("express");
const router = express.Router();

class ToDoRouter {
  constructor(ToDocontroller) {
    this.controller = ToDocontroller;
  }

  routes() {
    //add a single item
    router.post("/", this.controller.addItem.bind(this.controller));

    //get a single item by id
    router.get("/:id", this.controller.getItem.bind(this.controller));

    //get all items with a specific description:
    router.get(
      "/old-item",
      this.controller.getSpecificItems.bind(this.controller)
    );
    return router; // Return the router instance
  }
}

module.exports = ToDoRouter;

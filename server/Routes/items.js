const itemRoute = require("express").Router();
const itemController = require("../controller/itemController.js");

itemRoute.get("/", itemController.getItems);
itemRoute.post("/create", itemController.create);
itemRoute.put("/update/:id", itemController.update);
itemRoute.delete("/delete/:id", itemController.delete);
itemRoute.get("/details/:id", itemController.getDetails);

module.exports = itemRoute;

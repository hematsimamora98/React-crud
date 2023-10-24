const userRoute = require("express").Router();
const UserController = require("../controller/userController");

userRoute.get("/", UserController.getUsers);
userRoute.post("/register", UserController.register);
userRoute.post("/login", UserController.loginUsers);
userRoute.put("/update/:id", UserController.update);
userRoute.delete("/delete/:id", UserController.delete);
userRoute.get("/details/:id", UserController.getDetails);

module.exports = userRoute;

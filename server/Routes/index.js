const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Home Page"
  });
});

const userRoutes = require("./users");
const itemRoutes = require("./items");

route.use("/items", itemRoutes);
route.use("/users", userRoutes);

module.exports = route;

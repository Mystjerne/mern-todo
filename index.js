var express = require("express");
var cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

//require the models.
const todo = require("./models/todoitemmodels");

//we will use mongoose to connect to the database.
const ToDoRouter = require("./routers/ToDoRouter");
const ToDoController = require("./controllers/ToDoController");

//pass in db models to controllers
const ToDocontroller = new ToDoController(todo);

//initalize the routers, and pass in the controllers
const ToDorouter = new ToDoRouter(ToDocontroller).routes();

var app = express();
var database;

app.use(express.json());
app.use(cors());

app.use("/todo", ToDorouter);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  //only start listening to requests once we've started listening to the database.
  .then(() => {
    app.listen(process.env.EXPRESS_PORT, () => {
      console.log(`Express app listening on port ${process.env.EXPRESS_PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB because of:", error);
  });

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//The schema defines the structure of a document within the database.
const toDoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//The model represents a collection of documents in the database
//AND
//provides an interface for interacting with the database.
//it's a javascript class created using a mongoose schema.

module.exports = mongoose.model("ToDoitem", toDoSchema);

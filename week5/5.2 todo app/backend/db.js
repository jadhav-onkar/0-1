const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin01:Admin0230@cluster0.iwsu4.mongodb.net/todo-app")

const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoschema)

module.exports = {
    todo
}
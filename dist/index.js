"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require("commander");
const figlet = require("figlet");
const Prompt = require("prompt-sync");
const fs = require("fs");
const program = new Command();
const uPrompt = new Prompt();
console.log(figlet.textSync("CLI To-Do"));
let todos = [];
// We need to read our json file first
const loadData = () => {
    const data = fs.readFileSync("./data.json", "utf8");
    todos = JSON.parse(data);
};
const saveData = () => {
    const writeData = JSON.stringify(todos, null, 2);
    fs.writeFileSync("data.json", writeData);
};
loadData();
class Todo {
    constructor(taskName, date, taskDone) {
        this.taskName = taskName;
        this.dueDate = date;
        this.taskDone = false;
    }
}
const createTodo = () => {
    let taskName = uPrompt("Enter your to-do name: ").trim();
    let dueDate = uPrompt("When is it due? (dd/mm/yyyy): ").trim();
    if (!taskName || !dueDate) {
        console.error("Task name or due date was not provided.");
        return;
    }
    let newTodo = new Todo(taskName, dueDate, false);
    todos.push(newTodo);
    // Write to json file
    saveData();
};
const listTodos = () => {
    loadData();
    console.log("****TO-DO's****");
    if (todos.length === 0) {
        console.log("No tasks found.");
        return;
    }
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.taskName} (Due: ${todo.dueDate}) ${todo.taskDone ? "✔️" : "❌"}`);
    });
};
const deleteTodo = () => {
    loadData();
    let deletedId = parseInt(uPrompt("Please enter index of the to-do you want to delete : "));
    const newTodos = todos.filter((todo, index) => index !== deletedId - 1);
    const newData = JSON.stringify(newTodos, null, 2);
    fs.writeFileSync("data.json", newData);
};
const updateTodo = () => {
    loadData();
    const updateId = parseInt(uPrompt("Index of to-do you want to update : "));
    const todo = todos[updateId - 1];
    todo.taskDone = !todo.taskDone;
    saveData();
    console.log(`To-do "${todo.taskName}" has been marked as ${todo.taskDone ? "completed ✔️" : "not completed ❌"}.`);
};
program.name("CLI To-Do").description("Simple CLI To-Do List").version("1.0.0");
program.command("create").description("Creates a to-do").action(createTodo);
program.command("list").description("Lists all to-dos").action(listTodos);
program.command("delete").description("Delete a specific todo").action(deleteTodo);
program.command("update").description("Update the status of a to-do").action(updateTodo);
program.parse(process.argv);
// Improvements //
// Read from data.json then push to array - Done
// Save todos to json file - Done
// Delete to-do - Done
// Updating to-do
//# sourceMappingURL=index.js.map
const { Command } = require("commander");
const figlet = require("figlet");
const Prompt = require("prompt-sync");

const program = new Command();
const uPrompt = new Prompt();

console.log(figlet.textSync("CLI To-Do"));

class Todo {
	constructor(taskName: string, date: string, taskDone: boolean) {
		this.taskName = taskName;
		this.dueDate = date;
		this.taskDone = false;
	}
	taskName: string;
	dueDate: string;
	taskDone: boolean;

	toggleDone = () => {
		this.taskDone = !this.taskDone;
	};
}

let todos: Todo[] = [];

const createTodo = () => {
	let taskName = uPrompt("Enter your to-do name: ").trim();
	let dueDate = uPrompt("When is it due? (dd/mm/yyyy): ").trim();
	if (!taskName || !dueDate) {
		console.error("Task name or due date was not provided.");
		return;
	}
	let newTodo = new Todo(taskName, dueDate, false);
	todos.push(newTodo);
	console.log("To-do added successfully!");
};

const listTodos = () => {
	console.log("****TO-DO's****");
	if (todos.length === 0) {
		console.log("No tasks found.");
		return;
	}
	todos.forEach((todo, index) => {
		console.log(`${index + 1}. [${todo.taskDone ? "✔" : " "}] ${todo.taskName} (Due: ${todo.dueDate})`);
	});
};

program.name("CLI To-Do").description("Simple CLI To-Do List").version("1.0.0");

program.command("create").description("Creates a to-do").action(createTodo);
program.command("list").description("Lists all to-dos").action(listTodos);

program.parse(process.argv);
// Improvements
// Save todos to json file
// Add delete and complete methods

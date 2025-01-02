const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();

console.log(figlet.textSync("CLI To-Do List"));

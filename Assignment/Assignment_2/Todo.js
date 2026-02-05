const fs= require("fs");
const path= require("path");
const TODO_LIST= path.join(__dirname,"Todo.json");
function readTodos(){
const data=fs.readFileSync(TODO_LIST,"utf-8");
return JSON.parse(data);
}
function writeTodos(todos){
    fs.writeFileSync(TODO_LIST,JSON.stringify(todos,null,2));
}

function addTodo(task) {
const todos =readTodos();

const newTodo = {
id:Date.now(),
task: task,
done:false
  };

  todos.push(newTodo);
writeTodos(todos);

console.log("✅ Todo added:", task);
}

console.log(readTodos());
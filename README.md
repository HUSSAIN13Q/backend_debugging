# Debugging Challenge

### Before you start, Create a .env file and copy the following code and paste into it:

```
PORT=8000;
DB_URL="your mongo db connection url link"
```

### record your steps for solving the bugs in the correct order (number of bugs is unknown):

    at Object.<anonymous> (/Users/hussainalsaffar/Developer/coded2/Express/backend_debugging/db/models/todo.js:10:28)
    then
    const mongoose = require("mongose");
    now
    const mongoose = require("mongoose");

TypeError: mongoose.module is not a function
at Object.<anonymous> (/Users/hussainalsaffar/Developer/coded2/Express/backend_debugging/db/models/todo.js:9:28)
than
const todoModel = mongoose.module("Todo", todoSchema);
now
const todoModel = mongoose.model("Todo", todoSchema);

Error: Route.get() requires a callback function but got a [object Undefined]
at Route.<computed> [as get] (/Users/hussainalsaffar/Developer/coded2/Express/backend_debugging/node_modules/express/lib/router/route.js:216:15)
at proto.<computed> [as get] (/Users/hussainalsaffar/Developer/coded2/Express/backend_debugging/node_modules/express/lib/router/index.js:521:19)
at Object.<anonymous> (/Users/hussainalsaffar/Developer/coded2/Express/backend_debugging/routers/routes/todos.js:14:12)

    const {

getAllTodo,
getTodoById,
getCompletedTodos,
createTodo,
completeTodo,
deleteTodo,
updateTodo,
} = require("./../controllers/todos");

module.export = {
getAllTodo,
getTodoById,
getCompletedTodos,
createTodo,
completeTodo,
deleteTodo,
updateTodo,
};

Users/hussainalsaffar/Developer/coded2/Express/backend_debugging/index.js:16
app.use(morgan("dev"));
^

     .catch((err) => {
    console.log("DB connected");

});
.catch((err) => {
console.log(err);
});

    "errors": {
        "task": {
            "name": "ValidatorError",
            "message": "Path `task` is required.",
            "properties": {
                "message": "Path `task` is required.",
                "type": "required",
                "path": "task"
            },
            "kind": "required",
            "path": "task"
        }
    },
    "_message": "Todo validation failed",
    "name": "ValidationError",
    "message": "Todo validation failed: task: Path `task` is required."

than
const createTodo = (req, res) => {
const todo = req.body.todo;

const newTodo = new todoModel({
todo,
});

newTodo
.save()
.then((result) => {
res.status(200).json(result);
})
.catch((err) => {
res.status(400).json(err);
});
};

now and the task been change to str

const createTodo = (req, res) => {
const task = req.body.task;
console.log(req.body.task);
const newTodo = new todoModel({
task,
});
console.log("hiii", newTodo);

newTodo
.save()
.then((result) => {
res.status(200).json(result);
})
.catch((err) => {
res.status(400).json(err);
});
};

than

const completeTodo = (req, res) => {
const { id } = req.params;

todoModel
.findOneAndUpdate({ id }, { isCompleted: true }, { new: true })
.exec()
.then((result) => {
res.status(200).json(result);
})
.catch((err) => {
res.status(400).json(err);
});
};

now

const completeTodo = (req, res) => {
const { id } = req.params;
console.log("ID:", id);

todoModel
.findOneAndUpdate({ \_id: id }, { isCompleted: true }, { new: true })
.exec()
.then((result) => {
res.status(200).json(result);
})
.catch((err) => {
res.status(400).json(err);
});
};

todoRouter.put("/todo", updateTodo);
todoRouter.put("/todo/:id", updateTodo);

const express = require("express");
const {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo); //done

todoRouter.get("/todo", getTodoById); //done

todoRouter.get("/todos/completed", getCompletedTodos); //done

todoRouter.post("/todos", createTodo); //done

todoRouter.put("/todos/:id", completeTodo); //done

todoRouter.put("/todo/:id", updateTodo); //done

todoRouter.delete("/delete/:id", deleteTodo); //done

module.exports = todoRouter;

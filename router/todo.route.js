const express = require("express");
const todoRouter = express.Router();
// todo logical begin here 
const {getTodolandingPage, getAddTodoPost, getDeleteTodo, getEditTodo} = require("../controller/todo.controller");
todoRouter.get("/", getTodolandingPage);

todoRouter.post("/addTodo", getAddTodoPost);

todoRouter.post("/deleteTodo", getDeleteTodo);

todoRouter.post("/editTodo", getEditTodo);

module.exports = todoRouter;
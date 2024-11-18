const todoModel = require("../../db/models/todo");

const getAllTodo = (req, res) => {
  todoModel
    .find({ isDel: false })
    .select("task timeStamp")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getTodoById = (req, res) => {
  const { id } = req.query;
  todoModel
    .findOne({ _id: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getCompletedTodos = (req, res) => {
  todoModel
    .find({ isCompleted: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

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
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const completeTodo = (req, res) => {
  const { id } = req.params;
  console.log("ID:", id);

  todoModel
    .findOneAndUpdate({ _id: id }, { isCompleted: true }, { new: true })
    .exec()
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const newTask = req.body.task;

  todoModel
    .findOneAndUpdate({ _id: id }, { task: newTask }, { new: true })
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { isDel: true })
    .then((result) => {
      res.status(204).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
};

// AI-generated, reviewed and modified

const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "https://blostemassignment1.vercel.app"
}))
let tasks = [];

/**
 GET /api/tasks
 return all tasks
*/
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});


/**
 POST /api/tasks
 create task
*/
app.post("/api/tasks", (req, res) => {
  const { title, priority } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: uuidv4(),
    title,
    priority: priority || "low",
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});


/**
 PATCH /api/tasks/:id
 toggle completion
*/
app.patch("/api/tasks/:id", (req, res) => {
  const { id } = req.params;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.completed = !task.completed;

  res.json(task);
});


/**
 DELETE /api/tasks/:id
*/
app.delete("/api/tasks/:id", (req, res) => {

  const { id } = req.params;

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.json({ message: "Task deleted" });

});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
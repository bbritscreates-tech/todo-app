const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory tasks (temporary storage)
let tasks = [];

// Routes
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = { id: Date.now(), title: req.body.title, completed: false };
  tasks.push(task);
  res.json(task);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

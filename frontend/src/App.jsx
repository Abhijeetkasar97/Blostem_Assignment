// AI-generated, reviewed and modified

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API = "https://blostem-assignment-ik0n.onrender.com";
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    const res = await axios.get(`/${API}/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post(`/${API}/tasks`, {
      title,
      priority
    });

    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.patch(`/${API}/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`/${API}/tasks/${id}`);
    fetchTasks();
  };

  const filteredTasks = Array.isArray(tasks)
    ? tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
      })
    : [];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Blostem_Assignment</div>

        
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">

          <h1>
            Manage Your <span>Tasks</span> <br />
            Faster & Smarter
          </h1>

          <p>
            Organize your daily work and boost productivity
            using a simple and powerful task manager.
          </p>

        </div>
      </section>

      {/* TASK MANAGER */}
      <div className="task-container">

        <h2>Task Manager</h2>

        <div className="form">
          <input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="filters">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>

        <ul>
          {filteredTasks.map(task => (
            <li key={task.id}>

              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none"
                }}
              >
                {task.title} ({task.priority})
              </span>

              <div>
                <button onClick={() => toggleTask(task.id)}>Toggle</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>

            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import { Task } from "./types/Task";
import Taskitems from "./Components/Taskitems";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const s = localStorage.getItem("tasks");
    if (s) setTasks(JSON.parse(s));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const add = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
    setNewTask("");
  };

  const toggle = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const remove = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: 100,
      }}
    >
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Task Manager</h1>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") add();
        }}
      />
      <button onClick={add}>Add</button>
      <div style={{ marginTop: 20 }}>
        {tasks.map((t) => (
          <Taskitems key={t.id} task={t} onToggle={toggle} onDelete={remove} />
        ))}
      </div>
    </div>
  );
}

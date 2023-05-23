import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import './styles/global.css'

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export const App = () => {
  const [tasks, setTasks] = useState([]);

  const loadTask = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };
  const addTasks = (taskTitle) => {
    saveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const taskCompletedById = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    saveTasks(newTasks);
  };

  const deleteTasksById = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(newTasks);
  };

  return (
    <>
      <Header addTasks={addTasks} />
      <Tasks
        tasks={tasks}
        taskCompletedById={taskCompletedById}
        deleteTasksById={deleteTasksById}
      />
      <div className="name">
        <h2>By Leo Romero</h2>
      </div>
    </>
  );
};

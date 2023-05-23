import { useState } from "react";
import { Task } from "../Task/Task";
import styles from "./tasks.module.css";
import Swal from "sweetalert2";

export const Tasks = ({ tasks, taskCompletedById, deleteTasksById }) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  const handleDeleteTask = (taskId) => {
      deleteTasksById(taskId);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "task deleted",
        showConfirmButton: false,
        timer: 1000,
      });
      
    
  };

  return (
    <section className={styles.task}>
      <header className={styles.header}>
        <div>
          <p className={styles.textPurple}>Create Task</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p>Completed Tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            taskCompletedById={taskCompletedById}
            deleteTasksById={handleDeleteTask}
          />
        ))}
      </div>
    </section>
  );
};

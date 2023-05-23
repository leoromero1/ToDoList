import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
export const Task = ({ task, taskCompletedById, deleteTasksById }) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => taskCompletedById(task?.id)}
      >
        {task?.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task?.isCompleted ? styles.texCompleted : ""}>
        {task?.title}
      </p>
      <button className={styles.deleteButton} onClick={()=> deleteTasksById(task?.id)}>
        <TbTrash size={28} />
      </button>
    </div>
  );
};

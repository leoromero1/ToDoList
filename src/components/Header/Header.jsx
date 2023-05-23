import { useState } from "react";
import style from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Swal from 'sweetalert2'

export const Header = ({ addTasks }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3) {
      setError(true); 
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "task added",
        showConfirmButton: false,
        timer: 700,
      });
      addTasks(title);
      setTitle("");
      setError(false);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    setError(false);
  };

  return (
    <header className={style.header}>
      <h1>ToDo App 🚀</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Add a new Task"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={28} />
        </button>
      {error && <p className={style.error}>Ingrese una tarea con al menos 3 caracteres</p>}
      </form>
    </header>
  );
};

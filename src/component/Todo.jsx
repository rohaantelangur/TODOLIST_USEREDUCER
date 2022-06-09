import React, { useContext,  useState } from "react";
import { Todocontext } from "../context/Todocontext";
import styles from "./todos.module.css";


const Todo = () => {
  const {todos,dispatch} = useContext(Todocontext);

  const [task, setTask] = useState("");

  return (
    <div>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          placeholder="Enter same think..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className={styles.submit}
          onClick={() => dispatch({ type: "add-todo", task }, setTask(""))}
        >
          Add
        </button>
      </div>

      {todos.map((el, ind) => (
        <div className={styles.todolist} key={ind}>
          <div className={styles.check}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={() => dispatch({ type: "toggle-todo", ind })}
            />
          </div>

          <div className={el.isCompleted ? styles.strike : styles.text}>
            {el.task}
          </div>
          <div className={styles.btn}>
            <button
              className={styles.delete}
              onClick={() => dispatch({ type: "Delete", ind })}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

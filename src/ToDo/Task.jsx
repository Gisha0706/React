import { useState } from "react";
import Styles from "./styles.module.css";
import { Link, Navigate } from "react-router-dom";

const Task = (props) => {
  let [Newtask, setNewtask] = useState("");
  let [error, setError] = useState(null);

  const NewTitleChange = (e) => {
    setError(null);
    setNewtask(e.currentTarget.value);
  };

  const AddTasks = () => {
    if (Newtask.trim() !== "") {
      props.Addtask(Newtask.trim(), props.id);
      setNewtask("");
    } else {
      setError("Title is Required");
    }
  };
  const ChangeFilterAll = () => {
    props.changeFilter("all", props.id);
  };
  const ChangeFilterActive = () => {
    props.changeFilter("active", props.id);
  };
  const ChangeFilterCompleted = () => {
    props.changeFilter("completed", props.id);
  };
  const DellToDoList = () => {
    props.removeToDoLists(props.id);
  };

  return (
    <div className={Styles.main}>
      {/* <Link to={`/singleTask/${props.ids.id}`} state={props.ids}> */}
      <p>
        {props.title} <button onClick={DellToDoList}>x</button>
      </p>
      {/* </Link> */}
      <div>
        {" "}
        <input
          style={{ width: "170px", borderRadius: "4px" }}
          className={error ? Styles.error : ""}
          value={Newtask}
          onChange={NewTitleChange}
        />
        <button className={Styles.add} onClick={AddTasks}>
          Add
        </button>
        {error && <div className={Styles.errormassage}>{error}</div>}
      </div>
      {props.tasks.map((t) => {
        const onChangeHendler = (e) => {
          props.changeStatus(t.id, e.currentTarget.checked, props.id);
        };
        const DellTask = () => {
          props.removeTask(t.id, props.id);
        };

        return (
          <li className={t.isDone ? Styles.isDone : Styles.li} key={t.id}>
            {" "}
            <input
              onChange={onChangeHendler}
              className={Styles.check}
              type="checkbox"
              checked={t.isDone}
            />{" "}
            <span className={Styles.span}>
              {t.title} <p></p>{" "}
            </span>{" "}
            <button className={Styles.butt} onClick={DellTask}>
              x
            </button>
          </li>
        );
      })}
      <div>
        <button
          className={
            props.filter === "all" ? Styles.activefilter : Styles.buttons
          }
          onClick={ChangeFilterAll}
        >
          all
        </button>
        <button
          className={
            props.filter === "active" ? Styles.activefilter : Styles.buttons
          }
          onClick={ChangeFilterActive}
        >
          active
        </button>
        <button
          className={
            props.filter === "completed" ? Styles.activefilter : Styles.buttons
          }
          onClick={ChangeFilterCompleted}
        >
          completed
        </button>
      </div>
    </div>
  );
};
export default Task;

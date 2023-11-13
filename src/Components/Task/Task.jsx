import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion"

const blockanim ={
  hidden:{
    y:-100,
    opasity:0,
  },
  visible:{
    y:0,
    opasity:1,
  }
}

const Task = (props) => {
  const {
    handleDeleteTask,
    task,
    handleOnChange,
    checkedTasks,
    handleEditTask,
    setTasks,
    tasks,
  } = props;
  return (
    <div className={Styles.btn}>
    <motion.div variants={blockanim} className={Styles.task}
    initial="hidden"
    whileInView="visible"
    >
      <div>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task._id)}
          checked={checkedTasks.has(task._id)}
        />
        <Link to={`/singleTask/${task._id}`} state={task}>
          <div className={Styles.inp}><p><b>TITLE :</b> {task.title}</p></div>
        </Link>
        <div className={Styles.inp}><p>Description: {task.description}</p></div>
        <div className={Styles.inp}><p>Date: {task.created_at}</p></div>
        
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button
          disabled={checkedTasks.has(task._id)}
          onClick={() => handleEditTask(task)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <Form>
        <Form.Check // prettier-ignore
          // checked={task.status === "done"}
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={async (e) => {
            console.log(e.target.checked);
            const response = await fetch(
              `http://localhost:3001/task/${task._id}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  status: e.target.checked === true ? "done" : "active",
                }),
              }
            );
            const data = await response.json();

          
            console.log(data);
            setTasks(tasks);
            // console.log(data, "newTasks");
          }}
        />
      </Form>
    </motion.div>
    </div>
  );
};

export default Task;

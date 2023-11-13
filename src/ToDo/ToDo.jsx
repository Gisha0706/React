import { useState } from "react";
import { idGeneretor } from "../helpers/idGeneretor";
import Task from "./Task";
import Styles2 from "./styles2.module.css";

const Todo = () => {

  const Addtask = (title,ToDoListId) => {
    let task = tasks[ToDoListId]
    let newt = { id: idGeneretor(), title: title, isDone: false };
    if (newt.title.length !== 0) {
      let newt2 = [newt, ...task];
      tasks[ToDoListId]=newt2
      setTasks({...tasks});
    }
  };

  const removeTask = (id,ToDoListId) => {
    let task = tasks[ToDoListId]
    let filteredTasks = task.filter((t) => t.id !== id);
    tasks[ToDoListId] = filteredTasks;
    setTasks({...tasks});
  };
  const changeStatus = (taskId, isDone, ToDoListId) => {
    let task = tasks[ToDoListId]
    let task1 = task.find((t) => t.id === taskId);
    if (task1) {
      task1.isDone = isDone;
    }
    setTasks({...tasks});
  };

  function changeFilter(value, ToDoId) {
    let ToDoLists = ToDoList.find((t)=> t.id === ToDoId)
    if(ToDoList){
      ToDoLists.filter = value;
      setToDoList([...ToDoList])
    }
  }

  let ToDoListId = idGeneretor()
  let ToDoListId2 = idGeneretor()


  const removeToDoLists = (ToDoId) =>{
     let FilteredToDo = ToDoList.filter(tl=> tl.id !== ToDoId)
     setToDoList(FilteredToDo)
     delete tasks[ToDoId]
  }
     
  let [ToDoList,setToDoList] = useState([
    { id: ToDoListId, title: "Animals-List", filter: "all" },
    { id: ToDoListId2, title: "Cars-List", filter: "all" },
    
  ])

  let [tasks,setTasks] = useState({
    [ToDoListId]:
    
    [
      { id: idGeneretor(), title: "Dog", isDone: false },
      { id: idGeneretor(), title: "Horse", isDone: false },
      { id: idGeneretor(), title: "Cat", isDone: false },
      
    ],
    [ToDoListId2]:[
      { id: idGeneretor(), title: "BMW", isDone: false, date:'12/12/2023'},
      { id: idGeneretor(), title: "Mercedes", isDone: false },
      { id: idGeneretor(), title: "Opel", isDone: false },
    ]
  })
  

  return (
    <div className={Styles2.main}>
      {/* <input type="text" /> <button></button> */}
      {ToDoList.map((tl) => {
        let taskTodo = tasks[tl.id];
        if (tl.filter === "active") {
          taskTodo = taskTodo.filter((t) => t.isDone === false);
          console.log(taskTodo);
        }
        if (tl.filter === "completed") {
          taskTodo = taskTodo.filter((t) => t.isDone === true);
          console.log(taskTodo);
        }
        return (
          <Task
            removeToDoLists={removeToDoLists}
            task1={ToDoList}
            ids={tl}
            task={ToDoList}
            key={tl.id}
            id={tl.id}
            title={tl.title}
            changeFilter={changeFilter}
            tasks={taskTodo}
            todo={tasks}
            removeTask={removeTask}
            Addtask={Addtask}
            changeStatus={changeStatus}
            filter={tl.filter}
          />
        );
      })}
    </div>
  );
};

export default Todo;

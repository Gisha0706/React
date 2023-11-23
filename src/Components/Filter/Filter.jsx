import { useState } from "react";
import Style from "./style.module.css";
import Icon from "../Icon";
import { motion } from "framer-motion"




const Filter = ({ tasks, setTasks, filteredTasks, setFilteredTasks }) => {
  const  {searchFilter, setSearchFilter} = useState(true)
  const [searchData, setSearchData] = useState();
  let task3 = filteredTasks;

  const filterByTitle = () => { 
    task3 = filteredTasks.filter((task) => task.title.includes(searchData));
  setTasks(task3);
  };
  // const filterByTitle12 = () => {
  //   console.log(filteredTasks);
  //   task3 = filteredTasks.filter((task) => task.title.includes(searchData));

  //   setTasks(task3);
  // };

  let task2 = filteredTasks;
  const filterByDone = () => {
    task2 = filteredTasks.filter((task) => task.status === "done");
    setTasks(task2);
  };
  let task1 = filteredTasks;
  const filterByActive = () => {
    task1 = filteredTasks.filter((task) => task.status === "active");
    setTasks(task1);
  };
  return (
    <div className={Style.filhead}
>
      <div className={Style.searchBox}>
        <input
          onChange={(e) => setSearchData(e.target.value)}
          className={Style.searchInput}
          type="text"
          name=""
        />
        <button
          onClick={filterByTitle}
          className={Style.searchButton}
          href="#"
        >
          <i className={Style.materialicons}>
            <Icon />
          </i>
        </button>
      </div>
      <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "rgb(22, 70, 203)",
          border: "2px solid black",
          borderRadius: "5px",
          marginTop: "2.5px",
          color: "white",
          marginLeft: "10px",
          padding: "5px",
        }}
        onClick={filterByDone}
      >
        Done
      </motion.button>
      <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
        style={{
          width: "60px",
          height: "50px",
          backgroundColor: "rgb(22, 70, 203)",
          border: "2px solid black",
          borderRadius: "5px",
          marginTop: "2.5px",
          color: "white",
          marginLeft: "10px",
          textAlign: "center",
        }}
        onClick={filterByActive}
      >
        Active
      </motion.button>

    </div>
  );
};

export default Filter;

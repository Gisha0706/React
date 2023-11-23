import React, { createContext, useState } from "react";
import Style from "./Components/styles.module.css"
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import Navbar from "./Components/Navbar/Navbar";
import Contacts from './Components/Contacts'
import Aboute  from "./Components/Aboute";
// import A from "./functionalComponents/A";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate } from "react-router-dom";
export const ContextProvider = createContext();

const App = () => {
  const types = ["success", "info", "warning", "error"];
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const [num, setNum] = useState(5);
  const [loadin, setLoading] = useState(5);
  const contextValue = {
    num,
    setNum,
    loadin,
    setLoading,
    addNotification,
  };
  const navigate = useNavigate();
  const containerStyles = { width: "100%", margin: "auto", position:"absolute",};
  return (
    <>
      <Navbar />
      <div className={Style.containerStyles}>
        <ContextProvider.Provider value={contextValue}>
          <Routes>
            <Route
              path="/"
              element={<ToDo addNotification={addNotification} />}
            />
            <Route path="/singleTask/:id" element={<SingleTask />} />
            <Route
              path="/contact"
              element={<Contacts/>}
            />
               <Route
              path="/aboute"
              element={<Aboute/>}
            />
          </Routes>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ContextProvider.Provider>
        {/* <A /> */}
      </div>
    </>
  );
};

export default App;

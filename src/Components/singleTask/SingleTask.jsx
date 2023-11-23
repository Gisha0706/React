import Styles from "./styles.module.css";
import { useLocation, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


const SingleTask = () => {
  const { state } = useLocation();
  const location = useLocation();
  console.log(location, "location");
  return (
      <div className={Styles.container}>
                    <div className={Styles.inp}>
              <p>
              <p>Title: {state.title}</p>
              </p>
            </div>
            <div className={Styles.inp}>
            <p>Description: {state.description} </p>
          </div>
          <div className={Styles.inp}>
            <p>Date:{state.date}</p>
          </div>

    </div>
  );
};

export default SingleTask;

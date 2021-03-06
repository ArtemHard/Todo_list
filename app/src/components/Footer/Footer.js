import React from "react";
import { useDispatch } from "react-redux";
import { clearAllTodos } from "../redux/actionCreators/todosAC";

console.log("Render Footer");

const Footer = () => {

  const dispatch = useDispatch()

  const clearHandler = () => {
    dispatch(clearAllTodos()) 
  }
  
  return (
    <footer className="d-flex mt-5 justify-content-center">
      <button
        onClick={clearHandler}
        type="button"
        className="btn btn-danger mx-1"
      >
        Delete All
      </button>
    </footer>
  );
};

export default React.memo(Footer);

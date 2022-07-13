import Form from "../Form/Form";
import React from "react";
console.log("Render Header");
const Header = ({ addNewTodo }) => {
  
  return (
    <header>
      <Form addNewTodo={addNewTodo} />
    </header>
  );
};

export default React.memo(Header);

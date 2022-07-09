import Form from "../Form/Form";
import React from "react";

const Header = ({ addNewTodo }) => {
  console.log("Render Header");
  return (
    <header>
      <Form addNewTodo={addNewTodo} />
    </header>
  );
};

export default React.memo(Header);

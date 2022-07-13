import TodoItem from "../TodoItem/TodoItem";
import {useSelector} from 'react-redux'

console.log("Render TodoList");

const TodoList = () => {
  
  const todos = useSelector(store => store.todos) // becouse except todos 'store' can includes 'author' and many different params

  const content = () => {
    if (todos.length === 0) {
      return <p>List empty...</p>;
    }
    return todos.map((todo, i) => {
      return (
        <TodoItem
          key={todo.id}
          index={i}
          {...todo}
        />
      );
    });
  };

  return <ul className="list-group">{content()}</ul>;
};

export default TodoList;

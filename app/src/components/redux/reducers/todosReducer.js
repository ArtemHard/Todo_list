import {
  ADD_NEW_TODO,
  CLEAR_ALL_TODOS,
  COMPLETED_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_ALL_TODOS,
} from "../actionTypes/todosTypes";

export const todosReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [...store, action.payload];

    case DELETE_TODO:
      return store.filter((todo) => todo.id !== action.payload);

    case CLEAR_ALL_TODOS:
      return [];

    case COMPLETED_TODO:
      return store.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case UPDATE_ALL_TODOS:
      return action.payload;

    case EDIT_TODO:
      return store.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });

    default:
      return store;
  }
};

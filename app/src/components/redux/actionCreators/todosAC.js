import { ADD_NEW_TODO, CLEAR_ALL_TODOS, COMPLETED_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes/todosTypes"

export const createNewTodo = (title) => {
    return {
        type: ADD_NEW_TODO,
        payload:{
            id: Date.now(), // NANOID 01:32:13
            title,
            completed: false,
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const completedTodo = (id) => {
    return {
        type: COMPLETED_TODO,
        payload: id
    }
}

export const clearAllTodos = () => {
    return {
        type: CLEAR_ALL_TODOS
    }
}

export const editTodo = (id, newTitle) => {
    return {
        type: EDIT_TODO,
        id,
        title: newTitle
    }
}
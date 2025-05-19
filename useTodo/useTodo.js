import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}

const useTodo = () => {
  const [todos, dispatch] = useReducer( todoReducer, [], init );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch( action );
  }

  const handleDeleteTodo = ( id ) => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: id,
    }

    dispatch( action );
  }

  const handleToggleTodo = ( id ) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    }

    dispatch( action );
  }

  return {
    todos,
    todoCount: todos.length,
    pendingCount: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  }
}

export default useTodo

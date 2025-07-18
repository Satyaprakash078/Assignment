import React,{useState,useEffect} from 'react'
import AddTodo from './AddTodo.js'
import TodoList from "./TodoList";
import Filter from "./Filter";

const LOCAL_STORAGE_KEY = "react-todo-list";

const TodoApp = () => {

   const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

    const addTodo=(text)=>{
       const newTodo={
        id:Date.now(),
        text,
        completed:false
       };
       setTodos([newTodo, ...todos]);
    }
    const toggleComplete =(id)=>{
      setTodos(todos.map(todo=>todo.id=== id? {...todo,completed:!todo.completed}:todo))
    }
    const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });
  return (
    <div>
        <AddTodo onAdd={addTodo} />
         <Filter filter={filter} setFilter={setFilter} />
         <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoApp
import {useState} from "react";
import TotoForm from "./components/toto-form";
import TodoList from "./components/todo-list";
import './style/style.css'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const todo = {
      id: Date.now(),
      text
    }
    setTodos([...todos, todo])
  }
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? {...todos, text: newText} : todo))
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
      <div className="App">
        <TotoForm addTodo={addTodo}/>
        <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo}/>
      </div>
  );
}

export default App;

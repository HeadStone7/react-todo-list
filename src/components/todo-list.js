import TodoItem from "./todo-item";

function TodoList({todos, editTodo, removeTodo}) {
    return (
        <ul>
            {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} editTodo={editTodo} removeTodo={removeTodo}/>)}
        </ul>
    );
}

export default TodoList;
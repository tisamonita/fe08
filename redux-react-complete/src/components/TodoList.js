// import useSelector from react-redux
import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
// import TodoItem component
import TodoItem from "./TodoItem";

// import EditTodoForm component
import EditTodoForm from "./EditTodoForm";

// create TodoList component
function TodoList() {
  // get todos from store
  const todos = useSelector((state) => state.todos.todos);

  const [todoIdEdit, setTodoIdEdit] = useState(null);
  const [todoEditData, setTodoEditData] = useState(null);

  const handleEditTodo = (todoId) => {
    setTodoIdEdit(todoId);
  };

  useEffect(() => {
    if (todoIdEdit) {
      setTodoEditData(todos.filter((todo) => todo.id === todoIdEdit)[0]);
    } else {
      setTodoEditData(null);
    }
  }, [todoIdEdit]);

  return (
    <div>
      <h1>Todo List</h1>
      <p> Total todos: {todos.length} </p>
      <div>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              deadline={todo.deadline}
              status={todo.status}
              handleEdit={handleEditTodo}
            />
          ))}
      </div>
      <hr />
      <div>
        {todoEditData && (
          <EditTodoForm
            id={todoIdEdit}
            initialTitle={todoEditData.title}
            initialDescription={todoEditData.description}
            initialDeadline={todoEditData.deadline}
            initialStatus={todoEditData.status}
            finishEdit={() => setTodoIdEdit(null)}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;
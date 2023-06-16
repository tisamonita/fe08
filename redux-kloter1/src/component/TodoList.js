// import useSelector from react-redux
import { useSelector } from "react-redux";

function TodoList() {
      // get todos from store
      //cara subscribe
  const todos = useSelector((state) => state.todos.todos);
  const currentId = useSelector((state)=> state.todos.currentId);

    return (
      <div>
        <h1>Todo List</h1>
        <p> Total todos: {todos.length} </p>
      </div>
    );
  }
  
  export default TodoList;
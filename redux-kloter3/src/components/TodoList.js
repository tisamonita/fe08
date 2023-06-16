// import useSelector from react-redux
import { useSelector } from "react-redux";

// create TodoList component
function TodoList() {
    // get todos from store
    const todos = useSelector((state) => state.todos.todos);
    const loading = useSelector((state)=>state.todos.loading);
  
    return (
      <div>
        <h1>Todo List</h1>
        <p> Total todos: {todos.length} </p>
        {todos && todos.map((item)=>{
            return(
                <>
                <h3>{item.title}</h3>
                <h3>{item.description}</h3>
                <h3>{item.deadline}</h3>
                <h3>{item.status}</h3>
                <hr />
                </>
            )
        })}
      </div>
    );
  }
  
  export default TodoList;
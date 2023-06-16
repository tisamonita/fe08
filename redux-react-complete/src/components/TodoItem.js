
// import useDispatch from react-redux

import { useDispatch } from "react-redux";

// import action deleteTodo

import { deleteTodo } from "../redux/slices/todoSlice";

// create TodoItem component
function TodoItem({ id, title, description, deadline, status, handleEdit }) {
      // create dispatch function using useDispatch
  const dispatch = useDispatch();

  // create handleDelete function
  const handleDelete = () => {
    // dispatch action deleteTodo
    dispatch(deleteTodo({ id: id }));
  };

    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{deadline}</p>
        <p>{status}</p>
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <hr />
      </div>
    );
  }
  
  export default TodoItem;
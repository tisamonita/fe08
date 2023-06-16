// import hook useState from react to handle form input
import { useState, useEffect } from "react";

// import useDispatch from react-redux
import { useDispatch } from "react-redux";

// import action updateTodo

import { updateTodo } from "../redux/slices/todoSlice";

// create EditTodoForm component
const EditTodoForm = ({
  id,
  initialTitle,
  initialDescription,
  initialDeadline,
  initialStatus,
  finishEdit,
}) => {
  // create dispatch function using useDispatch
  const dispatch = useDispatch();

  // create input state using useState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");

  // create handleSubmit function
  const handleSubmit = (event) => {
    // prevent default form behavior
    event.preventDefault();

    // create updatedTodo object
    const updatedTodo = {
      id: id,
      title: title,
      description: description,
      deadline: deadline,
      status: status,
    };

    // dispatch action updateTodo
    dispatch(updateTodo(updatedTodo));
    finishEdit();
  };

  useEffect(() => {
    setTitle("");
    setDescription("");
    setDeadline("");
    setStatus("");
  }, [id, initialTitle, initialDescription, initialDeadline, initialStatus]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title ? title : initialTitle}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        placeholder="Description"
        value={description ? description : initialDescription}
        name="description"
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <label htmlFor="deadline">Deadline:</label>
      <input
        type="date"
        value={deadline ? deadline : initialDeadline}
        name="deadline"
        onChange={(event) => setDeadline(event.target.value)}
        required
      />
      <label htmlFor="status">Status:</label>
      <select
        name="status"
        value={status ? status : initialStatus}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="todo">todo</option>
        <option value="inprogress">inprogress</option>
        <option value="done">done</option>
      </select>
      <input type="submit" value="Edit Todo" />
    </form>
  );
};

export default EditTodoForm;
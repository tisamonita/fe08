// create TodoItem component
function TodoItem({ id, title, description, deadline, status }) {
    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{deadline}</p>
        <p>{status}</p>
      </div>
    );
  }
  
  export default TodoItem;
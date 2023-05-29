import React from "react";

export default function CardTodo(props) {
    console.log(props);

// {res : 
//     id : ""
//     complete : true
//     task: ""}

  return (
    <div className="todo">
    <hr />
      <h2>{props.res.id}</h2>
      <h3>{props.res.task}</h3>
      <h3>{props.res.complete ? 'Selesai' : 'Belum Selesai' }</h3>
      <hr/>
    </div>
  );
}

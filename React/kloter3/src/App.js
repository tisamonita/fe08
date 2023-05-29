import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Body from "./component/body";
import data from "./data.json";
import CardTodo from "./component/cardTodo";

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <>
      <button
        onClick={() => setTodos((prev) => prev.filter((todo) => todo.complete))}
      >
        Filter task Selesai
      </button>
      <button
        onClick={() =>
          setTodos((prev) => prev.filter((todo) => !todo.complete))
        }
      >
        Filter task belum Selesai
      </button>
      <button onClick={() => setTodos([])}>Reset Data</button>
      {todos && todos.map((todo) => <CardTodo res={todo} />)}
    </>
  );
}

// 1. data static
// 2. data dynamic
// 3. state as a props
// 4. callback function

function Belajar() {
  const [count, setCount] = useState(0);
  //DESTRUCTURING. ngerluarin properti pada object

  // function alert(){
  //   alert('Haloo, kamu baru saja menjalankan alert');
  // }

  return (
    <>
      <Header contoh={() => alert("Haloo, kamu baru saja menjalankan alert")} />
      <div>
        <h3>{count}</h3>
      </div>
      <div></div>
      <Body count={count} setCount={setCount} />
    </>
  );
}

export default App;

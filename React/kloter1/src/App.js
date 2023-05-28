import React, { useState } from "react";
import logo from "./logo.svg";
import Header from "./component/header";
import "./App.css";
import movies from "./data";
import CardMovie from "./component/cardMovie";

//step :
//import data to app.js => DONE
//kerjain cardMovie. buat template => DONE
//import component card Movie => done
//looping data di komponen App => done
// send data lewat props

//props : key = value (key data)
//jsx apapun var, ataupun logic js. kita bungkus dengan {}
function App() {
  const [data, setData] = useState(movies.movies);

  return (
    <>
      <div>
        <button
          onClick={() => setData((prev) => prev.filter((data) => !data.status))}
        >
          Filter by belum ditonton
        </button>

        <button onClick={() => setData([])}>Delete All Data</button>

        {data.map((mvData) => {
          return <CardMovie sendData={mvData} />;
        })}
      </div>
      TEST
    </>
  );
}

function Belajar() {
  const [count, setCount] = useState(0);
  const [checkData, setCheckData] = useState(true);

  //props. -> pengiriman data, dari 1 komponen ke komponen lain
  //bisa kirim callback function

  return (
    <div className="App">
      <Header
        count={count}
        setCount={setCount}
        alert={() => {
          alert("ini adalah async function");
        }}
      />
      TEST
      <h3>Count : {count} </h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
    </div>
  );
}

export default App;
export { Belajar };

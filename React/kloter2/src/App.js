import React, {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import { ShowData } from './component/footer';
import data from "./data.json"
import CardTodo from './component/cardTodo';

//import data.json
//Web Todo list. Menampilkan data todolist menggunakan komponen cardTodo

function App(){
  const [dataTodo, setDataTodo] = useState(data);

  return(
    <div className='task-todo'>
        <button onClick={()=>{
          setDataTodo((prev) => prev.filter((elmnt)=>elmnt.complete))
        }} >Filter Task Done</button>

      <button onClick={()=>{
          setDataTodo((prev) => prev.filter((elmnt)=>!elmnt.complete))
        }} >Filter Task onProgress</button>

      <button onClick={()=>setDataTodo([])}>Reset</button>

    {dataTodo.map((todo) => {
      return(
      <CardTodo key={todo.id} todo={todo} />
      )
    })}
    </div>
  )

}



function Belajar() {
  //state adalah sesuatu yang bisa mengontrol perubahan data
  const [nilai, setNilai] = useState(0); //declare state

  //props. Props = proses pengiriman data, dari 1 komponen ke komponen yg lain
  //callback js. function yg dikirimkan untuk dipanggil di function lain
  //props juga bisa berisi callback

  return(
    <div className="App">
    Hi!
    {/* cara masukin komponen lain */}
    <Header alert={()=>{
      alert('Kamu baru saja panggil callback function')
    }} /> 
    
    <ShowData nilai={nilai} student="FE 08" setNilai={setNilai} />
    <div>
      <h3>Nilai : {nilai}</h3>
      <button onClick={()=>setNilai(nilai + 2)} >Tambah nilai</button>
    </div>
    </div>
  )
}

export default App;
export {Belajar};

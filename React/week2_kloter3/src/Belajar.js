import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Belajar() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  //mounting
  //Reguler use
  useEffect(()=>{
    console.log("Berjalan hanya jika pertama kali di render");
    //fetch data yang cuma sekali, tanpa ada interaksi user
  }, [])

    //unmounting
    useEffect(()=>{
      return(()=>{
        console.log("Berjalan ketika render yang lain unmounting")
      })
    }, [])

  //updating
  //Reguler use
  useEffect(()=>{
      console.log("Berjalan ketika web pertama kali di render DAN terjadi perubahan state")
      //terpakai untuk fetch data yang berubah sesuai request user
  }, [count, loading])

  useEffect(()=>{
    console.log("Jalan ketika web dirender pertama kali & terjadi perubahan state APAPUN")
  })

  return (
    <div className="App">
        {count}
        <hr/>
        <button onClick={()=>setCount(count+1)}>Tambah</button>
    </div>
  );
}

export default Belajar;

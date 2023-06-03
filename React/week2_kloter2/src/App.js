import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [planets, setPlanets] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   console.log("Berjalan ketika browser pertama kali render dan ketika terjadi perubahan state apapaun")
  // })

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setPlanets(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [page]);

  //component didMount = mounting
  //regular use
  // useEffect(()=>{
  //   console.log("Berjalan hanya ketika browser pertama kali render")
  // }, [])

  //updating
  //regular use
  // useEffect(()=>{
  //   //nge fetch data yang ketika user melakukan aksi sesuatu, datanya berubah, atau nge fetch data ulang
  //   console.log("Berjalan ketika browser pertama kali render dan ketika terjadi perubahan nilai state yang dituliskan di parameter")
  // }, [count])

  //unmounting
  // useEffect(()=>{
  //   return()=>{
  //     console.log("Berjalan setelah proses mounting/updating dari useeffect lain selesai")
  //   }
  // })
  //mounting
  //updating
  //unmounting
  return (
    <>
      <div className="App">
        {count}
        <button onClick={() => setCount(count + 1)}>Tambah nilai</button>
      </div>
      <div>
        <h2>List Data Planets:</h2>
        {planets && (
          <>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Halaman Sebelumnya
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= planets.count / 10}
            >
              Halaman Selanjutnya
            </button>
          </>
        )}

        {loading && "Loading...."}
        {/* short-circuit dipakai untuk mastiin data udh dapat, baru diproses */}
        {planets &&
          !loading &&
          planets.results.map((planet) => {
            return (
              <>
                <h5>{planet.name}</h5>
                <h6>{planet.population}</h6>
                <h6>{planet.orbital_period}</h6>
                <hr />
              </>
            );
          })}
        {/* useEffect, useState, handleEvent = onClick */}
        {/* buat usestae untuk simpan data, fetch data pake useeffect, API dr useeffect dijadikan ke json. trus  set Data  */}
      </div>

      {/* Case 1: Dapetin data langsung dan ditampilkan langsung ktika load =>diMount/mounting */}
      {/* Case 2: Case ketika user pengen datanya berubah => updating .didUpdate */}
    </>
  );
}

export default App;

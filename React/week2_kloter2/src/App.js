import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Home from "./Component/home";
import AboutUs from "./Component/aboutUs";
import Planets from "./Component/planets";
import DetailPlanet from "./Component/detailPlanet";
import NotFound from "./Component/notFound";

function App() {
  return (
    <>
      <h2>React Router</h2>
      <div className="nav-side">
          <Link className="btn-nav" to="/">
            HOME
          </Link>
          <Link className="btn-nav" to="/planets">
            Planets
          </Link>
          <Link className="btn-nav" to="/aboutus">
            ABOUT US
          </Link>
      </div>

{/* // Link : dipakai untuk navigasi */}
{/* Navigate */}
{/* href */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* Terpisah halaman antara parent route dan child  */}
        <Route path="/planets">
          <Route index element={<Planets/>} />
          <Route path=":planetId" element={<DetailPlanet/>}/>
        </Route>
        {/* tidak terpisah  */}
        {/* <Route path="/planets" element={<Planets/>} >
          <Route path=":id" element={<DetailPlanet/>}/>
        </Route> */}
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      {/* //Home
      //AboutUs
      //planets
      //planets by id */
      }
    </>
  );
}

export default App;

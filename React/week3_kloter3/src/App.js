import React from 'react';
import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Planets from './components/Planets';
import DetailPlanet from './components/DetailPlanet';

function App() {
  return (
    <>
    <h3>Belajar React Router DOM</h3>
    <div className='nav'>
      <Link to="/">
      <div className='btn-nav'>
        Home
      </div>
      </Link>
      <Link to="/aboutus">
      <div className='btn-nav'>
        About Us
      </div>
      </Link>
      <Link to="/planets">
      <div className='btn-nav'>
        Planets
      </div>
      </Link>
    </div>

    <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/aboutus' element={<AboutUs/>}/>
      {/* <Route path= '/planets' element= {<Planets/>}/> */}
      {/* <Route path= 'planets/:id' element={<DetailPlanet/>}/> */}


      <Route path='planets'>
          <Route index element={<Planets/>} />
          <Route path=':PlanetId' element={<DetailPlanet/>} />
      </Route> 
      <Route path="*" element={<>Halaman Tidak Ditemukan</>} />

      {/* <Route path='planets' element={<Planets/>}>
          <Route path=':id' element={<DetailPlanet/>} />
      </Route> */} 

      {/* Nested Route
        /planets/list/detail
        /planets/id
        /planets/create
       */}
    </Routes>

        {/* / => home
        /aboutus => aboutus
        /planets => planets
        /planets/:id => detail planet
        
          

        /urllain => Not Found
    */}
    </>
  );
}

{/* note: bingung tntnang router hooks & useSearchParams. current location */}
export default App;

import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom" //import dari package
import Home from "./Component/Home" //'import dari komponen yang kita buat sendiri
import DetailPlanet from './Component/DetailPlanet';
import AboutUs from './Component/AboutUs';
import Planet from "./Component/Planet";
import NotFound from './Component/NotFound';

function App() {
  return (
   <>
   <h3>Belajar Routing</h3>
    <div className='nav'>
    <Link to="/">
      <div className='btn-nav' >
         Home
      </div>
      </Link>
      <Link to="aboutus">
      <div className='btn-nav'>
        aboutUs
      </div>
      </Link>
      <Link to="planet">
      <div className='btn-nav'>
        Planet
      </div>
      </Link>
    </div>

   
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="aboutus" element={<AboutUs />} />


    {/* <Route path="planet" element={<Planet />} />
    <Route path="planet/:id" element={<DetailPlanet />} />  */}

    <Route path="planet" >
        <Route index element={<Planet />} />
        <Route path=":planetId" element={<DetailPlanet/>} />
    </Route>

    <Route path='*' element={<NotFound />} />
   </Routes>

  {/*  */}
   {/* /planet/add
   /planet/detail/update
   /planet/id/delete */}
    
   {/* / => home 
      /aboutus => AboutUs
      /planet => Planet
      /planet/id => DetailPlanet .
      not found
   */}
   </>
  );
}

export default App;

import React from 'react';
import Navbar from "./Navbar.js";
import logMovies from "./Body.js";
import "bootstrap/dist/css/bootstrap.css";
const page=()=> {
  return (
    <div>
      <Navbar />
      <logMovies/>
    </div>
  )
}

export default page

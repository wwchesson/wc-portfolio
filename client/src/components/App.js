import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Divider
} from "@mui/material";
import NavBar from "./NavBar";
import About from "./About"
import SEPortfolio from "./SEPortfolio";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Divider sx={{ backgroundColor: "white", marginBottom: "40px" }}></Divider>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/seportfolio" element={<SEPortfolio />}  />
      </Routes>



    </div>
  );
}

export default App;

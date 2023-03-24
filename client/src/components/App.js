import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Grid
} from "@mui/material";
import portfoliobg from "../media/portfoliobg.gif"
import NavBar from "./NavBar";
import About from "./About"
import SEPortfolio from "./SEPortfolio";

function App() {

  return (
    <div className="App">
      <NavBar />

      <Grid sx={{backgroundImage: `url(${portfoliobg})`,}}>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/seportfolio" element={<SEPortfolio />}  />
      </Routes>
      </Grid>




    </div>
  );
}

export default App;

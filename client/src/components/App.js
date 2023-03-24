import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Grid, Typography, Card, CardContent
} from "@mui/material";
import portfoliobg from "../media/portfoliobg.gif"
import NavBar from "./NavBar";
import About from "./About"
import SEPortfolio from "./SEPortfolio";

function App() {
  const [websites, setWebsites] = useState([]);
  const [gif, setGif] = useState(false);

  useEffect(() => {
    fetch("/websites")
      .then((r) => r.json())
      .then((data) => setWebsites(data));
  }, []);


  return (
    <div className="App">
      <NavBar />

      <Grid sx={{backgroundImage: `url(${portfoliobg})`}}>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/seportfolio" element={<SEPortfolio websites={websites}/>}  />
      </Routes>
      </Grid>




    </div>
  );
}

export default App;

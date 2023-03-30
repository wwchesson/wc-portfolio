import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import portfoliobg from "../media/portfoliobg.gif";
import NavBar from "./NavBar";
import About from "./About";
import SEPortfolio from "./SEPortfolio";


function App() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    fetch("/websites")
      .then((r) => r.json())
      .then((data) => setWebsites(data));
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Grid sx={{ backgroundImage: `url(${portfoliobg})`, height: "100vh" }}>
        <Routes>
          <Route
            path="/"
            element={<SEPortfolio websites={websites} />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Grid>
    </div>
  );
}

export default App;

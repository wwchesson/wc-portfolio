import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, Container } from "@mui/material";
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

      <Routes>
        <Route path="/" element={<SEPortfolio websites={websites} />} />

        <Route path="/aboutme" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

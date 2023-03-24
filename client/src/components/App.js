import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container,
  Button,
  Link,
} from "@mui/material";
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

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/seportfolio" element={<SEPortfolio />}  />
      </Routes>



    </div>
  );
}

export default App;

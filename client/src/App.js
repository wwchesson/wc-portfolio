import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container,
  Link,
} from "@mui/material";


function App() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    fetch("/websites")
      .then((r) => r.json())
      .then((data) => setWebsites(data));
  }, []);

  return (
    <div className="App">
      <Box sx={{ marginBottom: "20px"}}>
        <Card id="welcome-card">
          <CardContent>
            <Typography>Welcome to Will's Portfolio</Typography>
          </CardContent>
        </Card>
      </Box>

      <Container maxWidth="md">
        <Grid container spacing={4}>
            {websites.map((website) => (
              <Grid item xs={12} sm={6} md={4} >
            <Card key={website.id} sx={{marginBottom: "30px"}}>
              <CardMedia
                component="img"
                image={website.image}
                height="250"
              ></CardMedia>
              <CardContent>
                <a href={website.address} target="_blank">
                  <Typography sx={{justifyContent: "center", display: "flex"}}>{website.name} App</Typography>
                </a>
              </CardContent>
            </Card>
            </Grid>
          ))}
          
          
        </Grid>
      </Container>
    </div>
  );
}

export default App;

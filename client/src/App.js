import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container,
  Button,
} from "@mui/material";
import gawildlife from "./gawildlife.gif";

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
      <Box sx={{ marginBottom: "80px" }}>
        <Card id="welcome-card">
          <CardContent sx={{ margin: "auto", display: "flex" }}>
            <Typography variant="h3" style={{ color: "white" }}>
              <strong>Welcome to Will's Portfolio</strong>
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {gif ? (
        <Card
          sx={{
            display: "flex",
            height: "400px",
            width: "500px",
            margin: "auto",
            marginBottom: "90px",
          }}
        >
          <CardContent
            style={{
              backgroundImage: `url(${gif})`,
              backgroundPosition: "center",
              backgroundSize: "600px 400px",
              backgroundRepeat: "no-repeat",
              width: "100vw",
            }}
          >
            <Card sx={{ display: "flex", height: "50px", width: "50px", justifyContent: "center", backgroundColor: "black", marginLeft: "420px"}}>
              <Button onClick={() => setGif(!gif)}>
                <Typography color="white"><strong>x</strong></Typography>
              </Button>
            </Card>
          </CardContent>
        </Card>
      ) : null}

      <Container maxWidth="md">
        <Grid container spacing={2}>
          {websites.map((website) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                key={website.id}
                sx={{
                  marginBottom: "225px",
                  marginLeft: "30px",
                  height: "500px",
                }}
                style={{ backgroundColor: "#adc4ad" }}
              >
                <CardMedia
                  component="img"
                  image={website.image}
                  height="250"
                ></CardMedia>
                <CardContent>
                  {/* <a href={website.address} target="_blank"> */}
                  <Typography
                    sx={{ justifyContent: "center", display: "flex" }}
                  >
                    {website.name}
                  </Typography>
                  <Button onClick={() => setGif(website.gif)}>
                    <Typography
                      sx={{ justifyContent: "center", display: "flex" }}
                    >
                      See Gif
                    </Typography>
                  </Button>

                  {/* </a> */}
                  <br />
                  <Typography>{website.description}</Typography>
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

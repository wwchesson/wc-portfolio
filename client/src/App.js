import React, {useEffect, useState} from "react"
import { Box, Typography, Card, CardMedia, CardContent, Grid, Container } from "@mui/material"


function App() {
  const [websites, setWebsites] = useState([])

  useEffect(() => {
    fetch("/websites")
    .then(r => r.json())
    .then((data) => setWebsites(data))
  }, [])


  return (
    <div className="App">

    <Box>
      <Card id="welcome-card">
        <CardContent >
          <Typography >Welcome to Will's Portfolio</Typography>
        </CardContent>
      </Card>
    </Box>

    <Container maxWidth="md">
    <Grid container spacing={4}>
      {websites.map((website) => (
        <Card>
          <CardMedia>

          </CardMedia>
          <CardContent>
            
          </CardContent>
        </Card>
      ))}
    </Grid>
    </Container>

    </div>
  );
}

export default App;

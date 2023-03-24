import React, {useState, useEffect} from "react";
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

function SEPortfolio() {
    const [websites, setWebsites] = useState([]);
    const [gif, setGif] = useState(false);

    useEffect(() => {
      fetch("/websites")
        .then((r) => r.json())
        .then((data) => setWebsites(data));
    }, []);

    return (
        <div className="se-portfolio">
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
            <Card
              sx={{
                display: "flex",
                height: "50px",
                width: "50px",
                justifyContent: "center",
                backgroundColor: "black",
                marginLeft: "420px",
              }}
            >
              <Button onClick={() => setGif(!gif)}>
                <Typography color="white">
                  <strong>x</strong>
                </Typography>
              </Button>
            </Card>
          </CardContent>
        </Card>
      ) : null}

      <Container maxWidth="md" sx={{marginTop: "80px"}}>
        <Grid container spacing={2}>
          {websites.map((website) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                key={website.id}
                sx={{
                  marginBottom: "225px",
                  marginLeft: "30px",
                  height: "550px",
                  justifyContent: "center",
                }}
                style={{ backgroundColor: "#fbfc92" }}
              >
                <CardMedia
                  component="img"
                  image={website.image}
                  height="250"
                ></CardMedia>
                <CardContent sx={{ justifyContent: "center", margin: "auto" }}>
                  {/* <a href={website.address} target="_blank"> */}
                  <Typography
                    sx={{ justifyContent: "center", display: "flex" }}
                    variant="h6"
                  >
                    {website.name}
                  </Typography>
                  <Card
                    sx={{
                      justifyContent: "center",
                      marginTop: "10px",
                      marginLeft: "50px",
                      width: "110px",
                      backgroundColor: "#adc4ad",
                    }}
                  >
                    <Button
                      style={{ marginLeft: "20px", textTransform: "lowercase" }}
                      onClick={() => setGif(website.gif)}
                    >
                      <Typography
                        sx={{ justifyContent: "center", display: "flex" }}
                      >
                        See Gif
                      </Typography>
                    </Button>
                  </Card>
                  <br />
                  {website.address ? (
                    <Card
                      sx={{
                        justifyContent: "center",
                        marginLeft: "50px",
                        width: "110px",
                        backgroundColor: "#adc4ad",
                      }}
                    >
                      <Button
                        style={{
                          marginLeft: "20px",
                          textTransform: "lowercase",
                        }}
                      >
                        <Link href={website.address}>live site</Link>
                      </Button>
                    </Card>
                  ) : null}

                  <br />
                  <Typography>{website.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
        </div>
    )
}

export default SEPortfolio
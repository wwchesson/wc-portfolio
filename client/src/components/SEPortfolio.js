import React, { useState, useEffect } from "react";
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
import portfoliobg from "../media/portfoliobg.gif";

function SEPortfolio({websites}) {
  const [gif, setGif] = useState(false);

  return (
    <div className="se-portfolio">

      {gif ? (
        <Card
          sx={{
            display: "flex",
            height: "400px",
            width: "500px",
            margin: "auto",
            padding: "20px",
            marginBottom: "60px",
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

      <Container maxWidth="xlg" >
        <Grid container spacing={1} >
          {websites.map((website) => (
            <Grid item xs={12} sm={6} md={4} sx={{height: "100vh", marginTop: "75px" }}
            key={website.id}>
              <Card
                sx={{
                  height: "625px",
                  border: 4,
                  margin: "auto",
                  borderRadius: "16px",
                  width: "275px",
                  justifyContent: "center",
                }}
                style={{ backgroundColor: "black" }}
              >
                <CardMedia
                  component="img"
                  image={website.image}
                  height="250"
                ></CardMedia>
                <CardContent sx={{ justifyContent: "center", margin: "auto" }}>
                  {/* <a href={website.address} target="_blank"> */}
                  <Typography
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      color: "white",
                    }}
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
                      backgroundColor: "grey",
                    }}
                  >
                    <Button
                      style={{ marginLeft: "20px", textTransform: "lowercase" }}
                      onClick={() => setGif(website.gif)}
                    >
                      <Typography
                        sx={{
                          justifyContent: "center",
                          display: "flex",
                          color: "white",
                        }}
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
                        backgroundColor: "grey",
                      }}
                    >
                      <Button
                        style={{
                          marginLeft: "20px",
                          textTransform: "lowercase",
                        }}
                      >
                        <Link href={website.address} target="_blank">
                          <Typography color="white">live site</Typography>
                        </Link>
                      </Button>
                    </Card>
                  ) : null}

                  <br />
                  <Typography color="white">{website.description}</Typography>
                  <br />
                  <Typography color="white">Technologies: {website.technologies}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default SEPortfolio;

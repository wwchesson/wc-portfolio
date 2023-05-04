import React from "react";
import {
  Container,
  Grid,
  Avatar,
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import AboutPic from "../media/AboutPic.jpg";

function About() {
  return (
    <div className="about">
      <Container>
        <Grid container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "auto" }}>
          <Grid item  sx={{ display: "flex" }}>
            <Box sx={{ margin: "auto", marginBottom: "3rem", marginTop: "3rem" }}>
              <Avatar
                alt="aboutpic"
                src={AboutPic}
                sx={{
                  height: "50vh",
                  width: "50vw",
                  border: 15,
                  borderColor: "white",
                }}
              ></Avatar>
            </Box>
          </Grid>
          <Grid >
            <Card
              sx={{
                borderRadius: "16px",
                border: 15,
                borderColor: "white",
                backgroundColor: "black",
                display: "flex",
                height: "45vh",
                width: "80vw",
                overflow: "scroll",
                margin: "auto",
                marginBottom: "3rem"
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "fantasy" }}
                >
                  <p>
                    <strong>
                    Will Chesson is a Software Engineer from Atlanta, GA. A
                    graduate of UNC-Chapel Hill and the Flatiron School, he is
                    currently looking for full-time work and developing
                    full-stack applications using Ruby on Rails, Python, React,
                    and Material UI.
                    </strong>
                  </p>
                  <p>
                  <strong>
                    Before becoming a developer, Will was a teacher and administrator
                    for over 10 years. He strives to bring brilliance and creativity to
                    all of his work.
                    </strong>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;

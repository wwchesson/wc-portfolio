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
import useMediaQuery from "@mui/material/useMediaQuery";

function About() {

const isFullScreen = useMediaQuery("only screen and (min-width: 800px)")


  return (
    <div className="about">
      <Container>
        <Grid container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", margin: "auto" }}>
          <Grid item  sx={{ display: "flex" }}>
            <Box sx={{ margin: "auto", marginBottom: "3rem", marginTop: "3rem" }}>
              <Avatar
                alt="aboutpic"
                src={AboutPic}
                sx={ isFullScreen ? {
                  height: "65vh",
                  width: "55vw",
                  border: 15,
                  borderColor: "white",
                } : {
                  height: "45vh",
                  width: "65vw",
                  border: 15,
                  borderColor: "white",
                }}


              ></Avatar>
            </Box>
          </Grid>
          <Grid >
            <Card
              sx={isFullScreen ? {
                borderRadius: "16px",
                border: 15,
                borderColor: "white",
                backgroundColor: "black",
                display: "flex",
                height: "35vh",
                width: "70vw",
                overflow: "scroll",
                margin: "auto",
                marginBottom: "3rem"
              } : {
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
              } }
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

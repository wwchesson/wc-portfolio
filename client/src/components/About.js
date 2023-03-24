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
        <Grid container spacing={2} sx={{ display: "flex", height: "100vh" }}>
          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex" }}>
            <Box sx={{ marginTop: "105px", marginLeft: "50px" }}>
              <Avatar
                alt="aboutpic"
                src={AboutPic}
                sx={{
                  height: "300px",
                  width: "300px",
                  border: 6,
                  borderColor: "success.light",
                }}
              ></Avatar>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                border: 4,
                borderColor: "success.light",
                backgroundColor: "black",
                height: "350px",
                width: "500px",
                marginTop: "80px",
                marginLeft: "100px",
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

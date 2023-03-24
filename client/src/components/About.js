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
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Avatar
                alt="aboutpic"
                src={AboutPic}
                sx={{ height: "300px", width: "300px" }}
              ></Avatar>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "16px",
                border: 1,
                backgroundColor: "black",
                height: "300px",
                width: "600px",
              }}
            >
              <CardContent
                sx={{
                  width: "600px",
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  What up y'all?
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

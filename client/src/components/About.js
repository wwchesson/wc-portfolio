import React from "react";
import { Container, Grid, Avatar, Box, Card, CardMedia, CardContent } from "@mui/material";

function About() {
  return (
    <div className="about">
      <Container maxWidth="md">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
            <Box>
                <Avatar>
                    
                </Avatar>
            </Box>

        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;

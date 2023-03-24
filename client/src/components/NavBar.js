import React from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
    Container,
    Button,
    Link,
    Divider
  } from "@mui/material";


function NavBar() {
  return (
    <div>
      <Box sx={{ marginBottom: "50px" }}>
        <Card id="welcome-card">
          <CardContent sx={{ marginTop: "10px", display: "flex" }}>
            <Typography
              variant="h3"
              style={{ color: "white", fontFamily: "fantasy" }}
            >
              <strong>WC</strong>
            </Typography>
            <Typography sx={{position: "absolute", right: "20px"}}>
                <Link href="/about">
            1. About
            </Link>
            </Typography>

          </CardContent>
        </Card>
        <Divider sx={{ backgroundColor: "white" }}></Divider>
      </Box>
    </div>
  );
}

export default NavBar;

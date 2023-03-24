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
  Divider,
} from "@mui/material";

function NavBar() {
  return (
    <div className="navbar">
      <Card
        id="welcome-card"
        sx={{ display: "flex", marginBottom: "1px", height: "90px" }}
      >
        <CardContent
          sx={{ marginTop: "1px", marginLeft: "10px", display: "flex" }}
        >
          <Typography
            variant="h3"
            style={{ color: "white", fontFamily: "fantasy" }}
          >
            <strong>WC</strong>
          </Typography>

          <Box
            sx={{
              display: "flex",
              position: "absolute",
              right: "20px",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h6" sx={{ marginRight: "30px" }}>
              <Link
                href="/about"
                style={{ color: "white", fontFamily: "fantasy" }}
              >
                <strong>1. About</strong>
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                href="/seportfolio"
                style={{ color: "white", fontFamily: "fantasy", marginRight: "15px" }}
              >
                <strong>2. Portfolio</strong>
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default NavBar;

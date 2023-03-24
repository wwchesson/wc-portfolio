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
    <div>
      <Box
        sx={{
          marginBottom: "1px",
          flexGrow: 1,
          flexDirection: "row",
          display: "flex",
        }}
      >
        <Card id="welcome-card" sx={{ display: "flex" }}>
          <CardContent sx={{ marginTop: "10px", marginLeft: "10px", display: "flex" }}>
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
              <Typography sx={{ marginRight: "20px"}}>
                <Link href="/about" style={{ color: "white", fontFamily: "fantasy" }}>
                  <strong>1. About</strong>
                </Link>
              </Typography>
              <Typography>
                <Link href="/seportfolio" style={{ color: "white", fontFamily: "fantasy" }}>
                  <strong>2. Portfolio</strong>
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default NavBar;

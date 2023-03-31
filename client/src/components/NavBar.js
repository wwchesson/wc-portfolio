import React from "react";
import {Link} from "react-router-dom"
import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

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
                to="/aboutme"
                style={{ color: "white", fontFamily: "fantasy" }}
              >
                <strong>1. About</strong>
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                to="/"
                style={{
                  color: "white",
                  fontFamily: "fantasy",
                  marginRight: "15px",
                }}
              >
                <strong>2. Portfolio</strong>
              </Link>
            </Typography>
            <Link
              to="https://github.com/wwchesson"
              target="_blank"
              style={{ fontSize: "x-large", color: "white", margin: "5px" }}
            >
              <GoMarkGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/will-chesson-484457127/"
              target="_blank"
              style={{ fontSize: "x-large", color: "white", marginLeft: "10px", marginTop: "5px" }}
            >
              <BsLinkedin />
            </Link>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default NavBar;

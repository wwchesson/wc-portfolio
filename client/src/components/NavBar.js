import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Menu,
  MenuItem,
  CardMedia,
  Button,
} from "@mui/material";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <div className="navbar">

      <Card id="welcome-card" sx={{ display: "flex", height: "90px", width: "100vw" }}>
        <CardContent sx={{ marginTop: "1px", display: "flex", justifyItems: "center" }}>
          <Button onClick={handleOpen}>
            <Link style={{ fontSize: "3rem", color: "white" }}>
              <HiMenu />
            </Link>
          </Button>

          {/*menu logic*/}

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem component={Link} to="/aboutme">
              About
            </MenuItem>
            <MenuItem component={Link} to="/">
              Portfolio
            </MenuItem>
          </Menu>


      <Typography
        sx={{
          backgroundColor: "black",
          marginLeft: "1rem",
          marginTop: "0.5rem",
          fontFamily: "fantasy",
        }}
        color="white"
        variant="h5"
      >
        <strong>Will's Portfolio</strong>
      </Typography>

          <Box
            sx={{
              display: "flex",
              position: "absolute",
              right: "20px",
              justifyContent: "space-evenly",
            }}
          >
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
              style={{
                fontSize: "x-large",
                color: "white",
                marginLeft: "10px",
                marginTop: "5px",
              }}
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

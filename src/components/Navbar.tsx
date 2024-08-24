"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Box,
  Typography,
} from "@mui/material";

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const NavItems = () => (
    <Box display="flex" flexDirection="column" gap={2} padding={2}>
      <Link href="/aboutus" passHref>
        <Button sx={{ color: "#1A3FB3" }} onClick={toggleDrawer}>
          About
        </Button>
      </Link>
      <Link href="/bioship" passHref>
        <Button sx={{ color: "#1A3FB3" }} onClick={toggleDrawer}>
          Try Now
        </Button>
      </Link>
      <Link href="/sign-up" passHref>
        <Button
          variant="outlined"
          sx={{
            color: "#D3D3D3",
            backgroundColor: "#020817",
            borderColor: "#888888",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#020817",
              borderColor: "#888888",
            },
          }}
        >
          Register
        </Button>
      </Link>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#020817" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Link href="/" passHref>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              RATE MATE
            </Typography>
          </Link>
        </Box>

        {/* Right Section */}
        <Box display={{ xs: "none", md: "flex" }} gap={2}>
          <Link href="/aboutus" passHref>
            <Button sx={{ color: "#fff", "&:hover": { color: "#1A3FB3" } }}>
              About
            </Button>
          </Link>
          <Link href="/bioship" passHref>
            <Button sx={{ color: "#fff", "&:hover": { color: "#1A3FB3" } }}>
              Try Now
            </Button>
          </Link>
          <Link href="/sign-up" passHref>
            <Button
              variant="outlined"
              sx={{
                color: "#D3D3D3",
                backgroundColor: "#020817",
                borderColor: "#888888",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#020817",
                  borderColor: "#888888",
                },
              }}
            >
              Register
            </Button>
          </Link>
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <NavItems />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
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
<<<<<<< Updated upstream
=======
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Loader from "./Loader";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
      <SignedOut>
        <Link href="/sign-up" passHref>
          <Button
            variant="outlined"
            sx={{
              color: "#D3D3D3",
              backgroundColor: "#020817",
              borderColor: "#888888",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1A3FB3",
                borderColor: "#888888",
              },
            }}
            onClick={toggleDrawer}
          >
            Register
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <Link href="/" passHref>
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
            onClick={toggleDrawer}
          >
            Sign Out
          </Button>
        </Link>
      </SignedIn>
>>>>>>> Stashed changes
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#020817" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Link href="/" passHref>
<<<<<<< Updated upstream
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
=======
            <Typography
              variant="h6"
              sx={{
                position: "relative",
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: "#fff",
                display: "inline-block",
                overflow: "hidden",
                background: "linear-gradient(90deg, #ffffff, #3B82F6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textFillColor: "transparent",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
>>>>>>> Stashed changes
              RATE MATE
            </Typography>
          </Link>
        </Box>

        {/* Right Section */}
<<<<<<< Updated upstream
        <Box display={{ xs: "none", md: "flex" }} gap={2}>
=======
        <Box display={{ xs: "none", md: "flex" }} gap={2} alignItems="center">
>>>>>>> Stashed changes
          <Link href="/aboutus" passHref>
            <Button sx={{ color: "#fff", "&:hover": { color: "#1A3FB3" } }}>
              About
            </Button>
          </Link>
<<<<<<< Updated upstream
          <Link href="/bioship" passHref>
=======
          <Link href="/rate" passHref>
>>>>>>> Stashed changes
            <Button sx={{ color: "#fff", "&:hover": { color: "#1A3FB3" } }}>
              Try Now
            </Button>
          </Link>
<<<<<<< Updated upstream
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
=======
          <SignedOut>
            <Link href="/sign-in" passHref>
              <Button
                sx={{ color: "#D3D3D3", textTransform: "none" }}
                variant="text"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up" passHref>
              <Button
                sx={{
                  color: "#D3D3D3",
                  backgroundColor: "#222222",
                  border: "1px solid #888888",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#1A3FB3",
                  },
                }}
                variant="outlined"
              >
                Register
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
>>>>>>> Stashed changes
        </Box>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer}
<<<<<<< Updated upstream
=======
          size="large"
>>>>>>> Stashed changes
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

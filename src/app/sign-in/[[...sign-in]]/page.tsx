import React from "react";
import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#020817" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            <Link href="/" passHref>
              Learn Mate
            </Link>
          </Typography>
          <Button color="inherit" sx={{ fontSize: "small" }}>
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sign-In Section */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", my: 4, color: "white" }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#1F2937",
            p: 3,
            borderRadius: "8px",
          }}
        >
          <SignIn />
        </Box>
      </Box>
    </>
  );
}

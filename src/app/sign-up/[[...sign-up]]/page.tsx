import Navbar from "../../../components/Navbar";
import { SignUp } from "@clerk/nextjs";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Box>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#020817" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            <Link href="/" passHref>
              RATE MATE
            </Link>
          </Typography>
          <Button color="inherit" sx={{ fontSize: "small" }}>
            <Link href="/sign-in" passHref>
              Sign In
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
          Sign Up
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
          <SignUp />
        </Box>
      </Box>
    </Box>
  );
}

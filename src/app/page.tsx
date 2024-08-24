"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Disc } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Conactus";
import Feature from "../components/Feature";

export default function Home() {
  // Determine screen size
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Navbar />
      {/* Hero Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#020817",
          alignItems: "center",
          px: 4,
          py: 6,
          flexDirection: { xs: "column", md: "row" }, // Adjust for responsiveness
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.3rem", md: "5rem" },
              fontWeight: "bold",
              mb: 3,
              color: "#fffff", // Blue color for the text
              lineHeight: 1.2,
            }}
          >
            Rate My Professor
            <br />
            AI Assistant
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              mb: 4,
              color: "#6B7280", // Grey color for the subtitle
            }}
          >
            Get insightful feedback on your professors
            <br />
            with our cutting-edge AI Assistant.
          </Typography>
          <Button
            variant="contained"
            sx={{
              href: "../Rate/page.tsx",
              backgroundColor: "#1D4ED8", // Blue color
              color: "#fff",
              px: 4,
              py: 2,
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#1A3FB3",
              },
            }}
          >
            Get Started
          </Button>
        </Box>

        <Box sx={{ position: "relative", mt: { xs: 4, md: 0 } }}>
          <Image
            src="/Heroo.png"
            alt="AI Assistant Illustration"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Link href="#" passHref>
          <Box
            sx={{ backgroundColor: "#1F2937", padding: 1, borderRadius: "50%" }}
          >
            <Twitter className="w-6 h-6 text-white" />
          </Box>
        </Link>
        <Link href="#" passHref>
          <Box
            sx={{ backgroundColor: "#1F2937", padding: 1, borderRadius: "50%" }}
          >
            <Instagram className="w-6 h-6 text-white" />
          </Box>
        </Link>
        <Link href="#" passHref>
          <Box
            sx={{ backgroundColor: "#1F2937", padding: 1, borderRadius: "50%" }}
          >
            <Disc className="w-6 h-6 text-white" />
          </Box>
        </Link>
      </Box>

      <Aboutus />
      <Feature />
      <Contactus />
      <Footer />
    </Box>
  );
}

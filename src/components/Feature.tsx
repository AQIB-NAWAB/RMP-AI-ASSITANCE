"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { School, Chat, Star } from "@mui/icons-material";

// Custom component to apply gradient to icons
const GradientIcon = ({ icon: IconComponent }: { icon: React.ElementType }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      height: "100px",
      background: "linear-gradient(180deg, #ffffff, #3B82F6)",
      borderRadius: "50%",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      marginBottom: "20px",
      mx: "auto",
      transition: "all 0.3s ease",
    }}
  >
    <IconComponent fontSize="inherit" sx={{ color: "white" }} />
  </Box>
);

export default function FeaturesPage() {
  return (
    <Box sx={{ bgcolor: "#020817", color: "white", minHeight: "50vh", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #ffffff, #3B82F6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: 6,
          }}
        >
          Why Choose Rate Mate?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: School,
              title: "Comprehensive Data",
              description:
                "Access information on thousands of professors across multiple universities.",
            },
            {
              icon: Chat,
              title: "AI-Powered Insights",
              description:
                "Get personalized recommendations based on your preferences and goals.",
            },
            {
              icon: Star,
              title: "Unbiased Reviews",
              description:
                "Our AI analyzes reviews to provide balanced and fair assessments.",
            },
          ].map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  bgcolor: "#1c2a48",
                  color: "white",
                  height: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <GradientIcon icon={feature.icon} />
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ my: 2, fontWeight: "bold" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

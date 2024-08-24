'use client'
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material'
import { School, Chat, Star } from '@mui/icons-material'

export default function FeaturesPage() {
  return (
    <Box sx={{ bgcolor: '#020817', color: 'white', minHeight: '50vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Why Choose Rate Mate?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <School fontSize="large" style={{ color: '#1A3FB3' }} />,
              title: 'Comprehensive Data',
              description:
                'Access information on thousands of professors across multiple universities.',
            },
            {
              icon: <Chat fontSize="large" style={{ color: '#1A3FB3' }} />,
              title: 'AI-Powered Insights',
              description:
                'Get personalized recommendations based on your preferences and goals.',
            },
            {
              icon: <Star fontSize="large" style={{ color: '#1A3FB3' }} />,
              title: 'Unbiased Reviews',
              description: 'Our AI analyzes reviews to provide balanced and fair assessments.',
            },
          ].map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ bgcolor: '#1c2a48', color: 'white', height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  {feature.icon}
                  <Typography variant="h5" component="div" sx={{ my: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }} >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to My MUI Next.js App
        </Typography>
        <Typography variant="body1">
          This is a responsive Next.js app with MUI framework and App Router.
        </Typography>
      </Container>
    </Box>
  )
}
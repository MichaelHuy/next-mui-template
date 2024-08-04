import Container from '@mui/material/Container';
import Image from "next/image";
import Typography from '@mui/material/Typography';
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to My MUI Next.js App
      </Typography>
      <Typography variant="body1">
        This is a responsive Next.js app with MUI framework and App Router.
      </Typography>
    </Container>
  )
}
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fib from './Fib';

function GitHubLink() {
  return (
    <Typography variant="h5">
      <GitHubIcon />
      <Link color="inherit" href="https://gist.github.com/justinykuo/55a324eaa4b3de4f2237f3b6948cef75">
        Github Gist
      </Link>
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ m: 10 }}>
          Demo Grounds (for testing stuff out)
        </Typography>
        <Fib sx={{ m: 15 }} />
        <GitHubLink sx={{ m: 10 }} />
      </Box>
    </Container>
  );
}

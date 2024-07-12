import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Circle } from '@mui/icons-material';
import { Box } from '@mui/material';
import Link from 'next/link';
import Stack from '@mui/material';

export default function ProjectCard({projectName, path, demo, gitLink, demoLink}) {
  return (
    <Card sx={{marginBottom: 3}}>
      <CardMedia
        sx={{ height: 280 }}
        image={path}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
          {projectName}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 2}}>
            <Link href={gitLink} target="_blank" rel="noopener noreferrer">
                <button class = "btn btn-color-2">GitHub</button>
            </Link>

            {demo &&
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                <button class = "btn btn-color-2">Live Demo</button>
            </Link> }

        </Box>
      </CardActions>
    </Card>
  );
}

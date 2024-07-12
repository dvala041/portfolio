import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Circle } from '@mui/icons-material';
import { Box } from '@mui/material';

export default function ProjectCard({projectName, path}) {
  return (
    <Card>
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
        <Button size="small">GitHub</Button>
        <Box sx={{ flexGrow: 1 }} />
      </CardActions>
    </Card>
  );
}

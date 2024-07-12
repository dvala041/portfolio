import Image from "next/image";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Grid } from "@mui/material";
import ProjectCard from "@/components/projectCard";


export default function Projects () {
    
    return (
     <>
     <Container maxWidth="xl" id="mainBody" sx={{ mt: 12 }}>
        <Typography gutterBottom
            sx={{
              textAlign: "center",
              color: 'gray'
            }}
            >
            Browse My Recent
        </Typography>
        <Typography variant="h4" sx = {{
            textAlign: 'center',
            marginBottom: 5,
            letterSpacing: '.2rem',
        }}>
            Projects
        </Typography>

        <Grid container maxWidth rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={4}>
                <ProjectCard projectName="Chore Tracker" path="/portfolio/dish.jpg"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <ProjectCard projectName="Lagos Food Bank" path="/portfolio/lagos.jpeg"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <ProjectCard projectName="Lost and Found App"/>
            </Grid>
        </Grid>
      </Container>
     </>
    )
}
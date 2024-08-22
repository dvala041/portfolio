import Image from "next/image";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Grid } from "@mui/material";
import ProjectCard from "@/components/projectCard";


export default function Projects () {
    
    return (
     <>
     <Container maxWidth="xl" id="mainBody" sx={{ mt: {xs: 4, md: 12} }}>
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

        {/* Project Cards */}
        <Grid container maxWidth rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginBottom: 3}}>
            <Grid item xs={12} md={4}>
                <ProjectCard projectName="Obligo" path="/portfolio/dish.jpg" demo={true} 
                gitLink="https://github.com/dvala041/ChoreTracker" demoLink="https://obligo.vercel.app"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <ProjectCard projectName="Lagos Food Bank" path="/portfolio/lagos.jpeg" demo={true} 
                gitLink="https://github.com/cornellh4i/lagos-volunteers" demoLink="https://lagos-volunteers.vercel.app/login"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <ProjectCard projectName="Lost and Found App" path="/portfolio/LostandFound.jpg"demo={true}
                 gitLink="https://github.com/dvala041/Lost_And_Found" demoLink ="https://www.youtube.com/watch?v=DcUpOmtydV8"/>
            </Grid>
        </Grid>
      </Container>
     </>
    )
}
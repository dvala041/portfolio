import Image from "next/image";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function About () {
    return (
     <>
     <Container maxWidth="xl" id="mainBody" sx={{ mt: {xs: 4, md: 12} }}>
        <Typography gutterBottom
            sx={{
              textAlign: "center",
              color: 'gray'
            }}
            >
            Get to Know More
        </Typography>
        <Typography variant="h4" sx = {{
            textAlign: 'center',
            marginBottom: 5,
            letterSpacing: '.2rem',
        }}>
            About Me
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'start' },
            gap: 4, // Adding some space between the boxes
          }}
        >
          <Box
            sx={{
              display: 'flex',
              paddingLeft: {xs: 0, md: 10},
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink:0
              // paddingLeft: { xs: 'auto', md: 5 },
            }}
          >
            <Image 
              src="/portfolio/clockTower.png"
              width={500}
              height={500}
              alt="David"
              style={{ borderRadius: '20%' }}      
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          > 
            <Typography gutterBottom sx={{marginBottom: {xs:4, md: 0}}}>
                I'm a first generation latino studying Computer Science at Cornell's college of Engineering.
                I first started coding in 9th grade when I taught myself how to program Arduino boards and make small projects with them.
                I enjoyed the callenge a lot so in 10th grade I decided to enroll in Harvard's CS50 and completed the entire course.
                I've always enjoyed the process of solving difficult problems and nothing is more rewarding to me than the satisfaction
                of forging a product through lots of trial and error.
                <br/>
                <br/>
                Fast forward to today where a lot of my work is focused on web development. I deeply enjoy the process of bringing
                a web application to life and have learned a lot through self teaching myself. I am eager to continue learning and aim to build
                a project with that helps a large user base.
            </Typography>
          </Box>
        </Box>
      </Container>
     </>
    )
}
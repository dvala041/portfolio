import Image from "next/image";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Container maxWidth="xl" id="mainBody" sx={{ mt: 12 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'center' },
            gap: 4, // Adding some space between the boxes
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image 
              src="/portfolio/david8 2.jpg"
              width={300}
              height={300}
              alt="David"
              style={{ borderRadius: '50%' }}      
            />
          </Box>

          <Box
            sx={{
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            <Typography gutterBottom
            sx={{
              textAlign: "center",
              color: 'gray'
            }}
            >
              Hello I'm
            </Typography>
            <Typography variant="h4" gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              David Valarezo
            </Typography>
            <Typography variant = "h5" gutterBottom
            sx={{
              textAlign: "center",
              color: 'lightgray',
              fontweight: 'bold'
            }}
            >
              Software Developer
            </Typography>
            <Stack spacing={2} direction = {'row'} sx={{display: 'flex', justifyContent: 'center', gap: '1rem', mt: 3}}>
              <Link href="/Valarezo_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button class = "btn btn-color-2" >Resume</button>
              </Link>
              <Link href="/contact" rel="noopener noreferrer">
                <button class = "btn btn-color-1">Contact</button>
              </Link>
            </Stack>

            <Stack  direction = {'row'} sx={{display: 'flex', justifyContent: 'center', gap: '1rem', mt: 3}}>
            <Link href="http://www.linkedin.com/in/david-valarezo-304782245" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/portfolio/linkedInLogo.PNG"
              width={40}
              height={40}
              alt="David"
              style={{ borderRadius: '50%' }}
              />
              </Link>
              <Link href="https://github.com/dvala041" target="_blank" rel="noopener noreferrer">
              <Image 
              src="/portfolio/githubLogo.PNG"
              width={40}
              height={40}
              alt="David"
              style={{ borderRadius: '50%' }}
              />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}

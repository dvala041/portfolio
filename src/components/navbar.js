import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

function Navbar () {   

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
      <Container maxWidth="xl" sx={{ height: '80px' }}> {/* Make the container fill the height */}
        <Toolbar disableGutters sx={{ height: '100%', alignItems: 'center' }}> {/* Make the toolbar fill the height and vertically center its contents */}

          <Link href="/" passHref>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'sans-serif',
            //   fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            David Valarezo
          </Typography>
          </Link>
            <Box sx={{flexGrow: 1}} />
          <Link href="#section1" passHref>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'sans-serif',
            //   fontWeight: 700,
              display: {xs: 'none', md: 'flex'},
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            About
          </Typography>
          </Link>


          <Link href="#section2" passHref>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'sans-serif',
              display: {xs: 'none', md: 'flex'},
              // fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Projects
          </Typography>
          </Link>

        
          <Link href="#section3" passHref>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'sans-serif',
              display: {xs: 'none', md: 'flex'},
            //   fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Contact
          </Typography>
          
          </Link>

          {/* Menu Icon Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <Link href="/about">
              <MenuItem onClick={handleMenuClose}>
                About
              </MenuItem>
            </Link>
            <Link href="/projects">
            <MenuItem onClick={handleMenuClose}>
                Projects
            </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
    </Container>

  );
}

export default Navbar
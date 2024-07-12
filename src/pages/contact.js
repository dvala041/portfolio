import * as React from 'react';
import { Card, CardContent, Typography, Box, Button, Tooltip } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';


export default function Contact() {
  const email = "dev38@cornell.edu";

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
    navigator.clipboard.writeText(email)
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
    <br/> <br/>
      <Typography gutterBottom
            sx={{
              textAlign: "center",
              color: 'gray'
            }}
            >
            Get In Touch
        </Typography>
        <Typography variant="h4" sx = {{
            textAlign: 'center',
            marginBottom: 5,
            letterSpacing: '.2rem',
        }}>
            Contact Me
        </Typography>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
            p: 2,
            border: 1,
            borderRadius: '5%',
            backgroundColor: 'whitesmoke',
            maxWidth: '300px', // Set maximum width
            margin: 'auto', // Center the Box horizontally
          }}
        
        >
          <Typography variant="body1" sx={{ display: 'inline-block', mr: 2 }}>
            {email}
          </Typography>
          <Tooltip title="Copy to clipboard" sx={{alignItems: 'center'}}>
            <Button variant="contained" startIcon={<ContentCopy />}  onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
            sx={{
                backgroundColor:"darkgray", '&:hover': {backgroundColor: 'lightgray'}
                }} />
          </Tooltip>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={3000}
            open={open}
            onClose={handleClose}
            message="Copied!"
            key={vertical + horizontal}
         />
        </Box>
        </>
  );
}

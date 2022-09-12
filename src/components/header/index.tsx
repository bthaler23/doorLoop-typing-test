import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default () => {
  return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" textAlign='center' component="div" sx={{ flexGrow: 1 }}>
            Brandon Thaler Typing Test
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
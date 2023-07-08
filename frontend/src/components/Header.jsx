import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';


// Styling for the app bar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

// Styling for the app name
const StyledAppName = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

// Styling for the buttons
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
const Header = () => {
  return (
    <div>
      <StyledAppBar position="static">
      <Toolbar>
        <StyledAppName variant="h6" component="div">
          Indian Football Foundation
        </StyledAppName>
        <StyledButton component={Link} to="/login" color="inherit">
          Login
        </StyledButton>
        <StyledButton component={Link} to="/register" color="inherit">
          Register
        </StyledButton>
      </Toolbar>
    </StyledAppBar>
    </div>
  )
}

export default Header;
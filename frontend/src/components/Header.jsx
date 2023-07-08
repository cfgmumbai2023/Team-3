import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Logo from '../assets/logo_IFF.png';

// Styling for the app bar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

// Styling for the app name container
const StyledAppNameContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

// Styling for the logo image
const StyledLogo = styled('img')(({ theme }) => ({
  height: '40px',
  marginRight: theme.spacing(1),
}));

// Styling for the app name
const StyledAppName = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

// Styling for the buttons container
const StyledButtonsContainer = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
}));

// Styling for the buttons
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'rgb(181, 127, 132)',
    textDecoration: 'none',
    color: 'black',
  },
}));

const Header = () => {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledAppNameContainer>
            <StyledLogo src={Logo} alt="Logo" />
          
          </StyledAppNameContainer>
          <StyledButtonsContainer>
            <StyledButton component={Link} to="/login" color="inherit">
              Login
            </StyledButton>
            <StyledButton component={Link} to="/register" color="inherit">
              Register
            </StyledButton>
          </StyledButtonsContainer>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;

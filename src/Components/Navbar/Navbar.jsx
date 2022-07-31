import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Link} from 'react-router-dom';
import "./Navbar.css"
import logo from "../../Images/logo-ms.jpg";

const pages = ['Productos', 'Servicios', 'Contacto'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <div>
            <Link to= {`/`}  style={{ color: 'inherit', textDecoration: 'none' }}  >
              <img src={logo} alt="logo brand" className="logoMS"/>
            </Link>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' } 
              }}
              
            >
              {pages.map((page) => (
                <MenuItem key={page}  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center"   >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1.5, color: 'white', display: 'block', fontSize:'1.2rem'}}
                className="categorias" 
                >
                <Link to= {`/category/${page}`}  style={{ color: 'inherit', textDecoration: 'none' }}  >
                  {page}
                </Link>
              
                
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Español / English">
            <FormControlLabel  control={<Switch color='info' size="small"/>} label="ES | EN" />
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
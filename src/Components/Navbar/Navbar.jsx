import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MenuItems from './MenuItems';
import MenuItemsLG from './MenuItemsLG';
import {Link} from 'react-router-dom';
import "./Navbar.css"
import logo from "../../Images/logo-ms.jpg";
import { useContext } from 'react';
import { MyContext } from '../../Context/CustomContext';





const ResponsiveAppBar = () => {
  const {menuItems} = useContext(MyContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [idioma, setIdioma] = React.useState('esp');


  



  const handleChange = (event) => {
    setIdioma(event.target.value);
  };
  

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
              {menuItems.map((menu, index) => (
                <MenuItems items={menu} key={index} />
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((menu, index) => (
              <MenuItemsLG items={menu} key={index} handleCloseNavMenu={handleCloseNavMenu} />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={idioma}
          label="Language"
          onChange={handleChange}
          sx={{color:'white', fontWeight:'300'}}
        >
          <MenuItem value={'esp'} sx={{ fontWeight:'300'}} >ESP</MenuItem>
          <MenuItem value={'eng'} sx={{ fontWeight:'300'}}>ENG</MenuItem>
          
        </Select>
        </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
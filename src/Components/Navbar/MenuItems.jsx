import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function MenuItems({items}) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
    {
      items['submenu'] ? (
        <MenuItem key={items.title}  >
        <Button 
         id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
        type="button" 
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
         <div style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
                    {items.title}
                    <ArrowDropDownIcon />
        </div>
        </Button>
     
        <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >

                {items.submenu.map((submenu, index) => (
                  
                    <MenuItem onClick={handleClose} key={index} >
                        <Link to={`/serv/${submenu.id}`}   style={{ color: 'inherit', textDecoration: 'none' }}  >
                        {submenu.title}
                        </Link>
                    </MenuItem>
                ))}

            </Menu>
        </MenuItem>
      ) : (
            <MenuItem key={items.title}  >
              <Button>
                  <Link to= {`/category/${items.title}`}  style={{ color: 'inherit', textDecoration: 'none' }}  >
                    {items.title}
                  </Link>
              </Button>
                </MenuItem>
      )
    }
    </>
  )
}

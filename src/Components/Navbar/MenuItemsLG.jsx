import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function MenuItemsLG( {items}, handleCloseNavMenu) {


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
          <>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    key={items.title}
                    sx={{ my: 1.5, color: 'white', display: 'block', fontSize:'1.2rem'}}
                    className="categorias" 
                    onMouseOver={handleClick}
                    >
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}} >
                    {items.title}
                    <ArrowDropDownIcon/>
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
                    <MenuItem onClick={handleClose} key={index}   sx={{fontSize:'18', backgroundColor: 'white', color:'primary.main',  '&:hover':{backgroundColor: 'secondary.main'}}}>
                        <Link to={`/serv/${submenu.id}`}   style={{ color: 'inherit', textDecoration: 'none' }}  >
                        {submenu.title}
                        </Link>
                    </MenuItem>
                ))}

            </Menu>
          </>

        ) : (
            <Button
              
            key={items.title}
            onClick={handleCloseNavMenu}
            sx={{ my: 1.5, color: 'white', display: 'block', fontSize:'1.2rem'}}
            className="categorias" 
            >
                <Link to= {`/category/${items.title}`}  style={{ color: 'white', textDecoration: 'none' }}  >
                {items.title}
                </Link>
          </Button>
        )
      }
      </>
    
  )
}



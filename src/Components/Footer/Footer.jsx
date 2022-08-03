//@ts-check
import  Container from '@mui/material/Container';
import  Box from '@mui/material/Box';
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import "./Footer.css"

export default function Footer () {
  return (

    <>
        <Box 
        className='footerEstilos'
        mt={{xs:1, sm:2, lg:2}} 
        px={{xs:3, sm:0, lg:0}} 
        py={{xs:5, sm:0.5, lg:0.5}} 
        style={{position:'relative', left:'0', bottom:'0', right:'0'}}
        >
            <Container maxWidth='lg' >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Box borderBottom={1} color='white'> <p className='email'>msenoransperez@gmail.com</p>   </Box>
                        <Box>  <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Ir a</Link>   </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Box >   </Box>
                        <Box>     </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4}>
                        <Box >   </Box>
                        <Box>    </Box>
                        
                    </Grid>
                </Grid>
                <Box textAlign='center' pt={{xs:5, sm:0, lg:0}} pb={{xs:5, sm:0, lg:0}} color='#98C1D9'>
                MS Miguel Señoráns &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    </>
  )
}


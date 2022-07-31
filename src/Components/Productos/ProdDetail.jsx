import React from 'react'
import './Productos.css'
import Typography from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import  Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';


export default function ProdDetail({prodElegido}) {
  return (
    <>
        <Box className='boxProdDetail'>
            <Container  maxWidth='lg' sx={{marginRight:'0', marginLeft:'0'}} >
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} sm={5} lg={5}  >
                       
                        <Box sx={{width:'10/10', padding:'2rem', display:'flex', alignItems:'center', justifyContent:'center'}} >
                            <img src={prodElegido.picture} alt={prodElegido.title} className="imagenDetail"/>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={7} lg={7} >
                        <div >
                            <Typography variant='h4' my={3} color='primary.main'>  {prodElegido.title}  </Typography>
                            <Typography variant='body2' my={2} color='primary.main' > Condición: {prodElegido.condition}  </Typography>
                            <Typography variant='body1' my={2} color='primary.main'>  {prodElegido.description}  </Typography>
                            <Typography variant='body4' my={2} color='info.main'>  insertar adjuntos! </Typography>
                        </div>
                        <div style={{marginTop:'1rem', marginBottom:'1rem'}}>
                            <Button   sx={{ backgroundColor: 'info.main', color:'white',  '&:hover':{backgroundColor: 'secondary.main'}}}>
                                <Link to={'/category/Contacto'} style={{ color: 'inherit', textDecoration: 'none' }} >  Consultar </Link>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
   </>

  )
}

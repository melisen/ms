import React from 'react'
import  Box from '@mui/material/Box';
import  Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export default function Parametrizacion() {
  return (
    <>
      <Box className='boxServicio'>
            <Container  maxWidth='lg'>
              <Typography variant='h2' my={3} color='primary.main' > Parametrización  </Typography>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} sm={6} lg={6}>
                      <h2>Foto parametrización</h2>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                      <Typography variant='body2' my={2} color='primary.main' fontSize={20}  >  Realizamos la programación de los parámetros de soldadura en la planta del cliente.</Typography>
                      <Typography variant='body2' my={2} color='primary.main' fontSize={20}  >  Contamos con la experiencia y el instrumental adecuado para realizar un trabajo de óptima calidad.</Typography>  
                      <Typography variant='body2' my={2} color='primary.main' fontSize={20}  >  Con el servicio se entrega la documentación correspondiente.</Typography>    
                    </Grid>
                  </Grid>
                  <div style={{width:'10/10', marginTop:'1rem', marginBottom:'1rem', display:'flex', flexDirection:'row'}}>
                            <Button   sx={{ backgroundColor: 'info.main', color:'white',  '&:hover':{backgroundColor: 'secondary.main'}}}>
                                <Link to={'/category/Contacto'} style={{ color: 'inherit', textDecoration: 'none' }} >  Consultar </Link>
                            </Button>
                        </div>
            </Container>
      </Box>
    </>
  )
}

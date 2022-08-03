//@ts-check
import React from 'react'
import '../Servicios.css'
import Typography from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import  Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import dis1 from '../../../Images/1-dis2d.jpg';
import dis2 from '../../../Images/2-dis3d.jpg';
import dis3 from '../../../Images/3-dis.jpg';
import dis4 from '../../../Images/4-dis.jpg';
import dis8 from '../../../Images/8-dis.jpg';





const fotosDis = [
  {
    img: dis1,
    author: 'Diseño 2D',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: dis3,
    author: 'Diseño 3D',
  },
  {
    img: dis2,
    author: 'Diseño 3D',

  }
  
];
const fotosConst = [
  {
    img: dis4,
    author: 'Pieza terminada',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: dis8,
    author: 'Pieza instalada',
  }
]


      
  

export default function Disenio() {
  return (
    <>
    <Box className='boxServicio'>
            <Container  maxWidth='lg'>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} sm={6} lg={6}>
                        
                            <Typography variant='h2' my={3} color='primary.main'> Diseño  </Typography>
                            <Typography variant='body2' my={3} color='primary.main' fontSize={18}>Modificar la configuración de su máquina actual puede ser una solución rápida y económica para integrar un nuevo producto o mejorar el proceso actual.</Typography> 
                            <Typography variant='body2' my={3} color='primary.main' fontSize={18}> A partir de planos existentes o de un relevamiento propio, diseñamos la nueva configuración de su máquina de soldar para integrarla al nuevo proceso.</Typography>                    
                            <Stack spacing={3} mt={6}>
                            {
                              fotosDis.map((item)=>
                              <Card sx={{ maxWidth: 380}} >
                              <CardMedia
                                  component="img"
                                  height="200"
                                  image={item.img}
                                  alt={item.author}
                              />
                            </Card>
                              )
                            }
                          </Stack>
                          
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                        <div >
                           
                            

                              <Typography variant='h2' my={3} color='primary.main' > Construcción  </Typography>
                              <Typography variant='body2' my={3} color='primary.main' fontSize={18}>  
                            Construimos el conjunto diseñado respetando los standards internacionales de materiales, tratamiento térmico y construcción.
                              </Typography>
                              <Typography variant='body2' my={3} color='primary.main' fontSize={18}>  
                              Realizando las revisiones de diseño, en conjunto con el cliente, implementando la solución óptima. Instalamos la solución en la planta del cliente, realizando el Tryout y la parametrización de soldadura hasta alcanzar el OK de calidad.
                              </Typography>
                              <Stack spacing={3}>
                            {
                              fotosConst.map((item)=>
                              <Card sx={{ maxWidth: 380}} >
                              <CardMedia
                                  component="img"
                                  height="200"
                                  image={item.img}
                                  alt={item.author}
                              />
                            </Card>
                              )
                            }
                          </Stack>
                            
                        </div>
                        
                    </Grid>
                </Grid>
                <div style={{width:'10/10', marginTop:'2rem', marginBottom:'1rem', display:'flex', flexDirection:'row'}}>
                            <Button   sx={{ backgroundColor: 'info.main', color:'white',  '&:hover':{backgroundColor: 'secondary.main'}}}>
                                <Link to={'/category/Contacto'} style={{ color: 'inherit', textDecoration: 'none' }} >  Consultar </Link>
                            </Button>
                        </div>
            </Container>
        </Box>
    </>
  )
}

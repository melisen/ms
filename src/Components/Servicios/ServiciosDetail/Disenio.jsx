import React from 'react'
import '../Servicios.css'
import Typography from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import  Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import dis1 from '../../../Images/1-dis2d.jpg';
import dis2 from '../../../Images/2-dis3d.jpg';
import dis3 from '../../../Images/3-dis.jpg';
import dis4 from '../../../Images/4-dis.jpg';
import dis5 from '../../../Images/5-dis.jpg';
import dis6 from '../../../Images/6-dis.jpg';
import dis7 from '../../../Images/7-dis.jpg';
import dis8 from '../../../Images/8-dis.jpg';




//array de fotos con epigrafe harcode
const itemData = [
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

  },
  {
    img: dis4,
    author: 'Pieza terminada',
    cols: 2,
  },
  {
    img: dis5,
    cols: 2,
  },
  {
    img: dis6,
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: dis7,

  },
  {
    img: dis8,
    author: 'Implementación en planta del cliente',
  }
  
];




export default function Disenio() {
  return (
    <>
    <Box className='boxServicio'>
            <Container  maxWidth='lg'>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} sm={6} lg={6}>
                        <div>
                        <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Proceso de diseño y construcción:</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            sx={{ backgroundColor: 'rgba(50, 71, 102, 0.54)' }}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(50, 71, 102, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} >
                        <div >
                            <Typography variant='h2' my={3} color='primary.main'> Diseño  </Typography>
                            <Typography variant='body1' my={2} color='primary.main'>  
                            Modificar la configuración de su máquina actual puede ser una solución rápida y económica para integrar un nuevo producto o mejorar el proceso actual. A partir de planos existentes o de un relevamiento propio, diseñamos la nueva configuración de su máquina de soldar para integrarla al nuevo proceso.
                              </Typography>
                              <Typography variant='h2' my={3} color='primary.main'> Construcción  </Typography>
                            <Typography variant='body1' my={2} color='primary.main'>  
                            Construimos el conjunto diseñado respetando los standards internacionales de materiales, tratamiento térmico y construcción.
                              </Typography>
                              <Typography variant='body1' my={2} color='primary.main'>  
                              Realizando las revisiones de diseño, en conjunto con el cliente, implementando la solución óptima. Instalamos la solución en la planta del cliente, realizando el Tryout y la parametrización de soldadura hasta alcanzar el OK de calidad.
                              </Typography>
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

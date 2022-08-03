import React from 'react'
import Typography from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import  Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CheckIcon from '@mui/icons-material/Check';
import retro1 from '../../../Images/retro-1.jpg';
import retro2 from '../../../Images/retro-2.jpg';

export default function Retrofitting() {
  const checked = true;
  return (
    <>
    <Box className='boxServicio'>
    <Container  maxWidth='lg' >
      <Typography variant='h2' my={3} color='primary.main' > Retrofitting  </Typography>
      <Slide direction="left" in='true' mountOnEnter unmountOnExit {...(checked ? { timeout: 500 } : {})}>
      <Grid container spacing={2} >
      <Grid item xs={12} sm={6} lg={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
              <Typography variant='body2'  color='primary.main' fontSize={24}> ¿Desea producir otros componentes con su equipamiento existente o que su proceso sea en general más eficiente?</Typography>  
            </Grid>
        <Grid item xs={12} sm={6} lg={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
            <Card sx={{ maxWidth: 350}} >
                                  <CardMedia
                                      component="img"
                                      height="200"
                                      image={retro1}
                                      alt='tablero'
                                  />
              </Card>
          </Grid>
          
        </Grid>
        </Slide>
      </Container>
      <Container  maxWidth='lg'>
      <Slide direction="right" in='true' mountOnEnter unmountOnExit {...(checked ? { timeout: 1000 } : {})}>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} lg={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Typography variant='body2' my={2} color='primary.main' fontSize={20}  >  En los últimos años se ha demostrado que el reequipamiento de instalaciones preexistentes es una opción más razonable que su sustitución por maquinaria nueva, y es que también puede incrementar la productividad y la eficiencia energética cambiando los componentes más antiguos y añadiendo los últimos avances tecnológicos.</Typography>  
            </Grid>
          <Grid item xs={12} sm={6} lg={6} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Card sx={{ maxWidth: 350}} >
                                  <CardMedia
                                      component="img"
                                      height="200"
                                      image={retro2}
                                      alt='tablero'
                                  />
            </Card>
          </Grid>
        </Grid>
        </Slide>
      </Container>
      <Container  maxWidth='lg'>
      <Typography variant='h4' mt={6} color='info.main' > Ventajas del reequipamiento  </Typography>
      <ul>
        <li style={{listStyleType:'none'}}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> <CheckIcon color='info'/>  <Typography variant='body1' my={1} ml={1} color='primary.main'>  Costos de inversión considerablemente menores.</Typography> </div> </li>
        <li style={{listStyleType:'none'}}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> <CheckIcon color='info'/>  <Typography variant='body1' my={1} ml={1} color='primary.main'>  Los operarios de la máquina se familiarizan rápidamente ya que las funciones básicas permanecen iguales.</Typography> </div> </li>
        <li style={{listStyleType:'none'}}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> <CheckIcon color='info'/>  <Typography variant='body1' my={1} ml={1} color='primary.main'>  No se requieren inversiones costosas, ya que se aprovecha la misma máquina.</Typography> </div> </li>
        <li style={{listStyleType:'none'}}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> <CheckIcon color='info'/>  <Typography variant='body1' my={1} ml={1} color='primary.main'>  En general, se reducen los tiempos del ciclo.</Typography> </div> </li>
        <li style={{listStyleType:'none'}}> <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}> <CheckIcon color='info'/>  <Typography variant='body1' my={1} ml={1} color='primary.main'>  Aumento de la calidad de producción.</Typography> </div> </li>
        <li style={{listStyleType:'none'}}><div style={{width:'10/10', marginTop:'1rem', marginBottom:'1rem', display:'flex', flexDirection:'row'}}>
                            <Button   sx={{ backgroundColor: 'info.main', color:'white', marginBottom:'20px',  '&:hover':{backgroundColor: 'secondary.main'}}}>
                                <Link to={'/category/Contacto'} style={{ color: 'inherit', textDecoration: 'none' }} >  Consultar </Link>
                            </Button>
                        </div></li>
      </ul>
      
      </Container>
    </Box>
    </>
  )
}

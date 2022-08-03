import React from 'react'
import './Contacto.css'
import Typography from '@mui/material/Typography';
import  Container from '@mui/material/Container';
import  Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contacto() {
  return (
    <>
    <Box className='boxServicio'>
            <Container  maxWidth='lg' px={0} sx={{alignItems:'center', justifyContent:'center' }}>
              <Typography variant='h2' fontWeight={500} my={3} color='primary.dark' textAlign='center'> Contacto </Typography>
            </Container>
            <Container  maxWidth='lg'   sx={{backgroundImage:'linear-gradient(120deg, #98C1D9 1%, #263850 15%, #263850 85%, #98C1D9) ', margin:'0'}}>
               <Box py={{xs:5, sm:4, lg:4}} sx={{display:'flex', flexDirection:'column', alignItems:'center'}} >
                    <Typography variant='body2' fontSize={18} mb={3} color='secondary.main' textAlign='center'>
                       Para consultas técnicas por favor enviar un correo especificando asunto a:
                       </Typography>
                    
                      <Paper elevation={3}
                      sx={{padding:'0 20px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly' }}>
                        
                          <MailOutlineIcon color='info' />
                          <Typography variant='body1' fontSize={18} my={3} color='info.main' textAlign='center'> msenoransperez@gmail.com </Typography>
                        
                      </Paper>
                 
                </Box>
            </Container>
    </Box>
    </>
  )
}

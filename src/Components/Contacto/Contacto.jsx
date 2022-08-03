import React from 'react'
import './Contacto.css'
import Typography from '@mui/material/Typography';
import  Box from '@mui/material/Box';
import  Container from '@mui/material/Container';

export default function Contacto() {
  return (
    <>
    <Box className='boxServicio'>
            <Container  maxWidth='lg'>
            <Typography variant='h2' my={3} color='primary.main'> Contacto </Typography>
            </Container>
    </Box>
    </>
  )
}

import React from 'react'
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Contacto.css'
import  Box from '@mui/material/Box';

export default function Contacto() {
  const [name, setName] = useState(() => {
    const hayNombre = localStorage.getItem('name')
    return hayNombre ? JSON.parse(hayNombre) : ""
    });
const [phone, setPhone] = useState(() => {
const hayTel = localStorage.getItem('phone')
return hayTel ? JSON.parse(hayTel) : ""
});
const [email, setEmail] = useState(()=>{
const hayEmail = localStorage.getItem('email')
return hayEmail ? JSON.parse(hayEmail) : ""
});

const [open, setOpen] = React.useState(false);


function handleClickEnviar(){
  
  clearForm();
}

function CamposValidados(){
  if(name==="" || phone==="" || email===""){
      setOpen(true)
   }else {
      handleClickEnviar();
      
  }
}

function validarEmail(valor){
  let re = /\S+@\S+\.\S+/;
  if(  re.test(valor)  && (valor!=="")){
      setEmail(valor)
      localStorage.setItem('email', JSON.stringify(valor))    
  }
}

function validarName(valor){            
  if( (/^[A-z ]+$/.test(valor)) && (valor!=="") ){
  setName(valor)
  localStorage.setItem('name', JSON.stringify(valor))    
  } 
}

function validarPhone(valor){
  let numTel = /^\d{8,12}$/;
  if( valor.match(numTel)  && (valor!=="") ){
      setPhone(valor)
      localStorage.setItem('phone', JSON.stringify(valor))    
  }
}
function clearForm(){
  setName("");
  localStorage.setItem('name', JSON.stringify(""))    
  setEmail("");
  localStorage.setItem('email', JSON.stringify(""))    
  setPhone("")
  localStorage.setItem('phone', JSON.stringify(""))    
}

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
  return;
  }
  setOpen(false);
};

const action = (
  <React.Fragment >
  
    <IconButton
        size="small"
        aria-label="close"
        color="primary"
        onClick={handleClose}
    >
        <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

  return (
    <>
    <Box className='box' component="form">
    <Paper  className='divFormulario' elevation={0}>
                <div><Typography variant="h5" color='secondary.main' style={{textAlign:'center'}}>Envíenos su consulta</Typography></div>
                <div className='divTexfields'>
                  
                  <TextField        onChange={(e)=>{ validarName(e.target.value)}} variant="outlined" type={"text"} placeholder={"Nombre"} sx={{ width:8/10, marginTop:'0.7rem', padding:'10px' }}/>
                  <TextField        onChange={(e)=> {validarPhone(e.target.value)}}  variant="outlined" type={"tel"} placeholder={"Tel"} sx={{ width:8/10, marginTop:'0.7rem', padding:'10px' }} />
                  <TextField        onChange={(e)=> validarEmail(e.target.value)}   variant="outlined" type={"email"} placeholder={"Email"} sx={{ width:8/10, marginTop:'0.7rem', padding:'10px' }}/>
                </div>
                
                <div className='divMensaje'>
                  <TextField  minRows={5} id="outlined-multiline-flexible" label="Mensaje" multiline variant="outlined" placeholder={"Mensaje"} sx={{ width:10/10, marginTop:'0.7rem', padding:'10px' }}/>
                </div>
                
                <div className='divEnviar'>
                  <Button onClick={()=>{
                      CamposValidados()
                  }} variant="contained">Enviar</Button>
                </div>
            </Paper>
            <Snackbar 
                    sx={{backgroundColor:'#3D5A80'}}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Debe completar correctamente los campos para enviar su consulta"
                    action={action}
                />
    </Box>
  </>
  )
}

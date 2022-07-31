import React from 'react'
import { useParams } from 'react-router-dom'
import Disenio from "./ServiciosDetail/Disenio";
import Automatizaciones from "./ServiciosDetail/Automatizaciones";
import Capacitacion from "./ServiciosDetail/Capacitacion";
import Parametrizacion from "./ServiciosDetail/Parametrizacion";
import Puesta from "./ServiciosDetail/Puesta";
import Retrofitting from "./ServiciosDetail/Retrofitting";


export default function ServDetailContainer() {

    let {ServId} = useParams();



  return (
    <>
    {(ServId === "1") && <Disenio/>}
    {(ServId === "2") && <Puesta/>}
    {(ServId === "3") && <Automatizaciones/>}
    {(ServId === "4") && <Parametrizacion/>}
    {(ServId === "5") && <Capacitacion/>}
    {(ServId === "6") && <Retrofitting/>}

    </>
  )
}

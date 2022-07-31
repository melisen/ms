import React from 'react'
import { createContext,  useState } from 'react';
import imgDisenio from "../Images/2-dis3d.jpg";
import imgPuesta from "../Images/puesta-portada.jpg";
import imgAuto from "../Images/2-dis3d.jpg";
import imgParam from "../Images/parametrizacion.jpg";
import imgCapac from "../Images/certificado.jpg";
import imgRetrof from "../Images/retrofit-portada.png";
import mfc from "../Images/productos/mfc.jpg"
import tiristores from "../Images/productos/tiristores.jpg"


export const MyContext = createContext();


export default function CustomContext({children}) {
    const [english, setEnglish] = useState(false);

    function switchToEnglish(){
        setEnglish((english) => !english);
    }


    const arrServicios = [
      {
          id:"1",
          title: "Diseño",
          picture: imgDisenio,
          description: "A partir de planos existentes o relevamiento propio, diseñamos la nueva configuración de su máquina de soldar."
      },
      {
          id:"2",
          title: "Puesta en marcha",
          picture: imgPuesta,
          description: "De equipos de soldadura por punto, soldadura indirecta,  máquinas pedestales y alimentadores de tuercas o tornillos."
      },
      {
          id:"3",
          title: "Automatizaciones",
          picture: imgAuto,
          description: "Descripción card Automatizaciones"
      },
      {
          id:"4",
          title: "Parametrización",
         picture: imgParam,
          description: "Programación de los parámetros de soldadura en planta, con instrumental de óptima calidad. Proveemos la documentación correspondiente."
      },
      {
          id:"5",
          title: "Capacitación",
          picture: imgCapac,
          description: "Orientada a la necesidad del cliente: implementar programas y proyectos de mejora, y evaluar rápidamente los problemas diarios.  "
      },
      {
          id:"6",
          title: "Retrofitting",
          picture:imgRetrof,
          description: "Incremente la productividad y la eficiencia energética cambiando los componentes más antiguos y añadiendo los últimos avances tecnológicos."
      }
  ]


  const arrProductos = [
    {
      id:"101",
      title:'MFC-3007',
      picture: mfc,
      condition: 'usado',
      description: 'Control de soldadura de media frecuencia Marca: Serra Modelo: Serratron MFC-3007'
    },
    {
      id:"102",
      title:'PACK DE TIRISTORES',
      picture: tiristores,
      condition: 'usado',
      description: 'Pack de Tiristores tipo Tafer hasta 1400Amper'
    }
  ]

  return (
    <>
    <MyContext.Provider value={{ english, setEnglish, switchToEnglish, arrServicios, arrProductos}}>
                {children}
    </MyContext.Provider>
    </>
  )
}

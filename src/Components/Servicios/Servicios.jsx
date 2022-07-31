import React from 'react'
import Servicio from './Servicio';
import "./Servicios.css"
import {useContext} from 'react'
import { MyContext } from '../../Context/CustomContext';


export default function Servicios() {

    const {arrServicios} = useContext(MyContext);
    

  return (
    <>
     <div className="serviciosList">
    {
          arrServicios.map((item)=>
            <Servicio key={item.id} {...item} />
          )
        }
    </div>
    </>
  )
}

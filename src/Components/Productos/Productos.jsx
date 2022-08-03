import React from 'react'
import {useContext} from 'react'
import { MyContext } from '../../Context/CustomContext';
import Producto from './Producto';
import './Productos.css'


export default function Productos() {
  const {arrProductos} = useContext(MyContext);
    

  return (
    <>
    <div>
      Equipamientos usados
    </div>
     <div className="productosList">
    {
          arrProductos.map((item)=>
            <Producto key={item.id} {...item} />
          )
        }
    </div>
    </>
  )
}
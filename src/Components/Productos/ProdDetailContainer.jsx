import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../Context/CustomContext';
import ProdDetail from './ProdDetail';

export default function ProdDetailContainer() {
    const {arrProductos} = useContext(MyContext);
    const [prodElegido, setProdElegido] = useState({});

    let {ProdId} = useParams();

    useEffect(() => {
      let aux = arrProductos.find((element)=> element.id === ProdId);
      setProdElegido(aux);
    }, [ProdId])
    

  return (
    <>
    {prodElegido && <ProdDetail prodElegido={prodElegido} />}
    </>
  )
}

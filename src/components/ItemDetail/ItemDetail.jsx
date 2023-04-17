
import "./ItemDetail.css"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({id, nombre, precio, img,desc}) => {
return (
    <div>
        <div className="contenedorItemDetail">
            <div className="div-detalle dos">
        <h2 className="titulo-detalle dos">{nombre}</h2>
        <h3 className="precio-detalle dos">${precio}</h3>
        <p className="desc-detalle dos">{desc}</p>
        <ItemCount/>
        <button className="boton-detalle"><Link to={"/"} className="link-detalle">Volver</Link></button>
            </div>
        <img src={img} alt={nombre} className="img-detalle uno"/>
        </div>
    </div>
)
}

export default ItemDetail
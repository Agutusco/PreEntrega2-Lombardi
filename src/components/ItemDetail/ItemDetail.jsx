
import "./ItemDetail.css"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { carritoContexto } from "../../contexto/CarritoContexto"
import { useContext } from "react"
import { useState } from "react"


const ItemDetail = ({id, nombre, precio, img2 ,desc, stock}) => {
    
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarProducto} = useContext(carritoContexto)





    const quantity = (cantidad) =>{
        setAgregarCantidad(cantidad)
        

        const item = {id, nombre, precio}
        agregarProducto(item, cantidad)
    }

return (
    <div>
        <div className="contenedorItemDetail">
            <div className="div-detalle dos">
        <h2 className="titulo-detalle dos">{nombre}</h2>
        <h3 className="precio-detalle dos">${precio}</h3>
        <p className="desc-detalle dos">{desc}</p>
        <div>
            {

        agregarCantidad > 0 ? (<button className="button-terminar-compra"><Link Link to = "/cart" className="link-terminar-compra">Terminar compra</Link></button>) : (<ItemCount inicial = {1} stock= {stock} funcionAgregar = {quantity}/>)
            }
        </div>
        
        <button className="boton-detalle"><Link to={"/"} className="link-detalle">Volver</Link></button>
            </div>
        <img src={img2} alt={nombre} className="img-detalle uno"/>
        </div>
    </div>
)
}

export default ItemDetail
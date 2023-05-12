
import "./ItemDetail.css"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Await, Link } from "react-router-dom"
import { carritoContexto } from "../../contexto/CarritoContexto"
import { useContext } from "react"
import { useState, useEffect } from "react"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import {collection, getDocs, where, query, doc, updateDoc, onSnapshot, writeBatch, documentId} from "firebase/firestore"
import { db } from '../../services/firebase/config'
import Item from "../Item/Item"



const ItemDetail = ({id, Nombre, Precio, img2,desc, Stock}) => {
    
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarProducto} = useContext(carritoContexto)



    const quantity = (cantidad) =>{
        setAgregarCantidad(cantidad)
        

        const item = {id, Nombre, Precio}
        agregarProducto(item, cantidad)
    }




return (
    <div>
        <div className="contenedorItemDetail">
            <div className="div-detalle dos">
        <h2 className="titulo-detalle dos">{Nombre}</h2>
        <h3 className="precio-detalle dos">${Precio}</h3>
            <p className="desc-detalle dos">{desc}</p>
            <p>Stock: {Stock}</p>
        <div>
            {
                
                agregarCantidad > 0 ? (<button className="button-terminar-compra"><Link Link to = "/cart" className="link-terminar-compra">Terminar compra</Link></button>) : (<ItemCount inicial = {1} stock= {Stock} funcionAgregar = {quantity}/>)
            }



            <button className="button-terminar-compra"><Link to={"/"} className="link-terminar-compra">Seguir comprando</Link></button>
        </div>
        
        <button className="boton-detalle"><Link to={"/"} className="link-detalle">Volver</Link></button>
            </div>
        <img src={img2} alt={Nombre} className="img-detalle uno"/>
        </div>
    </div>
)
}

export default ItemDetail

import "./ItemDetail.css"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { carritoContexto } from "../../contexto/CarritoContexto"
import { useContext } from "react"
import { useState, useEffect } from "react"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import {collection, getDocs, where, query, doc, updateDoc, onSnapshot} from "firebase/firestore"
import { db } from '../../services/firebase/config'
import Item from "../Item/Item"

const ItemDetail = ({id, Nombre, Precio, img2,desc, Stock}) => {
    
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarProducto} = useContext(carritoContexto)

    const [productos,setProductos] = useState([])

    useEffect(() =>{
        const q = query(collection(db, "productos"))
        
        const cambiar = onSnapshot(q, function(querySnapShot) {

            const docs = []
            querySnapShot.forEach(function(doc){
                docs.push({id:doc.id,...doc.data()})
            })
            setProductos(docs)
        })

        return () =>{
            cambiar()
        }

    }, [])



    const quantity = (cantidad) =>{
        setAgregarCantidad(cantidad)
        

        const item = {id, Nombre, Precio}
        agregarProducto(item, cantidad)
    }


        const handlerComprar = (id, Stock) =>{
        if (Stock > 0) {
            const productoRef = doc(db, "productos", id)
            updateDoc(productoRef, {
                Stock: Stock - 1
            })
            .then(() =>{
                console.log("Producto eliminado")
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }

return (
    <div>
        <div className="contenedorItemDetail">
            <div className="div-detalle dos">
        <h2 className="titulo-detalle dos">{Nombre}</h2>
        <h3 className="precio-detalle dos">${Precio}</h3>
            <p className="desc-detalle dos">{desc}</p>
        <div key={Item.id}>
            {
                
                agregarCantidad > 0 ? (<button className="button-terminar-compra"><Link Link to = "/cart" className="link-terminar-compra">Terminar compra</Link></button>) : (<ItemCount inicial = {1} stock= {Stock} funcionAgregar = {quantity}/>)
            }
            <p>Stock: {Stock}</p>
            <button onClick={() => handlerComprar(Item.id, Item.stock)}>Compra</button>
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
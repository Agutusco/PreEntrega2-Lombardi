
import { useEffect, useState } from 'react'
import {getProducts, getProductosPorCategoria} from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"


import React from 'react'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    
    // const {idCategoria} = useParams()

    
    useEffect( () => {
        getProducts()
        .then(Response =>{
            setProductos(Response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])
        // const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts


    //     funcionProductos(idCategoria)
    //         .then(res => setProductos(res))
    //         .catch(error => console.error(error))
    // , [idCategoria])
    return (
    <div>
        {productos.length === 0 ? <h1>Cargando</h1> : <div>
            <h1>{greeting}</h1>
            <ItemList products={productos}/>
            </div>}

        {/* <h2 className='titulo-principal'>  </h2>
        <p className='subtitulo-principal'>Hacemos envios a todo el país</p> */}
        {/* <ItemList products={productos}/> */}
    </div>
    )
}

export default ItemListContainer








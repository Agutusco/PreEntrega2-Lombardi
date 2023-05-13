import React from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { carritoContexto } from '../../contexto/CarritoContexto'


const CartWidget = () => {

    const {carrito} = useContext(carritoContexto)

    const imgLink = "../..//img/carrito (2).png"
    
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)


    return (
    <Link to= "/cart">
    <img className='imgCarrito' src={imgLink} alt="" />
    {
        totalCantidad
    }
    </Link>
    )
}

export default  CartWidget
import "./item.css"
import { Link } from 'react-router-dom'
import { carritoContexto } from "../../contexto/CarritoContexto"
import { useContext, useState } from "react"

const Item = ({id,img,Nombre,Precio,Stock}) => {


return (
    <div className='tarjetaProducto'>
        <h2>{Nombre}</h2>
        <p>Precio: ${Precio}</p>
        <img src={img} alt=""  className='imgProducto'/>
        <button className="boton"><Link to= {`/item/${id}`} className="btn-link">Ver Más</Link></button>
    </div>
)
}

export default Item

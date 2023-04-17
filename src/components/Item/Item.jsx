import "./item.css"
import { Link } from 'react-router-dom'


const Item = ({id,img,nombre,precio}) => {
return (
    <div className='tarjetaProducto'>
        <h2>{nombre}</h2>
        <p>Precio: ${precio}</p>
        <img src={img} alt=""  className='imgProducto'/>
        <button className="boton"><Link to= {`/item/${id}`} className="btn-link">Ver Más</Link></button>
    </div>
)
}

export default Item

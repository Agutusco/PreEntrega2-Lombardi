import "./item.css"
import { Link } from 'react-router-dom'


const Item = ({id,img,nombre,precio}) => {
return (
    <div className='tarjetaProducto'>
        <h2>{nombre}</h2>
        <p>Precio: ${precio}</p>
        <img src={img} alt=""  className='imgProducto'/>
        <Link to= {`/item/${id}`}>Ver Más</Link>
    </div>
)
}

export default Item

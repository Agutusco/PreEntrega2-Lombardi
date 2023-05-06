import "./CartItem.css"
import Item from "../Item/Item"


const CartItem = ({Item, cantidad}) => {
return (
    <>
    <div className="contenedor-compra">
        <h4>{Item.Nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${Item.Precio}</p>
    </div>
    </>
)
}

export default CartItem
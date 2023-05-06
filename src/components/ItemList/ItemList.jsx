
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
    return (
    <div className="contenedorProductos">
        {
        products.map(prod  => {
            return <Item key={prod.id}  {...prod} />
        })
        }

    
    </div>
    
    )
}

export default ItemList
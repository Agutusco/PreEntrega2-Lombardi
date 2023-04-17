
import { useEffect, useState } from 'react'
import {getProducts, getProductosPorCategoria} from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"



const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))
    }, [idCategoria])


    return (
        <>
            <h2 className='titulo-principal'> {greeting} </h2>
            <ItemList products={productos} />
        </>
    )
}

export default ItemListContainer








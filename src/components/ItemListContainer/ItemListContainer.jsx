
import { useEffect, useState } from 'react'
import {getProducts, getProductosPorCategoria} from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import {collection, getDocs, where, query} from "firebase/firestore"
import { db } from '../../services/firebase/config'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect ( () => {
        const productosTienda = idCategoria ? query(collection(db, "productos"), where("cat", "==", idCategoria)) : collection(db, "productos");
        
        getDocs(productosTienda)
            .then(res => {
            const productosFirebase = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id, ...data}
            })
            setProductos(productosFirebase)
        })
            .catch(error => console.log(error))
    },[])


    return (
        <>
            <h2 className='titulo-principal'> {greeting} </h2>
            <ItemList products={productos} />
        </>
    )
}
export default ItemListContainer


// useEffect(() => {

//     const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;

//     funcionProductos(idCategoria)
//         .then(res => setProductos(res))
//         .catch(error => console.error(error))
// }, [idCategoria])






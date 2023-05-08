
import { useEffect, useState } from 'react'
import {getProducts, getProductosPorCategoria} from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import {collection, getDocs, where, query, doc, updateDoc, onSnapshot} from "firebase/firestore"
import { db } from '../../services/firebase/config'

const ItemListContainer = ({ greeting }) => {

    // const handlerComprar = (id, Stock,) =>{
    //     if (Stock > 0) {
    //         const productoRef = doc(db, "productos", id)
    //         updateDoc(productoRef, {
    //             Stock: Stock - 1
    //         })
    //         .then(() =>{
    //             console.log("Producto eliminado")
    //         })
    //         .catch((error) =>{
    //             console.log(error)
    //         })
    //     }
    // }

    const [productos, setProductos] = useState([]);

    const {cat} = useParams();

    useEffect ( () => {
        const productosTienda = cat ? query(collection(db, "productos"), where("cat", "==", cat)) : collection(db, "productos");
        
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

// idCategoria







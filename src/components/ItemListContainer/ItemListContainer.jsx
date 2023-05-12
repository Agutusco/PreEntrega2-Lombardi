
import { useEffect, useState } from 'react'
import {getProducts, getProductosPorCategoria} from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"
import { db } from '../../services/firebase/config'
import { collection, doc, query, updateDoc, onSnapshot, where, getDocs } from "firebase/firestore";
const ItemListContainer = ({ greeting }) => {


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
    },[cat])


    return (
        <>
            <h2 className='titulo-principal'> {greeting} </h2>
            <ItemList products={productos} />
        </>
    )
}
export default ItemListContainer









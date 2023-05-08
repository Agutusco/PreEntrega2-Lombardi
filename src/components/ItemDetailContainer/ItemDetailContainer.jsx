// import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { db } from "../../services/firebase/config";
import {getDocs, doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {
    const [Producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect ( () =>{
        const nuevoDoc = doc(db, "productos", idItem)
        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data()
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto)
            })
            .catch(error => console.log(error))
    }, [idItem])
    
    return (
        <div>
        <ItemDetail {...Producto} />
    </div>
)
}

export default ItemDetailContainer

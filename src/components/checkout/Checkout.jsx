import { useState, useEffect, useContext } from "react"
import { db } from "../../services/firebase/config"
import { collection, addDoc, doc, updateDoc, query, onSnapshot } from "firebase/firestore"
import { carritoContexto } from "../../contexto/CarritoContexto"
import { Link } from "react-router-dom"



const Checkout = () => {

    const {carrito, vaciarCarrito} = useContext(carritoContexto)
    const [Nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")
console.log(carrito);

    const manejadorSubmit = (event) =>{
        event.preventDefault()

        if (!Nombre || !apellido || !telefono || !email || !email2) {
            setError("Por favor completa los campos")
            return
        }
        
        if (email !== email2) {
            setError("El email es distinto")
            return
        }

        const orden = {
            items: carrito.map((producto) => ({
                id:producto.item.id,
                Nombre:producto.item.Nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, productos) => total + productos.item.Precio * productos.cantidad, 0),
            Nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes", orden))
        .then((docRef) =>{
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch((error) => {
            console.error("Hubo un problema con tu orden", error)
            setError("Se produjo un error con tu orden, intente luego")
        })


    orden.items.map(productos => (cambiarStock(productos.id, productos.quantity)))

    }




    const [productos,setProductos] = useState([])

    useEffect(() =>{
        const q = query(collection(db, "productos"))

        const modificar = onSnapshot(q, function(querySnapshot){
            const docs = []
            querySnapshot.forEach(function(doc){
                docs.push({id:doc.id, ...doc.data() })
            })
            setProductos(docs)
        })
        return () => {
            modificar()
        }
    }, [])

const cambiarStock = (id, quantity) =>{
    const productosRef = doc(db, "productos", id)
    const product = product.find(prod => prod.id === id)
    if (product) {
        updateDoc(productosRef, {Stock: productos.Stock - quantity})
        .then(() => console.log(`se compro ${productosRef}`))
        .catch((error) => console.error(error))
    }
}




    return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorSubmit}>
            {carrito.map((productos) => (
                <div key={productos.item.id}>
                    <p>
                        {productos.item.Nombre} X {productos.cantidad}
                    </p>
                    <p>Precio ${productos.item.Precio}</p>
                </div>
            ))
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Verificar tu email</label>
                <input type="text" value={email2} onChange={(e) => setEmail2(e.target.value)}/>
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Finalizar compra</button>
        </form>
        {ordenId &&(

            <p>Estaremos analizando tu pedido, pronto llegara a tu dirección. Tu orden es {ordenId}</p>
        )
    }
    </div>
)
}

export default Checkout
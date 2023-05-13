import { useState, useEffect, useContext } from "react"
import { db } from "../../services/firebase/config"
import { collection, addDoc, doc, updateDoc, query, onSnapshot, getDocs, deleteDoc } from "firebase/firestore"
import { carritoContexto } from "../../contexto/CarritoContexto"
import { Link } from "react-router-dom"
import "./Checkout.css"
import { Navbar } from "react-bootstrap"
import ItemDetail from "../ItemDetail/ItemDetail"


const Checkout = () => {

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
    
    const cambiarStock = (id, cantidad) =>{
    const productosRef = doc(db, "productos", id)
    const product = productos.find((productos) => productos.id === id)
    if (product) {
        updateDoc(productosRef, {Stock: productos.Stock - cantidad})
        .then(() => console.log(`se compro ${productosRef}`))
        .catch((error) => console.error(error))
    }
}



    const {carrito, vaciarCarrito} = useContext(carritoContexto)
    const [Nombre, setNombre] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")



    const manejadorSubmit = (event) =>{
        event.preventDefault()

        if (!Nombre || !ubicacion || !telefono || !email || !email2) {
            setError("Por favor completa los campos")
            return
        }
        
        if (email !== email2) {
            setError("El email es distinto")
            return
        }

        if (carrito.length === 0) {
            setError("Tu carrito esta vacío")
        }

        const orden = {
            items: carrito.map((producto) => ({
                id:producto.Item.id,
                Nombre:producto.Item.Nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, productos) => total + productos.Item.Precio * productos.cantidad, 0),
            Nombre,
            ubicacion,
            telefono,
            email,
        }

        addDoc(collection(db, "ordenes"), orden)
        .then((docRef) =>{
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch((error) => {
            console.error("Hubo un problema con tu orden", error)
            setError("Se produjo un error con tu orden, intente luego")
        })
    }
    
    
    






    return (
    <div>
        <h2 className="titulo-checkout">Checkout</h2>
        <div className="formulario-checkout">
        <form onSubmit={manejadorSubmit}>
            {carrito.map((productos) => (
                <div key={productos.Item.id} className="datos">
                    <p>Título: {productos.Item.Nombre}</p>
                    <p>Cantidad: {productos.cantidad}</p>
                    <p>Precio ${productos.Item.Precio}</p>
                </div>
            ))
            }
            <div className="seccion-form">
                <label htmlFor="" className="hola">Nombre y apellido</label>
                <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="seccion-form">
                <label htmlFor="">Ubicación</label>
                <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}/>
            </div>
            <div className="seccion-form">
                <label htmlFor="">Telefono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>
            <div className="seccion-form">
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="seccion-form">
                <label htmlFor="">Verificar tu email</label>
                <input type="email" value={email2} onChange={(e) => setEmail2(e.target.value)}/>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="button-form">Finalizar compra</button>
        </form>
            {ordenId &&(
            <p className="id">Estaremos analizando tu pedido, pronto llegara a {ubicacion}. Tu orden es <strong>{ordenId}</strong></p>
            )}
        </div>
    </div>
)
}

export default Checkout
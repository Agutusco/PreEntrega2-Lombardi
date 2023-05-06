import { useState, createContext } from "react";
import Item from "../components/Item/Item";

export const carritoContexto = createContext({carrito: []})


export const ProveedorContexto = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    console.log(carrito);

    const agregarProducto = (Item, cantidad) => {
        if (!agregadoAlCarrito(Item.id)) {
            setCarrito(prev => [...prev, {Item,cantidad}])
        }else{
            console.log("producto ya agregado perri")
        }
    }


    const eliminarProductoCarrito = (id) =>{
        const carritoNuevo = carrito.filter(prod => prod.id !== id)
        setCarrito(carritoNuevo)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }



    const agregadoAlCarrito = (id) =>{
        return carrito.some(prod => prod.id === id)
    }

    return(
        <carritoContexto.Provider value={{carrito, agregarProducto, eliminarProductoCarrito, vaciarCarrito}}>
            {children}
        </carritoContexto.Provider>
    )




}

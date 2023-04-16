const productos = [
    {nombre: "Lego City", precio: 4300, id: "1", img: "./img/legocity.webp", cat:"1"},
    {nombre: "Lego Friends", precio: 3900, id: "2", img:"./img/legofriends.webp",cat:"1"},
    {nombre: "Lego Star Wars", precio: 4800, id:"3", img:"./img/legostarwars.webp",cat:"1"},
    {nombre: "Lego Super Heroes", precio: 3800, id:"4", img:"./img/legosuperheroes.webp",cat:"1"},
    {nombre:"Dino 1", precio: 1400, id:"5", img:"./img/dino1.webp",cat:"2"},
    {nombre: "dino2", precio:1, id: "6", img:"./img/dino2.webp",cat:"2"},
    {nombre: "dino2", precio:1, id: "7", img:"./img/dino3.webp",cat:"2"},
    {nombre: "dino2", precio:1, id: "8", img:"./img/dino4.webp",cat:"2"},

]

//Con los 2 segundos creamos un "delay" de que tarda la pagina
export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        },100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise (resolve =>{
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        },100)
    })
}



// Funcion que retorna por CATEGORIA
export const getProductosPorCategoria = (categoria) => {
    return new Promise (resolve => {
        setTimeout ((categoria) => {
            const productosCategoria = productos.filter(prod => prod.cat === categoria)
        resolve(productosCategoria)
        },100)
    })
}
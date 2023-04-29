const productos = [
    {nombre: "Lego City",
    precio: 4300, 
    id: "1", 
    img: "../img/legocity.webp", 
    cat:"1", 
    stock: 10,
    desc:"Lego para simular un robo. Viene con dos personajes y un vehiculo. Esta misma esta basada en la serie de televisión de Lego City Adventure de 2019. Juego para niños de entre 5 a 12 años. Prohibido para niños de entre 0 a 3 años, contiene piezas muy pequeñas."
    },

    {nombre: "Lego Friends", 
    precio: 3900, id: "2", 
    img:"../img/legofriends.webp",
    cat:"1", 
    stock: 10,
    desc:"Lego friends, creado especialmente para atraer a las niñas y que puedan crear sus propias casas. Viene con dos personajes y una pequeña cascada.Juego para niños mayores a 5 años. Prohibido para niños de entre 0 a 3 años, contiene piezas muy pequeñas"
    },

    {nombre: "Lego Star Wars", 
    precio: 4800, 
    id:"3", 
    img:"../img/legostarwars.webp",
    cat:"1",
    stock: 10,
    desc:"Lego Star Wars, basado en las peliculas y sus videojuegos nos trae 4 personajes, una nave y una pequeña base. Forma parte de la colección de Star Wars edición limitada.Juego para niños mayores a 6 años. Prohibido para niños de entre 0 a 3 años, contiene piezas muy pequeñas."
    },

    {nombre: "Lego Super Heroes", 
    precio: 3800, 
    id:"4", 
    img:"../img/legosuperheroes.webp",
    cat:"1",
    stock: 10,
    desc: "Lego Marvel super heroes edición Black Panther. Nos trae 3 personajes incluyendo un rinoceronte y una pequeña base. Forma parte de la colección de superheroes de Marvel. Juego para niños de entre 6 a 12 años. Prohibido para niños de entre 0 a 3 años, contiene piezas muy pequeñas"
    },

    {nombre:"Dinosaur Planet", 
    precio: 1800, 
    id:"5", 
    img:"../img/dino1.webp",
    cat:"2",
    stock: 10,
    desc:"Dinosaurio funcional con batería. Estas ya vienen incluidas. Hace ruido, camina y mueve tanto la cabeza como la cola. Jueguete para niños mayores a los 3 años de edad"
},

    {nombre: "Dinosaur Playset", 
    precio: 2300, 
    id: "6", 
    img:"../img/dino2.webp",
    cat:"2",
    stock: 10,
    desc:"Incluye tres dinosaurios de distintas especies. Los tres incluyen movimientos, ya provienen con batería. Jueguete para niños mayores a los 3 años de edad."
},

    {nombre: "Dino World", 
    precio: 3200, 
    id: "7", 
    img:"../img/dino3.webp",
    cat:"2",
    stock: 10,
    desc: "Increible dinosaurio. En la misma caja incluye dos bases, dos personajes, un arma y un helicoptero para atrapar al animal extinto. Jueguete para niños mayores a los 3 años de edad."
},

    {nombre: "Diplodocus", 
    precio: 1500, 
    id: "8", 
    img:"../img/dino4.webp"
    ,cat:"2",
    stock: 10,
    desc:" Dinosaurio hervíboro con movimientos. Las baterías ya vienen incluidas en él. Juegute para niños mayores a los 3 años de edad."
},


]

//Con los 2 segundos creamos un "delay" de que tarda la pagina
export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout( () => {
            resolve(productos)
        },100)
    })
}

// funcion que retorna UN SOLO ITEM
export const getUnProducto = (id) =>{
    return new Promise (resolve =>{
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        },100)
    })
}



// Funcion que retorna por CATEGORIA
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const productosCategoria = productos.filter(prod => prod.cat === idCategoria)
        resolve(productosCategoria)
        },100)
    })
}

import "./ItemDetail.css"
import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
return (
    <div className='contenedorItemDetail'>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <h3>{id}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, cupiditate odio magni quae placeat, perspiciatis esse hic voluptatum accusamus, dolore dolorum non nisi aut veniam. Deleniti officia perspiciatis quae magni?</p>
        <img src={img} alt="" />

    </div>
)
}

export default ItemDetail
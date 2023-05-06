import React from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { carritoContexto } from '../../contexto/CarritoContexto'


const CartWidget = () => {

    const {carrito} = useContext(carritoContexto)

    const imgLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX///8AAABsbGzo6OjIyMg1NTU4ODhxcXHLy8vu7u5RUVHg4OBVVVVFRUXz8/Pr6+vR0dFcXFzX19c/Pz+1tbV6enqenp6srKwoKCj5+fmlpaXCwsKYmJiNjY2BgYEjIyMYGBgRERFkZGTz5f4sAAAExElEQVRoge1ba8OyIAy11EottYsVXZ4u//9HvhVDQTYUEt8vnY+BHmEwzjYKgh9++GF4ZDpG4b1MMOz9E+9Q4jGoZwTzLPfNTBBPJhvfzGuK+eSbeUMxL30zB1m1aoEzH70bWgODRbcYnTmYj7al2zhw5nR85oIzP8Y3dBBz6vP4zH+c+TI+M/jyeHzmHJzJfzD08b8Z+sqZr+MznznzbeoLJ8qQwtD+cCwI6tg7dUUwX70zTwjmyDvxkWBO7r6Z/6jVvfLNvKOY97x9vYgwLMC/bkuyaYU++AIwk8FECa9meDMcpJhWy+gm6cU3ijhIwIGGeHPIWzHx0MEMu4baVEGthgnt68687DBzEJx4j+fAzOAdH4aYEXR4nAzLDCfCjCYOctC+eJDjzAxyh9zNb0x5H1z7ujKzlLcaT37QvutBmeG5O7FllE5H1NCFI/OOfq4B28L6L0INBfiDNNGbFtCkPxWGCZiwQ+xUE28ozcxUHuN73ClBAii8MRPuqcHWF3Nn8OJNEnWmYHwZ+t4ZuwjtG880gDZ96C2mphtvmnYR17kyxNXBR2HuAjwQ5vuMDlkBGBpx727eE2Rlj6yqCHIGYgbHRyltGQy66hvfiRnExrwHszC0Ll2cmOGEPPRhvlCGdmKGGTSekAIgjvVIxIV50d/Mr81zJz7ThRkm0KB3ZYBG1bSvC/OKWjQo9sRydPEkNmZuYpHpXAV4o9tcxxPWBvE7Hda0xjZ48sCod2WQKX9X9M50HQYmNutdGdnAzKawRkU+sCSySO7Nh2W2KFGAobflQoZISai/Kk3or7feZq4N3QpyrLMVZ/oBCgycXqT8au09wfVYJesrbGnYMovv7whrVICF1O1gy7xBbdaBhD+kugBbZlinnWGNCpgoxe3ZMsNxYVl8wxL8lswMDh7LyjJsCEUSWTKLw9ayJINpX8tshY3elQGu+5AnNWCtpizRIJqkn0RGyLqYjt++cID1ZZGhEvx9hVAD1v3SXuipd2UMlODvFdaoOA3D7FDmZIMoUKdaI7tu4y+x7Blb/NCgKKOo7MgdNsgW0WIzRPm8OKWfis4x3fcQcmU1e7x7x9Oou7MZJ6lieO8SVNlTWtWplQhqg7UirK1xFs+tHfXFxatE29KmVLGet+wdQmpAHGhMVA6bxJcM18spaH6fOugTrLPj1atmEKt5lXa9rPnM6Xx6rKfIiVks1FX5mmG2EdzGitLLtm91ndfHjcvtFDF9S1jPTHwJKjIgq1MfimLCLMX2B2KP1Ku5gDlET4F1exWIUTsw60lIQxVZFDSl+QBmiwhWoNJGWNITGD4+TbKngVlw8GRP7UlD+hxpgryDg//WxxwZxszdu3w7N3Ue86W9ZkxlZJHTaXiEdrUKYTnE2q4DsuxhWNtgm2azi7qXPXHAgCiG1VmAF8fTaiJ5JxSf+G4Hud2kpu6H9ymxEx4RLzwl8J2T53uOQjCMo+OWMoEzKTVHhMNNVfG+rd32ZOVC3HhEBaSAvmG9Xe/+I6lA/Lx4A0uWOsvt/Nl+VUoKAyz6/OJ6MvtTX2WO/zct8fTd/c2z9La4a/Lyv0fTe+pwVqiIqo9nfMz7DKE4cKc5uwzzv5I8zCyChiL7erQ//PBDb/wD6k5CNz8LB6wAAAAASUVORK5CYII="
    
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)


    return (
    <Link to= "/cart">
    <img className='imgCarrito' src={imgLink} alt="" />
    {
        totalCantidad
    }
    </Link>
    )
}

export default  CartWidget
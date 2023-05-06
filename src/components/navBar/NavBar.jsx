import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink, Link } from 'react-router-dom'


const navBar = () => {
    return (
        <header>
            <Link to={"/"}>
            <img src="../img/logo1.png" className='logo-principal' alt="" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink className={"navbar-link"} to={`/categoria/1`}>Legos</NavLink>
                    </li>
                    <li>
                        <NavLink className={"navbar-link"} to={`/categoria/2`}>Dinosaurios</NavLink>
                    </li>
                    <li>
                        <NavLink className={"navbar-link"} to={`/categoria/3`}>Superhéroes</NavLink>
                    </li>
                    <li>
                        <NavLink className={"navbar-link"} to={`/categoria/4`}>Peluches</NavLink>
                    </li>
                </ul>
            </nav>
                <CartWidget/>
        </header>
    )
}

export default navBar
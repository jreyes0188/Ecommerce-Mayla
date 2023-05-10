import React, { useContext, useState } from "react";
import "./NavBar.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { CartContext } from "../../Context/Context";
import {CartWidget} from "../CartWidget/CartWidget"


const NavBar = () => {
    const { items } = useContext(CartContext)

    const [openCart, setOpenCart] = useState(false)

    const handleClickCart = () => {
        setOpenCart(true)
    }

    const handleCloseDrawer = () => {
        setOpenCart(false)
    }
    return (
        <nav className="Barra_Navegacion">
            <ul className="List-ul">
                <Link className="Link" to="/"> <h4>INICIO</h4> </Link>
                <Link className="Link"> <DropdownMenu /> </Link>
                <Link className="Link" to="/consultas"> <h4>CONSULTAS</h4> </Link>
                <Link onClick={handleClickCart} className="Cart_Shop" to="/cartshop"><ShoppingCartIcon />{items.length}</Link>
            </ul>
            <CartWidget open={openCart} onClose={handleCloseDrawer}/>
        </nav>
    )
}

export default NavBar;
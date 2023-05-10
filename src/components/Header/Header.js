import React from 'react'
import "./Header.css";
import img from "./logo.png"
import { Link } from "react-router-dom"


const Header = (props) => {
    return (
        <div className='Header'>

            <Link className="Link" to="/"><h1>{props.title}</h1> </Link> 
            <img src={img} alt ='logo'/>
        </div>
    )
}

export default Header;
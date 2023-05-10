import React from 'react'
import "./Greeting.css";


const Greeting = (props) => {
    return (
        <div className='greeting'>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Greeting
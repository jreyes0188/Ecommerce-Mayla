import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 2000)
    },[navigate])
    return (
        <div>

        </div>
    )
}

export default Logo
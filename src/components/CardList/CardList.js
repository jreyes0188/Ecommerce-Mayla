import { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import "./CardList.css"

//FireBase
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";

// React Router Dom
import {Link} from "react-router-dom"

const CardList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "products"))
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setProducts(docs)
        };
        getProducts()
    }, [])

    return (
        <div className='CharacterList-container'>
            {products.map(data => {
                return (
                    <div key ={data.id}>
                        <Link to = {`/detail/${data.id}`}><CardProduct products={data}/></Link>
                    </div>
                )
            })}
            </div>
    )
}

export default CardList
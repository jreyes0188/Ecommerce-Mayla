import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import ItemCount from '../../components/ItemCount/ItemCount';

import CardProduct from '../../components/CardProduct/CardProduct';

//FireBase
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

// PlayerDetail debe tener un css y despues importalo aca
// import "./PlayerDetail.css"

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "products"), where(documentId(), "==", id))
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setProduct(docs)
        };
        getProducts();
    }, [id]) 

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15px"}}>
            {product.map((data) => {
            return <CardProduct products={data} key={data.id} />
            })}
            <ItemCount initial={0} stock={5} />
        </div>
    )
}

export default ProductDetail
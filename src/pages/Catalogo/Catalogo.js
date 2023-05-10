import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

import CardProduct from "../../components/CardProduct/CardProduct";

const Catalogo = () => {
    let { product } = useParams();
    const [productCategory, setCategoryProduct] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const q = query(collection(db, "products"), where("product", "==", product));
            const docs = [];
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {

                docs.push({ ...doc.data(), id: doc.id });
            });

            setCategoryProduct(docs);
        };
        getCategory();
    }, [product]);

    return (
        <div>
        <div className="Catalogo"
            style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
            {productCategory.map((data) => {
                return <CardProduct products={data} key={data.id} />;
            })}
        </div>
        </div>
    );
};

export default Catalogo
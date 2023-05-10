import { useContext, } from "react";
import { CartContext } from "../../Context/Context";
import Drawer from '@mui/material/Drawer'
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// FireBase
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

// Alerta despues de hacer la compra
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

export const CartWidget = ({ open, onClose }) => {
    const { items, addProduct, deleteProduct, totalPrice } = useContext(CartContext)

    const [purchaseID, setPurchaseID] = useState("")
    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "consultas"), { 
            
        })
        setPurchaseID(docRef.id)
    }

    const buyOrder = (
        <Box sx={{ width: "40rem" }}>
            <List>
                {
                    items.map((item) => {
                        return (<ListItem key={item.id}>
                            <ListItemText primary={`${item.product} ${item.aumenta} x ${item.price}`} />
                            <Button onClick={() => deleteProduct(item)}>-</Button>
                            <Button onClick={() => addProduct(item)}>+</Button>
                            <span> {totalPrice (item) || " "}</span>
                        </ListItem>)
                    })
                }
            </List>
            <Link to="/cartshop">Comprar{onSubmit}</Link>
            {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
        </Box>
    )
    return (
        <div>
            <Drawer anchor="right" open={open} onClose={onClose}>{buyOrder}</Drawer>
        </div>
    )
}

export default CartWidget








/*import {useContext} from 'react'
import {Context} from "../../Context/Context"

export const CartWidget = () => {
    const {totalProduct} = useContext (Context)
    return (
        <div>
            <span>{totalProduct () || " "}</span>
        </div>
    )
}

export default CartWidget */

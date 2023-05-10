import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Button } from "@mui/material";
import {CartContext} from "../../Context/Context"

const CardProduct = ({products}) => {
    const {addProduct} = useContext(CartContext);
    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={products.img} sx ={{height: 380, width: 350}}
                    alt="Mayla"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {products.product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {products.price} | stock: {products.stock} unidades
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {products.description}
                    </Typography>
                </CardContent>
                <Button
                onClick={() => addProduct(products)}>Agregar Producto</Button>
                <Link to = {`/detail/${products.id}`}></Link>
            </CardActionArea>
        </Card>
    );
    
}



export default CardProduct
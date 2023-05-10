import { useState, createContext } from "react"

export const CartContext = createContext();

export const Context = ({children}) => {
    const [items, setItems] = useState ([])

    const addProduct = (newData) => {
        const addData = items.find(item => item.id === newData.id)
        if(addData){
            setItems(prevState => prevState.map(item => {
                if(item.id === newData.id ) {
                    return{
                        ...item,
                        aumenta: item.aumenta+1
                    }
                } return item
            }))
        } else {

            setItems((prevState) => [ ...prevState,
                {
                    id:newData.id,
                    product:newData.product,
                    price:newData.price,
                    img:newData.img,
                    aumenta:1
                    
                }
            ])
        }
    }

    const totalPrice = () => {return items.reduce((prevState, item) => prevState + item.product * item.price, 0)}

    const deleteProduct = (item) => {
        const updateCart = items.map(p => {
            if (p.id === item.id) {
                return { ...p, aumenta: p.aumenta - 1 }
            } else {
                return p
            }
        } ).filter (p => p.aumenta > 0)
        setItems(updateCart)
    }
    return (
        <>
        <CartContext.Provider value={{ items, setItems, addProduct, deleteProduct, totalPrice}}>{children}</CartContext.Provider>
        </>

    )
}


/*import { useState, createContext } from "react"

export const CartContext = createContext();


export const Context = ({ Children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const totalPrice = () => {return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)}
    const totalProducts = () => {cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);}
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default Context*/

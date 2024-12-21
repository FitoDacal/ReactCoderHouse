import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id) 
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart((prev) => [...prev, productToAdd])
        } else {
            console.log("The product is already in the cart")
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        let accu = 0;

        cart.forEach((item) => {
            accu += item.quantity * item.price;
        })

        return accu
    }

    const getTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalQuantity = getTotalQuantity;

    const obj = {
        cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalQuantity
    }

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}
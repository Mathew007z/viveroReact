import React from 'react';
import { useState, useContext } from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    // Here , would be the logic that will be used to configure the cart.

    // ClearCart
    const clearCart = () => setCart([]);
    // InCart
    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;
    // Remove
    const removeProduct = (id) => setCart(cart.filter(prod => prod.id !== id));

    // put product
    const addProduct = (item, cantidad) => {
        if(isInCart(item.id)){
            setCart(cart.map(prod =>{
                return prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad } : prod
            }))
        }else{
            setCart([...cart, {...item, cantidad}]);
        }

    }



    return (
        <CartContext.Provider value={{
            cart,
            clearCart,
            addProduct,
            isInCart,
            removeProduct

        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;
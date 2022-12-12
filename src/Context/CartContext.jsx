import React from 'react';
import { useState, useContext } from 'react'
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)


const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    // Here , would be the logic that will be used to configure the cart.

    // Total Price
    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.cantidad * prod.precio), 0)
    }
    // Count product
    const cantidadItem = () =>{
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    // ClearCart
    const clearCart = () => setCart([]);
    // InCart
    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;
    // Remove
    const removeProduct = (id) => setCart(cart.filter(prod => prod.id !== id));

    // put product
    const addProduct = (item, cantidad) => {
        alert('Se agrego al Carrito!')
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
            removeProduct,
            cantidadItem,
            totalPrice

        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;
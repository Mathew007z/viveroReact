import { toast } from "react-hot-toast"; 
import React from "react";
import { useState, useContext, useEffect } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);



// Local Storage
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if(cart){
    return(cart = JSON.parse(localStorage.getItem('cart')));
  }else{
    return [];
  }
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getLocalStorage());

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])
  

  // Here , would be the logic that will be used to configure the cart.

  // Total Price
  const totalPrice = () => {
    return cart.reduce((acc, prod) => (acc += prod.cantidad * prod.precio), 0);
  };
  // Count product
  const cantidadItem = () => {
    return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
  };
  // ClearCart
  const clearCart = () => setCart([]);
  // InCart
  const isInCart = (id) => (cart.find((prod) => prod.id === id) ? true : false);
  // Remove
  const removeProduct = (id) => setCart(cart.filter((prod) => prod.id !== id));

  const eliminarPorUnidad = (id) =>
    setCart(
      cart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, cantidad: prod.cantidad - 1 };
        } else {
          return prod;
        }
      })
    );

  // put product
  const addProduct = (item, cantidad) => {
    toast.success("Se Agregó correctamente al Carrito");
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          return prod.id === item.id
            ? { ...prod, cantidad: prod.cantidad + cantidad }
            : prod;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };




  

  return (
    <CartContext.Provider
      // DISPONIBLES
      value={{
        cart,
        clearCart,
        addProduct,
        isInCart,
        removeProduct,
        cantidadItem,
        totalPrice,
        eliminarPorUnidad,
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProduct) =>{
        setCartList ([
            ...cartList,
            newProduct 
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito
            

        }}>         
            {children}
        </CartContext.Provider>
    )
}
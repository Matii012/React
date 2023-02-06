/* ------------------------------ Importaciones ----------------------------- */
import { useContext, createContext, useState } from "react";


const cartContext = createContext([])

export const useCartContext = () =>{ return useContext(cartContext) }

const CartProvider = ({children}) => {

    const [items, setItems] = useState ([])


    const agregarAlCarrito = (data) =>{
        const listaActual = items
        listaActual.push(data)
        setItems(listaActual)
    }

    const borrarDelCarrito = (id)=>{
        const nuevaLista = items.filter(e => e.id !== id);
        setItems(nuevaLista);
    }

    const limpiarCarrito = () =>{
        setItems([]);
    }

    const validarProducto = (id) =>{

        if (items.find(e=> e.id === id )){
            return true
        }else {
            return false
        }

    }


    return(

        <cartContext.Provider value={{items, agregarAlCarrito }} >
            {children}
        </cartContext.Provider>

    )


}
export default CartProvider
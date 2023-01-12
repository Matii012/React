/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useState } from 'react'
//styles
import './ItemListContainer.css'
//components
import ItemList from '../ItemList/ItemList'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemListContainer = () => { //función Constructora

    // const [categoria,setCategoria] = useState("all")

    // const categoriaHogar= () =>{
    //     setCategoria("hogar")
    // }

    // const categoriaTete= () =>{
    //     setCategoria("tete")
    // }

    // const categoriaTodo= () =>{
    //     setCategoria("all")
    // }




    return ( //retorno que renderiza


    <div>

            <p>Item List Container</p>

        <div className='category'>
            {/* <button onClick={categoriaHogar}>hogar</button>
            <button onClick={categoriaTete}>tete</button>
            <button onClick={categoriaTodo}>todo</button> */}
        </div>
            <ItemList/>

        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemListContainer

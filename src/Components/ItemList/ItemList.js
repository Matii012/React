/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useState, useEffect } from 'react'
//styles
import './ItemList.css'
//components
import Item from '../Item/Item'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemList = (props) =>{ //función Constructora
    
    const [productos, setProductos] = useState([])



    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} /> )))


    },[])





    return( //retorno que renderiza

        <div className='main-section'>
            <p>este es el item list</p>

            <div className='item'>
                {productos}
            </div>


        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemList

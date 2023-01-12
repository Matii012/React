/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useState } from 'react'
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



    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} /> )))













    return( //retorno que renderiza

        <div>
            <p>este es el item list</p>

            <div>
                {productos}
            </div>


        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemList

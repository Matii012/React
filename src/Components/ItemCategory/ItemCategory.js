/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useEffect, useState } from 'react';
//styles
import './ItemCategory.css'
//components
import Item from '../Item/Item';
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemCategory = (props) =>{ //función Constructora

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        
        fetch(`https://fakestoreapi.com/products/category/${props.categoria}`)
        .then(res=>res.json())
        .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} /> )))
    
    },[productos,props.categoria])








    return( //retorno que renderiza

        <section className='main-section'>
            {/* <p>este es el item list</p> */}
            {productos}
        </section>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemCategory

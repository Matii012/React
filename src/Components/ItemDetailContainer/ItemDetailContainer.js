/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useEffect, useState } from 'react'
import { useParams, } from 'react-router-dom'
//styles
import './ItemDetailContainer.css'
//components
import ItemDetail from '../ItemDetail/ItemDetail'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemDetailContainer = (props) =>{ //función Constructora

    
    const [productos, setProductos] = useState([ ])


    const {productoId} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res=>res.json())
            .then(productos=>setProductos(<ItemDetail  key={productos.id} id={"producto" + productos.id} data={productos} />))

    }, [productoId])


    return( //retorno que renderiza

        <section className='itemDetail-box'>
            {productos}
        </section>

        
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemDetailContainer

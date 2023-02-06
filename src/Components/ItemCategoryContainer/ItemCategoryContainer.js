/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useParams, } from 'react-router-dom'
//styles
import './ItemCategoryContainer.css'
//components
import ItemCategory from '../ItemCategory/ItemCategory'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemCategoryContainer = () =>{ //función Constructora

    
    // const [productos, setProductos] = useState([ ])


    const {categoriaId} = useParams()


    return( //retorno que renderiza

        <section className='main-section-container'>
            <ItemCategory categoria={categoriaId} />
        </section>

        
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemCategoryContainer

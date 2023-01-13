/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules

//styles
import './ItemListContainer.css'
//components
import ItemList from '../ItemList/ItemList'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemListContainer = (props) => { //función Constructora


    return ( //retorno que renderiza


    <div>


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

/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules

//styles
import './Item.css'
//components
import ItemCount from '../ItemCount/ItemCount'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const Item = (props) =>{ //función Constructora

    const {title, description, category, price,} = props.data




    return( //retorno que renderiza

        <div className='container-item'>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>

            <ItemCount stock={10} />
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default Item

/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
//styles
import './CardWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from  '@fortawesome/free-solid-svg-icons'
//components
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const CardWidget = (props) =>{ //función Constructora


    return( //retorno
    <div className='icon-container'>
        <FontAwesomeIcon className="shop" icon ={faCartShopping}></FontAwesomeIcon><div className='numero'>{props.cantidad}</div>
    </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default CardWidget
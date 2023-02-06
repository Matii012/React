/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useState, useEffect } from 'react';

//styles
import './ItemCount.css'
//components

//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemCount = (props) =>{ //función Constructora

    const [count, setCount] = useState (0);


    //Sumar
    const AddOne = () => {
        if (count < props.stock) {
            setCount (count + 1)

            props.guardarCantidadAComprar(count)
            

        }

    };
    //Restar
    const DisOne = () => {
        if (count > 0){
            setCount (count - 1)

            props.guardarCantidadAComprar(count)

        }
    };
    //Agregar



    return( //retorno que renderiza

        <div className='box-count'>
            <div className='box-count-children'>
                <button onClick={DisOne} className='btn-dis'>-</button>
                    <p>{count}</p>
                <button onClick={AddOne} className='btn-add'>+</button>
            </div>
        </div>    
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemCount

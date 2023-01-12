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
        }

    };
    //Restar
    const DisOne = () => {
        if (count > 0){
            setCount (count - 1)
        }
    };
    //Agregar
    const OnAdd = () =>{

    }


    return( //retorno que renderiza

        <div className='box-count'>
            <div className='box-count-children'>
                <button onClick={AddOne}>+</button>
                    <p>{count}</p>
                <button onClick={DisOne}>-</button>
            </div>
            <button>On Add</button>
        </div>    
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemCount

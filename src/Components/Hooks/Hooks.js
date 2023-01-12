/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { useState } from 'react';

//styles
import './Hooks.css'
//components

//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const Hooks = () =>{ //función Constructora

    const [contador, setContador] = useState (0);

    useEffect (() => {


        return () =>{
            
        }
    })


    const sumar = () => {
        setContador (contador + 1)
    };

    const restar = () => {
        setContador (contador - 1)
    };


    return( //retorno que renderiza

        <div>
            <button onClick={sumar}>Sumar</button>
                <p>{contador}</p>
            <button onClick={restar}>Restar</button>
        </div>    
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default Hooks

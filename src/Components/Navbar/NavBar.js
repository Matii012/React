/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
//styles
import './NavBar.css'
import CardWidget from '../CardWidget/CarWidget'
//components
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const NavBar = (props) =>{ //función Constructora


    return( //retorno que renderiza
        <header>
            <nav>
                <h1>Bears Shop</h1>
                    <li>
                        <a href='...'>Inicio</a>
                    </li>
                    <li>
                        <a href='...'>Tienda</a>
                    </li>
                    <li>
                        <a href='...'>Nosotros</a>
                    </li>
                    <li>
                        <a href='...'>Contáctenos</a>
                    </li>
                    
                    <div className='number'>
                        <CardWidget cantidad = "10"/>
                    </div>

            </nav>



        </header>

        
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default NavBar

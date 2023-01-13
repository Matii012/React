/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { Link } from 'react-router-dom'
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
                <h1 className='title'><Link to="/">Bears Shop</Link></h1>
                    <li>
                        <Link to ="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to ="/Productos">Productos</Link>
                    </li>
                    <li>
                        <Link to ="/Contáctenos">Contáctenos</Link>
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

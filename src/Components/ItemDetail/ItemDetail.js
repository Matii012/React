/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
//styles
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
//components
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemDetail = (props) =>{ //función Constructora

    const { title, description, category, price} = props.data


    return( //retorno que renderiza

        <article className='itemDetail-producto'>
            <h2>Detalles Del Producto</h2>
            <Card className="text-center">
                <Card.Header>{category}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className='button-box'>Comprar por {price} </Button>
                </Card.Body>
                <Card.Footer className="text-muted"><Link to="/productos">Volver a productos</Link></Card.Footer>
                <div className='itemCount'> 
                    <ItemCount stock={10} />
                </div>
            </Card>

        </article>

        
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemDetail
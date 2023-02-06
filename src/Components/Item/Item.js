/* -------------------------------------------------------------------------- */
/*                                Importaciones                               */
/* -------------------------------------------------------------------------- */

//modules
import { Link } from 'react-router-dom';
//styles
import './Item.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//components
import ItemCount from '../ItemCount/ItemCount'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const Item = (props) => { //función Constructora

    const { title, description, category, price, id } = props.data




    return ( //retorno que renderiza

        <div className='main'>



            <Card style={{ width: '80rem', height: '24rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{category}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Text>{price}</Card.Text>
                    <div className='container-link'>
                        <Link to={`/producto/${title}/${id}`} >Ver Detalles Del Producto</Link>
                    </div>
                </Card.Body>

            </Card>











        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default Item

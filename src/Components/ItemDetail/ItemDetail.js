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
import { useEffect, useState } from 'react';
//components
import { CartProvider, useCartContext } from '../../Context/CartContext'
//core


/* -------------------------------------------------------------------------- */
/*                                   Lógica                                   */
/* -------------------------------------------------------------------------- */
const ItemDetail = (props) =>{ //función Constructora

    const {items, agregarAlCarrito } = useCartContext()

    const [cantidadDeProductosAComprar, setCantidadDeProductosAComprar] = useState(0);

    const { title, description, category, price, id} = props.data




    const funcionDelHijoGuardarCantidad = (cantidadX) =>{
        setCantidadDeProductosAComprar(cantidadX)
    }

    const onAdd = () =>{


        if (cantidadDeProductosAComprar !==0){
            const producto = {
                id:id,
                title:title,
                category:category,
                price:price,
                count:cantidadDeProductosAComprar
            }
            agregarAlCarrito(producto)
            
        }else{
            alert("no agregaste productos")
        }
    }


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
                    <ItemCount stock={10} guardarCantidadAComprar={funcionDelHijoGuardarCantidad} />
                    <button onClick={onAdd} className="btn-buy">On Add</button>
                </div>
            </Card>

        </article>

        
    )
}

/* -------------------------------------------------------------------------- */
/*                                Exportaciones                                */
/* -------------------------------------------------------------------------- */

export default ItemDetail
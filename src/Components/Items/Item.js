import classes from './Item.module.css'

import Card from "../UI/Card";
import Button from '../UI/Button';

import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Item = props => {

    const ctx_cart = useContext(CartContext);

    const price = `$${props.item.price.toFixed(2)}`;
    
    const onClickHandler = () => {
        ctx_cart.onAddCart(props.item);
    }

    return(
        <Card className={classes.item_card}>
            <div>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <h3 className={classes.item_card_price}>{price}</h3>
            </div>
            <Button onClick={onClickHandler}>+Add cart</Button>
        </Card>
    )
}

export default Item;
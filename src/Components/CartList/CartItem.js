import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './CartItem.module.css'

const Item = props => {

    const price = `$${props.item.price.toFixed(2)}`;
    
    return(
        <Card className={classes.item_card}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={classes.item_cart_display}>
                    <h3 className={classes.item_card_price}>{price}</h3>
                    <div className={classes.item_cart_amount}>
                        <h4>x{props.item.count}</h4>
                    </div>
                </div>
            </div>
            <div className={classes.item_cart_display}>
                <Button onClick={() => props.onRemoveCart(props.item.id)}>-</Button>
                <Button onClick={() => props.onAddCart(props.item)}>+</Button>
            </div>
        </Card>
    )
}

export default Item;
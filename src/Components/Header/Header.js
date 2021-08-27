import classes from './Header.module.css'

import { useContext } from 'react'

import Button from '../UI/Button';
import CartIcon from './CartIcon'
import CartContext from '../../store/cart-context.js'


const Header = props => {
    
    const ctx_cart = useContext(CartContext);
    const countItems = ctx_cart.items.reduce((count, item) => count + item.count, 0);


    return(
        <div className={classes.header}>
            <h2>Food</h2>
            <Button onClick={props.setOnCartList}>
                <div className={classes.header_icon}>
                    <CartIcon />
                </div>
                Your Cart
                <div className={classes.header_amount}>{countItems}</div>
            </Button>
        </div>
    )
}

export default Header;
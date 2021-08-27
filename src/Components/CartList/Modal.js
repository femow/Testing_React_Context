import classes from './Modal.module.css'

import ReactDOM from 'react-dom'
import { Fragment, useContext } from 'react'

import Card from "../UI/Card";
import Button from '../UI/Button';
import CartItem from './CartItem'

import CartContext from '../../store/cart-context'

const ModalBack = props => {
    return (
        <div className={classes.modal_back} onClick={props.onClick}></div>
    )
}

const ModalCard = props => {
    return (
        <Card className={classes.modal_front}>
            <header>
                <h2>{props.title}</h2>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Button onClick={props.onClick}>Ok</Button>
            </footer>
        </Card>
    )
}


const Modal = props => {
    
    const ctx_cart = useContext(CartContext);

    const onAddCartHandler = item => {
        console.log(item.id);
        ctx_cart.onAddCart(item);
    }
    
    const onRemoveCartHandler = id => {
        ctx_cart.onRemoveCart(id);
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalBack onClick={props.onClick}/>, document.getElementById('modal'))}
            {ReactDOM.createPortal(<ModalCard title='Cart list' onClick={props.onClick}>
                <Fragment>
                    {ctx_cart.items.map(i =>
                        <CartItem item={i} key={i.id} onAddCart={onAddCartHandler} onRemoveCart={onRemoveCartHandler}></CartItem>
                    )}
                    <h2 className={classes.header_total}>{`Total: $${ctx_cart.totalAmount.toFixed(2)}`}</h2>
                </Fragment>
            </ModalCard>, document.getElementById('modal'))}
        </Fragment>
    )
}

export default Modal;